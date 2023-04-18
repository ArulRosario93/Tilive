import React, { useState, useEffect } from "react";
import "./ProductsServicesGrid.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { firebasee } from "../../../firebase";

const ProductsServicesGrid = () => {

    const [docs, setDocs] = useState([]);
    const [loader, setLoader] = useState(true);

    setTimeout(() => {
        setLoader(false);
    }, 1000);
        
    const handleClick = async () => {
        var aa  = await getDocs(collection(firebasee, "products"));
        setDocs(aa.docs);
        console.log(docs[1]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values);
    }

    useEffect(() => {
        handleClick();
    }, [loader]);

    var docs1 = {
        eventName: docs[1]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        eventDescription: docs[1]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[1]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        purchaseNow: true
    }

    var docs2 = {
        eventName: docs[2]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        eventDescription: docs[2]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[2]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        purchaseNow: true
    }

    var docs3 = {
        eventName: docs[3]?._document?.data?.value?.mapValue?.fields?.productName?.stringValue,
        eventDescription: docs[3]?._document?.data?.value?.mapValue?.fields?.productDescription?.stringValue,
        linkURl: docs[3]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values,
        purchaseNow: true
    }

    return(
        <div className="ProductsServicesGrid">
            <h1 className="ProductsServicesGridHead">Products</h1>
            <div className="ProductsServicesGridHere">

                <div className="ProductsServicesGridHereEach">
            <Link to={"/news/event"} state={{ docs1 }}>
                    <div className="ProductsServicesGridHereEachImg">
                        <img src={docs[1]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values[0]?.stringValue}/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">Turing Machine</h2>
                                <br />  
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                    <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">Turing Machine</p>
                    </div>
            </Link>
                </div>



                <div className="ProductsServicesGridHereEach">
                <Link to={"/news/event"} state={{ docs2 }}>

                    <div className="ProductsServicesGridHereEachImg">
                        <img src={docs[2]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values[0]?.stringValue}/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">Alpha Machine</h2>
                            <br /><br/>
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                    <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">Alpha Machine</p>
                    </div>
                    </Link>
                </div>
                <div className="ProductsServicesGridHereEach">
                <Link to={"/news/event"} state={{ docs3 }}>

                    <div className="ProductsServicesGridHereEachImg">
                        <img src={docs[3]?._document?.data?.value?.mapValue?.fields?.LinkUrl?.arrayValue?.values[0]?.stringValue}/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">Beta Machine</h2>
                            <br /><br/>
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                        <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">Beta Machine</p>
                    </div>
                    </Link>
                </div>



            </div>
        </div>
    )
}

export default ProductsServicesGrid;