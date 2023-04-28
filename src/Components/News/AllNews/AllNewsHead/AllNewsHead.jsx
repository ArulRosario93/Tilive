import React, { useState, useEffect } from "react";
import "./AllNewsHead.css";
// import { Carousel } from '@trendyol-js/react-carousel';
import vid from "../../gg.mp4";
import { Fade } from "react-reveal";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles

import ReactBootstrapCarousel from "react-bootstrap-carousel";

import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { firebasee } from "../../../../firebase";
import EnlargeNewsCarouselFile from "../../EnlargeNews/EnlargeNewsCarousel/EnlargeNewsCarouselFile/EnlargeNewsCarouselFile";
import EnlargeNewsCarouselVid from "../../EnlargeNews/EnlargeNewsCarousel/EnlargeNewsCarouselFile/EnlargeNewsCarouselVid/EnlargeNewsCarouselVid";

const AllNewsHead = () => {

    const [docs, setDocs] = useState();

    const [currentItem, setCurrentItem] = useState(0);

    const [anyChange, setAnyChange] = useState(false);

    const handleEvent = async () => {

        const query1 = await collection(firebasee, "tilive_data");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb); 

        if(aa?.docs[0]?._document?.data?.value?.mapValue?.fields){
            // const item = aa?.docs[0]?._document?.data?.value?.mapValue?.fields;

            const data = aa?.docs[0]?._document?.data?.value?.mapValue?.fields;

            const eventCaption = data?.eventCaption?.stringValue;
            const eventDescription = data?.eventDescription?.stringValue;
            const eventName = data?.eventName?.stringValue;
            const linkURl = data?.fileLink?.arrayValue?.values;

            const stateChange = {
                eventCaption: eventCaption,
                eventDescription: eventDescription,
                eventName: eventName,
                linkURl: linkURl,
            }

            setDocs(stateChange);


            setStringForP(eventDescription);
        }
    }

    
    var string = ``;
    
    const handleClick = () => {
        if(!anyChange){
            setAnyChange(true);
        }
        if (stringForP.length > 1) {
            setChange(!change);
        }
        setStringForP(string.substring(0, 0));
    }
    
    const handleCarouselChange = (i) => {
        setCurrentItem(i);
    }
    

    window.addEventListener("scroll", () => {
        if(window.pageYOffset > '540'){
            setAnyChange(false);
        }else{
            // setAnyChange(true);
        }
    })
    
    useEffect(() => {
        handleEvent();
        // console.log(window.pageYOffset);
    }, []);

    const [change, setChange] = useState(false);

    const [stringForP, setStringForP] = useState("");
    
    string = `${docs?.eventDescription}`;

    const handleClickDes = () => {
        setChange(!change);

        console.log("Clicked")

        setAnyChange(true);
        setStringForP(string.substring(0, change? string.length: 0));
    }

    return(
        <div className="AllNewsHead">
                <div className="AllNewsHeadDes">
                    <h2 onClick={() => handleClickDes()} className="AllNewsHeadDesHead">{docs?.eventName}</h2>
                    <br/>
                    <p style={change? {height: '0vh'}: {height: '25vh'}} onClick={() => handleClickDes()} className="AllNewsHeadDesP">{stringForP}</p>
                </div>

                 <Carousel onChange={(i) => handleCarouselChange(i)} 
                    onClickItem={() => handleClick()} showStatus={true} showThumbs={false} showArrows={true} autoPlay infiniteLoop>

                    {
                        docs?.linkURl ? docs.linkURl?.map((item, i) => {

                            var linkURl = item?.stringValue;


                            const CurrentType = linkURl.slice(linkURl.lastIndexOf(".") +1, linkURl.lastIndexOf(".") + 4);

                            var typeIMg = true;

                            var ii = null;

                            console.log("WATCH OUT" + i);

                            if(CurrentType == "mp4"){
                                typeIMg = false;
                                ii = i;
                            }

                            return(
                                <div className="AllNewsHeadCarousel">
                                    {
                                        typeIMg? <img className="AllNewsHeadCarouselImg" src={item.stringValue} /> : <EnlargeNewsCarouselVid item={item} onChangeCaptured={currentItem} heightCame="max" i={ii} largeImage={anyChange}/>
                                    }
                                </div>
                            )
                        }) : <div>Nothing Yet</div>
                    }

                </Carousel> 

        </div>
    )
}

export default AllNewsHead;