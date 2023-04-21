import React, { useState, useEffect } from "react";
import "./ProductsServicesGrid.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { firebasee } from "../../../firebase";

const ProductsServicesGrid = () => {

    const [docs, setDocs] = useState([]);
    const [loader, setLoader] = useState(true);

    setTimeout(() => {
        setLoader(false);
    }, 1000);
        
    const handleClick = async () => {
        const query1 = await collection(firebasee, "products");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb);         
        
        setDocs(aa.docs);
        console.log(docs[1]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values);
    }

    useEffect(() => {
        handleClick();
    }, [loader]);

    const options = { year: "numeric", month: "long", day: "numeric"}
    const finalONe1 =  new Date(docs[1]?._document?.data?.value?.mapValue?.fields?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)
    const finalONe2 =  new Date(docs[2]?._document?.data?.value?.mapValue?.fields?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)
    const finalONe3 =  new Date(docs[3]?._document?.data?.value?.mapValue?.fields?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)


    var docs1 = {
        eventName: docs[1]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        eventDescription: docs[1]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[1]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        timestamp: finalONe1,
        purchaseNow: true
    }
    
    var docs2 = {
        eventName: docs[2]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        eventDescription: docs[2]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[2]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        timestamp: finalONe2,
        purchaseNow: true
    }
    
    var docs3 = {
        eventName: docs[3]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        timestamp: finalONe3,
        eventDescription: docs[3]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[3]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        purchaseNow: true
    }

    return(
        <div className="ProductsServicesGrid">
            <h1 className="ProductsServicesGridHead">Products</h1>
            <div className="ProductsServicesGridHere">

                <div className="ProductsServicesGridHereEach">
            <Link to={"/moredetail"} state={{ docs1 }}>
                    <div className="ProductsServicesGridHereEachImg">
                        <img src={docs[1]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values[0]?.stringValue}/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">{docs1.eventName}</h2>
                                <br />  
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                    <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">{docs1.eventName}</p>
                    </div>
            </Link>
                </div>


                <div className="ProductsServicesGridHereEach">
                <Link to={"/moredetail"} state={{ docs2 }}>

                    <div className="ProductsServicesGridHereEachImg">
                        <img src={docs[2]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values[0]?.stringValue}/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">{docs2.eventName}</h2>
                            <br /><br/>
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                    <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">{docs2.eventName}</p>
                    </div>
                    </Link>
                </div>
                <div className="ProductsServicesGridHereEach">
                <Link to={"/moredetail"} state={{ docs3 }}>

                    <div className="ProductsServicesGridHereEachImg">
                        <img src={docs[3]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values[0]?.stringValue}/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">{docs3.eventName}</h2>
                            <br /><br/>
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                        <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">{docs3.eventName}</p>
                    </div>
                    </Link>
                </div>



            </div>
        </div>
    )
}

export default ProductsServicesGrid;