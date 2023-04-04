import React, { useEffect, useState } from "react";
import "./EnlargeNews.css";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link, useLocation } from "react-router-dom";
import vidHEre from "../gg.mp4";

const EnLargeNews = () => {

    const location = useLocation();

    var [images, setImages] = useState([]);
    const [ largeImage, setLargeImage ] = useState(false);


    const data = location.state?.stateChange;
    var linkURLFound = [];
    
    const handleClick = () => {
        setLargeImage(!largeImage);
    }
    
    useEffect(() => {  
        setImages(data?.linkURl)
        console.log(images);
    }, [images])

    return(
        <div className="EnLargeNews">
            <div className="EnLargeNewsImage" style={largeImage? { width: '100vw' }: {width: '350px'}}>
                <Carousel autoPlay={true} onClickItem={() => handleClick()} showArrows={true} showIndicators={false} showStatus={false} className="carousel" infiniteLoop={true}>
                            {
                                images.map((item, i) => {
                                    return(
                                        <div style={{ height: '100vh'}}>
                                            <img style={ largeImage? {objectFit: 'contain'}: {objectFit: 'cover'} } src={item?.stringValue}/>
                                        </div>
                                    )
                                })
                            }
                </Carousel>
            </div>
            <div></div>
            <div className="EnLargeNewsDescrip">
                <div className="EnLargeNewsHeader">
                    <div className="EnLargeNewsHeadingwithshortDes">
                        <h1 className="EnLargeNewsHeadingwithshortDesHead">{data?.eventName?.stringValue}</h1>
                        <p className="EnLargeNewsHeadingwithshortDesDes">{data?.eventCaption?.stringValue}</p>
                    </div>
                    <div className="EnLargeNewsHeadingwithDate">27/03</div>
                </div>

                <div className="EnLargeNewsBody">
                    <h2 className="EnLargeNewsBodyHead">Description</h2>
                    <p className="EnLargeNewsBodyDes"><pre className="EnLargeNewsBodyDesPre">{data?.eventDescription?.stringValue}</pre></p></div>
            </div>
        </div>
    )
}

export default EnLargeNews;