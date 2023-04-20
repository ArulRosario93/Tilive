import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles

import EnlargeNewsCarouselFile from "./EnlargeNewsCarouselFile/EnlargeNewsCarouselFile";

const EnlargeNewsCarousel = ({ images, largeImage, setLargeImage }) => {
    
    const handleClick = () => {
        setLargeImage(!largeImage);
        console.log(document.getElementById("EnlargeNewsCarouselVid"));
    }

    const [files, setFiles] = useState([]);

    const [currentItem, setCurrentItem] = useState(0);

    const onChangeCaptured = (i) => {
        console.log("ON CHANGE DETECTED" + " " + i);
        setCurrentItem(i);
        return currentItem;
    }

    useEffect(() => {
        setFiles(images);
        console.log("GOT IT" + images);
        console.log("GOT IT" + files);
    }, [images, files])

    return(
        <Carousel selectedItem={0} onClickItem={() => handleClick()} onChange={(i) => onChangeCaptured(i)} showArrows={true} showIndicators={false} showStatus={true} className="carouselFound" infiniteLoop>
            {
                files.length > 0?
                files.map((item, i) => {
                    return(
                        <EnlargeNewsCarouselFile item={item} largeImage={largeImage} onChangeCaptured={currentItem} i={i} />)
                    }                
                ): <div></div>
            }
        </Carousel>
    )
}

export default EnlargeNewsCarousel;