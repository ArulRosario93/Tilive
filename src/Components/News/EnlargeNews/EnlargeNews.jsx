import React, { useEffect, useState } from "react";
import "./EnlargeNews.css";
import { useLocation } from "react-router-dom";
import EnlargeNewsCarousel from "./EnlargeNewsCarousel/EnlargeNewsCarousel";

const EnLargeNews = () => {

    const location = useLocation();

    var [images, setImages] = useState([]);
    const [ largeImage, setLargeImage ] = useState(false);

    const docs1 = location.state?.docs1;
    const docs2 = location.state?.docs2;
    const docs3 = location.state?.docs3;

    const data = docs1 == null? docs2 == null? docs3 == null? location?.state?.stateChange: docs3: docs2: docs1;
    var linkURLFound = [];

    var bgImage = "https://firebasestorage.googleapis.com/v0/b/upload-img-vid.appspot.com/o/files%2FWN384A.jpg?alt=media&token=3be0c6f6-efa3-4b08-b654-cae5829e177e";

    useEffect(() => {
        setImages(data?.linkURl)
    }, [images]);

    return(
        <div className="EnLargeNews" style={bgImage? {backgroundImage: `url("${bgImage}")`}: null}>
            {/* <Fade> */}
                <div className="EnLargeNewsImage" style={largeImage? { width: '100vw' }: {width: '350px'}}>
                    <EnlargeNewsCarousel images={images} largeImage={largeImage} setLargeImage={setLargeImage}/>
                </div>
            {/* </Fade> */}
            <div></div> 
            <div className="EnLargeNewsDescrip">
                <div className="EnLargeNewsHeader">
                    <div className="EnLargeNewsHeadingwithshortDes">
                        <h1 className="EnLargeNewsHeadingwithshortDesHead">{data?.eventName?.stringValue ? data?.eventName?.stringValue: data?.eventName}</h1>
                        <p className="EnLargeNewsHeadingwithshortDesDes">{data?.eventCaption?.stringValue ? data?.eventCaption?.stringValue: data?.eventCaption}</p>
                    </div>
                    <div className="EnLargeNewsHeadingwithDate">{data?.timestamp}</div>
                </div>
                {/* <Fade bottom> */}
                    <div className="EnLargeNewsBody">
                        <h2 className="EnLargeNewsBodyHead">{data?.purchaseNow == true? "About The Product": "Description"}</h2>
                        <p className="EnLargeNewsBodyDes"><pre className="EnLargeNewsBodyDesPre">{data?.eventDescription?.stringValue? data?.eventDescription?.stringValue: data?.eventDescription}</pre></p></div>
                    {
                        data?.purchaseNow == true? <div className="EnLargeNewsBodyPurchaseNow"><h2 className="EnLargeNewsBodyPurchaseNowHead">Purchase Now</h2></div>: <div></div>
                    }
                {/* </Fade> */}
            </div>
        </div>
    )
}

export default EnLargeNews;