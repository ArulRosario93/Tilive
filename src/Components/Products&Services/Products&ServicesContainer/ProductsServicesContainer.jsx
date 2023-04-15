import React, { useState, useEffect } from "react";
import "./ProductsServicesContainer.css";

import { getDocs, collection } from "firebase/firestore";
import { firebasee } from "../../../firebase";
import { Link } from "react-router-dom";

const ProductsServicesContainer = () => {

    const [docs, setDocs] = useState([]);
        
    const handleClick = async () => {
        const aa  = await getDocs(collection(firebasee, "products"));
        setDocs(aa.docs[0]?._document?.data?.value?.mapValue?.fields);
        console.log(aa.docs[0]?._document?.data?.value?.mapValue?.fields);
    }

    useEffect(() => {
        handleClick();
    }, []);

    
    var stringValue = `${docs?.productDescription?.stringValue}`;

    var stateChange = {
        eventCaption: "",
        eventDescription: stringValue,
        eventName: docs?.productName,
        linkURl: docs?.LinkUrl?.arrayValue?.values,
        purchaseNow: true
    }

    return(
        <div className="ProductsServicesContainer">
            <div className="ProductsServicesContainerDes">
                <h2 className="ProductsServicesContainerDesHead">{docs?.productName?.stringValue}</h2>
                <br /><br />
                <p className="ProductsServicesContainerDesP">{stringValue.substring(0, 750) + "..."}</p>
                <br /><br />
                <div className="ProductsServicesContainerViewInDetail"><Link to={"/news/event"} state={{stateChange}}><button>View In Detail</button></Link></div>
            </div>
            <div className="ProductsServicesContainerImg"><img src={docs?.LinkUrl?.arrayValue?.values[0]?.stringValue}/></div>
        </div>
    )
}

export default ProductsServicesContainer;