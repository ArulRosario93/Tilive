import React, { useEffect, useRef, useState } from "react";
import CareersHome from "./CareersHome/CareersHome";
import CarrersScrollList from "./CarrersScrollList/CarrersScrollList";
import Loader from "../Loader/Loader";
import { firebasee } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

const Careers = () => {

    const [heightFound, setHeightFound] = useState(0);

    const [loader, setLoader] = useState(false);

    const ref = useRef(null);

    var hhToDivHeight;
    
    const [docs, setDocs] = useState([]);

    const handleClick = async () => {
        const aa  = await getDocs(collection(firebasee, "tilive_data"));
        setDocs(aa.docs);
        console.log(aa.docs);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 2000);
            
        handleClick();

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


    const handleScroll = (e) => {
        console.log(e);
        console.log("Getting IT");
    }

    return(
        loader?
        <div className="Careers" onScroll={handleScroll}>
            <CareersHome />
            <div ref={ref}><CarrersScrollList heightFound={heightFound !=0? heightFound: 2000} docs={docs}/></div>
        </div>: <Loader />
    )
}

export default Careers;