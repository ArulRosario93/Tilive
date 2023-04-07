import React,{ useEffect, useRef, useState } from "react";

import 'intersection-observer';
import { useIsVisible  } from 'react-is-visible';

const EnlargeNewsCarouselVid = ({ item, onChangeCaptured, i, largeImage }) => {

    const [use, setUse] = useState(true);

    var vidRef = useRef(null);

    useEffect(() => {

        if(largeImage){
            setUse(false);
        }
        
        if(onChangeCaptured == i){
            setTimeout(() => {
                vidRef?.current?.play();
            }, 500);
        }else{
            vidRef?.current?.pause();
        }

    }, [onChangeCaptured, largeImage]);

    return(
        <div style={{width: '100%'}}>
            <video loop ref={vidRef} muted={use} id="EnlargeNewsCarouselVid" width="100%" height="auto">
                    <source src={item?.stringValue} type="video/mp4"/>
            </video>
        </div>
    )
}

export default EnlargeNewsCarouselVid;