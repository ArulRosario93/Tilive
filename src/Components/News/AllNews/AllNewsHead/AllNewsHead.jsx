import React from "react";
import "./AllNewsHead.css";
import { Carousel } from "react-responsive-carousel";
import vid from "../../gg.mp4";

const AllNewsHead = () => {
    return(
        <div className="AllNewsHead">
            <Carousel selectedItem={0} showArrows={true} showIndicators={false} showThumbs={false} className="carousel" infiniteLoop>
                <div className="AllNewsHeadCarousel">
                    <img className="AllNewsHeadCarouselImg" src="https://firebasestorage.googleapis.com/v0/b/upload-img-vid.appspot.com/o/files%2FWN384A.jpg?alt=media&token=3be0c6f6-efa3-4b08-b654-cae5829e177e"/>
                </div>
                <div className="AllNewsHeadCarousel">
                    <img className="AllNewsHeadCarouselImg" src="https://firebasestorage.googleapis.com/v0/b/upload-img-vid.appspot.com/o/files%2FWN384A.jpg?alt=media&token=3be0c6f6-efa3-4b08-b654-cae5829e177e"/>
                </div>
                <div className="AllNewsHeadCarousel">
                    <video autoPlay={true} controls width="100%" height="auto">
                            <source src={vid} type="video/mp4"/>
                    </video>
                </div>
            </Carousel>
        </div>
    )
}

export default AllNewsHead;