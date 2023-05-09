import React, { useRef, useEffect, useState } from "react";
import ClientsHome from "./ClientsHome/ClientsHome";
import ClientsWhyUs from "./ClientsHome/ClientsWhyUs/ClientsWhyUs";
import ScrollingComponent from "./ScrollingComponent/ScrollingComponent";
import ClientFotter from "./ClientFotter/ClientFotter";
import Loader from "../Loader/Loader";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import { firebasee } from "../../firebase";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import CarrersScrollList from "../Careers/CarrersScrollList/CarrersScrollList";

const Clients = () => {

    const ref = useRef(null);

    const [mobileView, setmobileView] = useState(false);

    const [loader, serLoader] = useState(false);

    const [OP, setOP] = useState(0);

    var hhToDivHeight;
    
    const [docs, setDocs] = useState([]);
    const [docFound, setDocFound] = useState([]);

    const handleClick = async () => {
        const query1 = await collection(firebasee, "carrers");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb);
        setDocs(aa.docs);
    }

    const handleDocArray = () => {
        console.log(docs?.length);
        console.log("Found");

        var docFoundHere = [];

        const updateArraythere = docs?.map((item) => {

            console.log(item)

            var doc1 = {
                eventName: item?._document?.data?.value?.mapValue?.fields?.carrerName?.stringValue,
                eventDescription: item?._document?.data?.value?.mapValue?.fields?.carrerDescription?.stringValue,
                linkURl: item?._document?.data?.value?.mapValue?.fields?.fileLink?.arrayValue?.values[0].stringValue,
                timestamp: item?._document?.data?.value?.mapValue?.fields?.timeStamp?.timestampValue,
            }
            docFoundHere.push(doc1);
        })
                
        setDocFound(docFoundHere);
    }

    useEffect(() => {

        handleClick();
        
        console.log(docs);

        handleDocArray();

        setTimeout(() => {
            serLoader(true);
        }, 2000);

        if (window.screen.width > 425) {
            setmobileView(true);
        }

        window.scrollTo({
            top: 0,
            // behavior: 'smooth' // smooth scrolling animation
          });

        if (ref.current) {
            const { top } = ref.current.getBoundingClientRect();
            // OP = ;
            console.log(top);

            hhToDivHeight = Math.round(top);

            setOP(hhToDivHeight);
            console.log(hhToDivHeight);
            console.log(OP);
            console.log("Found OUTSIDE");
        }
    }, [OP, loader]);


    const options = { year: "numeric", month: "long", day: "numeric"}
    const finalONe1 =  new Date(docFound[0]?.timestamp).toLocaleDateString(undefined, options)
    const finalONe2 =  new Date(docFound[1]?.timestamp).toLocaleDateString(undefined, options)
    const finalONe3 =  new Date(docFound[2]?.timestamp).toLocaleDateString(undefined, options)

    return(
        loader? <div>
            <StartingPage want={true} color={mobileView}/>
            <ClientsHome />
            <ClientsWhyUs />
            {/* <div ref={ref}><CarrersScrollList heightFound={OP !=0? OP: 2000} docs={docs}/></div> */}
            <div ref={ref}>
            <ScrollingComponent  heightStartsHere={OP != 0? OP : 2000} timestamp1={finalONe1} timestamp2={finalONe2} timestamp3={finalONe3} firstImage={docFound[0]?.linkURl} secondImage={docFound[1]?.linkURl} thirdImage={docFound[2]?.linkURl} firstHead={docFound[0]?.eventName} firstDes={docFound[0]?.eventDescription} secondHead={docFound[1]?.eventName} secondDes={docFound[0]?.eventDescription} thirdHead={docFound[2]?.eventName} thirdDes={docFound[2]?.eventDescription} firstLink="" secondLink="" thirdLink="" />
            </div>
            <ClientFotter />
        </div> : <Loader />
    )
}

export default Clients;