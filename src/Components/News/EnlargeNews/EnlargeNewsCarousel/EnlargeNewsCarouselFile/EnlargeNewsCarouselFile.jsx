import React, { useEffect, useRef, useState } from "react";
import EnlargeNewsCarouselVid from "./EnlargeNewsCarouselVid/EnlargeNewsCarouselVid";

const EnlargeNewsCarouselFile = ({ item, largeImage, onChangeCaptured, i }) => {

    var vidRef = useRef(null);

    var [play, setPlay] = useState(false);

    const handleVideo = (isVisible) => {
        console.log(isVisible);
        console.log("COMing BRUH");
    }
    
    const handleChanges = () => {
        if (play) {
            vidRef?.current?.play();
        }else{
            vidRef?.current?.pause();
        }
    }

    var linkURl = `${item?.stringValue}`;

    // console.log(linkURl);
    // console.log(linkURl.slice(linkURl.lastIndexOf(".") +1, linkURl.lastIndexOf(".") + 4));

    const CurrentType = linkURl.slice(linkURl.lastIndexOf(".") +1, linkURl.lastIndexOf(".") + 4);

    var typeIMg = true;

    var ii = null;

    const handlePauseReq = () => {
        // setPlay(false);
        vidRef?.current?.pause();
    }

    if(CurrentType == "mp4"){
        typeIMg = false;
        ii = i;
    }
    return(
        <div style={{ height: '100vh'}}>
            {
                linkURl.length > 1?
                typeIMg? <img style={ largeImage? {objectFit: 'contain'}: {objectFit: 'cover'} } src={item?.stringValue}/>: <EnlargeNewsCarouselVid item={item} largeImage={largeImage} onChangeCaptured={onChangeCaptured} i={ii}/>
                : <div></div>
            }
        </div>
    )
}

export default EnlargeNewsCarouselFile;