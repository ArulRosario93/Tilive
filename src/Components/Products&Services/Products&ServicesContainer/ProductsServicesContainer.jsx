import React, { useState, useEffect } from "react";
import "./ProductsServicesContainer.css";

import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { firebasee } from "../../../firebase";
import { Link } from "react-router-dom";

const ProductsServicesContainer = () => {

    const [docs, setDocs] = useState([]);
        
    const handleClick = async () => {
const query1 = await collection(firebasee, "products");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb);         
        
    setDocs(aa.docs[0]?._document?.data?.value?.mapValue?.fields);
        console.log(aa.docs[0]?._document?.data?.value?.mapValue?.fields);
    }

    useEffect(() => {
        handleClick();
    }, []);

    
    var stringValue = `${docs?.productDescription?.stringValue}`;

    const options = { year: "numeric", month: "long", day: "numeric"}
    const finalONe =  new Date(docs?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)

    var stateChange = {
        eventCaption: "",
        eventDescription: stringValue,
        eventName: docs?.productName,
        linkURl: docs?.LinkUrl?.arrayValue?.values,
        timestamp: finalONe,
        purchaseNow: true
    }

    return(
        <div className="ProductsServicesContainer">
            <div className="ProductsServicesContainerDes">
                <h2 className="ProductsServicesContainerDesHead">{docs?.productName?.stringValue}</h2>
                <br /><br />
                <p className="ProductsServicesContainerDesP">{stringValue.substring(0, 750) + "..."}</p>
                <br /><br />
                <div className="ProductsServicesContainerViewInDetail"><Link to={"/moredetail"} state={{stateChange}}><button>View In Detail</button></Link></div>
            </div>
            <div className="ProductsServicesContainerImg"><img src={docs?.LinkUrl?.arrayValue?.values[0]?.stringValue}/></div>
        </div>
    )
}

export default ProductsServicesContainer;