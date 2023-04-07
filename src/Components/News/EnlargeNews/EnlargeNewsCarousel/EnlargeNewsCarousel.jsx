import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import EnlargeNewsCarouselFile from "./EnlargeNewsCarouselFile/EnlargeNewsCarouselFile";

const EnlargeNewsCarousel = ({ images, largeImage, setLargeImage }) => {
    
    const handleClick = () => {
        setLargeImage(!largeImage);
        console.log(document.getElementById("EnlargeNewsCarouselVid"));
    }

    const [files, setFiles] = useState(["aog eou"]);

    const [currentItem, setCurrentItem] = useState(0);

    const onChangeCaptured = (i) => {
        console.log("ON CHANGE DETECTED" + " " + i);
        setCurrentItem(i);
        return currentItem;
    }

    console.log(images);
    
    useEffect(() => {
        setFiles(images);
        console.log("GOT IT" + files);
    }, [images])

    return(
        <Carousel selectedItem={0} onClickItem={() => handleClick()} onChange={(i) => onChangeCaptured(i)} showArrows={true} showIndicators={false} showStatus={true} className="carousel" infiniteLoop>
            {
                files.length > 0?
                files.map((item, i) => {
                    return(
                        <EnlargeNewsCarouselFile item={item} largeImage={largeImage} onChangeCaptured={currentItem} i={i}/>)
                    }                
                ): <div></div>
            }
        </Carousel>
    )
}

export default EnlargeNewsCarousel;