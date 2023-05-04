import React, { useEffect, useRef, useState } from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage.jsx";
import ProductsServicesHomeHead from "./Products&ServicesHome/Products&ServicesHomeHead/Products&ServicesHome";
import ProductsServicesContainer from "./Products&ServicesContainer/ProductsServicesContainer";
import ProductsServicesGrid from "./Products&ServicesGrid/ProductsServicesGrid";
import Loader from "../Loader/Loader";
import ScrollingComponent from "../Clients/ScrollingComponent/ScrollingComponent";
import ProductsServicesFotter from "./ProductsServicesFotter/ProductsServicesFotter";

import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { firebasee } from "../../firebase.js";

const ProductsServices = () => {

    const [loader, setLoader] = useState(false);
    const [docs, setDocs] = useState([]);

    const [OP, setOP] = useState(0);

    const ref = useRef(null);

    const handleClick = async () => {
        const query1 = await collection(firebasee, "products");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb);         setDocs(aa.docs);
        console.log(docs[1]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values);
    }


    useEffect(() => {

        handleClick();

        setTimeout(() => {
            setLoader(true);
        }, 2000);

        window.scrollTo({
            top: 0,
            // behavior: 'smooth' // smooth scrolling animation
        });
        
        if (ref.current) {
            const { top } = ref.current.getBoundingClientRect();

            var hhToDivHeight = Math.round(top);

            setOP(hhToDivHeight);
            console.log(OP);
            console.log("Found");
        }
    }, [loader, OP]);

    const options = { year: "numeric", month: "long", day: "numeric"}
    const finalONe1 =  new Date(docs[4]?._document?.data?.value?.mapValue?.fields?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)
    const finalONe2 =  new Date(docs[5]?._document?.data?.value?.mapValue?.fields?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)
    const finalONe3 =  new Date(docs[6]?._document?.data?.value?.mapValue?.fields?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)
    

    var docs1 = {
        eventName: docs[4]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        eventDescription: docs[4]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[4]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        timestamp: finalONe1,
        purchaseNow: true
    }
    
    var docs2 = {
        eventName: docs[5]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        eventDescription: docs[5]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[5]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        timestamp: finalONe2,
        purchaseNow: true
    }
    
    var docs3 = {
        eventName: docs[6]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        eventDescription: docs[6]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[6]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        timestamp: finalONe3,
        purchaseNow: true
    }

    return(
        loader? <div>
            <StartingPage want={true}/>
            <ProductsServicesHomeHead />
            <ProductsServicesContainer />
            <ProductsServicesGrid />
            <div ref={ref}><ScrollingComponent heightStartsHere={OP != 0? OP : 2000} firstImage={docs1?.linkURl[0]?.stringValue} timestamp1={finalONe1} timestamp2={finalONe2} timestamp3={finalONe3} secondImage={docs2?.linkURl[0]?.stringValue} thirdImage={docs3?.linkURl[0]?.stringValue} firstHead={docs1?.eventName} firstDes={docs1?.eventDescription} secondHead={docs2?.eventName} secondDes={docs2?.eventDescription} thirdHead={docs3?.eventName} thirdDes={docs3?.eventDescription} firstLink="" secondLink="" thirdLink=""/></div>
            <ProductsServicesFotter />
        </div> : <Loader />
    )
}

export default ProductsServices;