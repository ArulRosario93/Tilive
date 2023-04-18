import React, { useEffect, useState } from "react";
import "./CarrersScrollList.css"
import { Fade } from "react-reveal";
import CarrersEachScroll from "./CarrersEachScroll/CarrersEachScroll";

const CarrersScrollList = ({ heightFound, docs }) => {

    const [className, setClassName] = useState("CarrersScrollListImg");

    const [measureHeight, setMeasureHeight] = useState(100);

    const [currentContainer, setCurrentContainer] = useState(3);

    var docLength = docs?.length;

    useEffect(() => {    
        
        const handleScroll = () => {        

            if(window.scrollY > heightFound){
                var heightHere = window.scrollY - heightFound;
                setClassName("CarrersScrollListImgDesFixed");
                console.log(window.scrollY);
                console.log("FOUND");
                setMeasureHeight(66 - heightHere/11);
            }else{
                setClassName("CarrersScrollListImg");
            }
        }

        window.addEventListener('scroll', () => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        });    
    }, [heightFound]);

    const scrollList = () => {

        for (let index = 0; index < docs.length; index++) {
            const element = docs[index];
            
            var eventName = element?._document?.data?.value?.mapValue?.fields?.eventName?.stringValue;
            var eventDescription = element?._document?.data?.value?.mapValue?.fields?.eventDescription?.stringValue;
            var eventCaption = element?._document?.data?.value?.mapValue?.fields?.eventCaption?.stringValue;
            var linkURl = element?._document?.data?.value?.mapValue?.fields?.fileLink?.arrayValue?.values;
            

        }
    }

    return(
        <div className="CarrersScrollList">
            {
                <div className={className}>
                {
                    docs?.map((item, i) => {

                        var eventName = item?._document?.data?.value?.mapValue?.fields?.eventName?.stringValue;
                        var eventDescription = item?._document?.data?.value?.mapValue?.fields?.eventDescription?.stringValue;
                        var eventCaption = item?._document?.data?.value?.mapValue?.fields?.eventCaption?.stringValue;
                        var linkURl = item?._document?.data?.value?.mapValue?.fields?.fileLink?.arrayValue?.values;

                        var stateChange = {
                            eventName: eventName,
                            eventDescription:  eventDescription,
                            eventCaption: eventCaption,
                            linkURl: linkURl,
                        };
                        console.log("Found IT");
                        if(i == 3){
                            return(
                                <CarrersEachScroll measureHeight={measureHeight} key={i} image={linkURl[0]?.stringValue} Head={eventName} Des={eventDescription} />
                            )
                        }
                    })
                }
                </div>
            }
        </div>
    )
}

export default CarrersScrollList;