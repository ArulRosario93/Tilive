import React, { useEffect, useRef, useState } from "react";
import CareersHome from "./CareersHome/CareersHome";
import CarrersScrollList from "./CarrersScrollList/CarrersScrollList";
import Loader from "../Loader/Loader";
import { firebasee } from "../../firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import ScrollingComponent from "../Clients/ScrollingComponent/ScrollingComponent";

const Careers = () => {

    const [heightFound, setHeightFound] = useState(0);

    const [loader, setLoader] = useState(false);

    const ref = useRef(null);

    var hhToDivHeight;
    
    const [docs, setDocs] = useState([]);
    const [docFound, setDocFound] = useState([]);

    const handleClick = async () => {
        const query1 = await collection(firebasee, "clients");

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
                eventName: item?._document?.data?.value?.mapValue?.fields?.clientName?.stringValue,
                eventDescription: item?._document?.data?.value?.mapValue?.fields?.aboutClient?.stringValue,
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
            setLoader(true);
        }, 2000);
            

        window.scrollTo({
            top: 0,
          });

        if (ref.current) {

            const { top } = ref.current.getBoundingClientRect();

            hhToDivHeight = Math.round(top);

            setHeightFound(hhToDivHeight);
            console.log(hhToDivHeight);
            console.log(ref);
            console.log("FOUND HERE");
        }
    }, [heightFound, loader]);

    const options = { year: "numeric", month: "long", day: "numeric"}
    const finalONe1 =  new Date(docFound[0]?.timestamp).toLocaleDateString(undefined, options)
    const finalONe2 =  new Date(docFound[1]?.timestamp).toLocaleDateString(undefined, options)
    const finalONe3 =  new Date(docFound[2]?.timestamp).toLocaleDateString(undefined, options)

    const handleScroll = (e) => {
        console.log(e);
        console.log("Getting IT");
    }

    return(
        loader?
        <div className="Careers" onScroll={handleScroll}>
            <CareersHome />
            <div ref={ref}>
                <ScrollingComponent  heightStartsHere={heightFound != 0? heightFound : 1000} timestamp1={finalONe1} timestamp2={finalONe2} timestamp3={finalONe3} firstImage={docFound[0]?.linkURl} secondImage={docFound[1]?.linkURl} thirdImage={docFound[2]?.linkURl} firstHead={docFound[0]?.eventName} firstDes={docFound[0]?.eventDescription} secondHead={docFound[1]?.eventName} secondDes={docFound[0]?.eventDescription} thirdHead={docFound[2]?.eventName} thirdDes={docFound[2]?.eventDescription} firstLink="" secondLink="" thirdLink="" />
                {/* <ScrollingComponent  heightStartsHere={heightFound != 0? heightFound : 2000} firstImage={docFound[0]?.linkURl} secondImage={docFound[1]?.linkURl} thirdImage={docFound[2]?.linkURl} firstHead={docFound[0]?.eventName} firstDes={docFound[0]?.eventDescription} secondHead={docFound[1]?.eventName} secondDes={docFound[1]?.eventDescription} thirdHead={docFound[2]?.eventName} thirdDes={docFound[2]?.eventDescription} firstLink="" secondLink="" thirdLink="" /> */}
            </div>
            {/* <div ref={ref}><CarrersScrollList heightFound={heightFound !=0? heightFound: 2000} docs={docs}/></div> */}
        </div>: <Loader />
    )
}

export default Careers;