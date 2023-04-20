import React, { useEffect, useState } from "react";
import "./CarrersScrollList.css"
import { Fade } from "react-reveal";
import CarrersEachScroll from "./CarrersEachScroll/CarrersEachScroll";

const CarrersScrollList = ({ heightFound, docs }) => {

    const [className, setClassName] = useState("CarrersScrollListImg");

    const [measureHeight, setMeasureHeight] = useState(100);

    // var docFound = [];

    const [docFound, setDocFound] = useState([]);

    const [currentContainer, setCurrentContainer] = useState(0);

    const handleDocArray = () => {
        console.log(docs?.length);
        console.log("Found");

        var docFoundHere = [];

        const updateArraythere = docs?.map((item) => {

            console.log(item)

            var doc1 = {
                eventName: item?._document?.data?.value?.mapValue?.fields?.clientName?.stringValue,
                eventDescription: item?._document?.data?.value?.mapValue?.fields?.aboutClient?.stringValue,
                linkURl: item?._document?.data?.value?.mapValue?.fields?.fileLink?.arrayValue?.values[0].stringValue,
            }
            
            docFoundHere.push(doc1);

        })
                
        setDocFound(docFoundHere);
    }

    useEffect(() => {

        handleDocArray();
        console.log(docFound);
        const handleScroll = () => {

            docFound.map((item, i) => {

                if (window.scrollY > heightFound + 1800) {
                    var heightHere = window.scrollY - heightFound - 1800;

                    var heii = 68 - heightHere/11;
                    // currentContainer++;
                    var floorIT = Math.round(heii);
                    setCurrentContainer(5);
                    setClassName("CarrersScrollListImgDesFixed");
                    setMeasureHeight(floorIT);
                    console.log(floorIT);
                    console.log("COming ONNNNN1");
                }  
                else if (window.scrollY > heightFound + 1200) {
                    var heightHere = window.scrollY - heightFound - 1200;

                    var heii = 68 - heightHere/11;
                    // currentContainer++;
                    var floorIT = Math.round(heii);
                    setCurrentContainer(3);
                    setClassName("CarrersScrollListImgDesFixed");
                    setMeasureHeight(floorIT);
                    console.log(floorIT);
                    console.log("COming ONNNNN1");
                }else if (window.scrollY > heightFound + 650) {
                    var heightHere = window.scrollY - heightFound - 650;

                    var heii = 66 - heightHere/11;
                    // currentContainer++;
                    var floorIT = Math.round(heii);
                    setCurrentContainer(2);
                    setClassName("CarrersScrollListImgDesFixed");
                    setMeasureHeight(floorIT);
                    console.log(floorIT);
                    console.log("COming ONNNNN1");
                } else if (window.scrollY > heightFound + 250) {
                    // currentContainer++;
                    var heightHere = window.scrollY - heightFound - 250;

                    var heii = 66 - heightHere/11;
                    
                    var floorIT = Math.round(heii);
                    setCurrentContainer(1);
                    setClassName("CarrersScrollListImgDesFixed");
                    setMeasureHeight(floorIT);
                    console.log("COming ONNNNN2");
                } else if (window.scrollY > heightFound ) {
                    var heightHere = window.scrollY - heightFound + 100;

                    var heii = 63 - heightHere/11;

                    var floorIT = Math.round(heii);
                    setCurrentContainer(0);
                    setClassName("CarrersScrollListImgDesFixed");
                    setMeasureHeight(floorIT);
                    console.log("COming ONNNNN2");
                } else{
                    setClassName("CarrersScrollListImg");
                }
            })
        }

        window.addEventListener('scroll', () => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        });   

    }, [heightFound, docs]);

    return(
        <div className="CarrersScrollList" style={{marginBottom: `${docFound.length * 45}vh`}}>
            {
                <div className={className}>
                    <CarrersEachScroll measureHeight={measureHeight} image={docFound[currentContainer]?.linkURl} Head={docFound[currentContainer]?.eventName} Des={docFound[currentContainer]?.eventDescription} />
                </div>
            }
        </div>
    )
}

export default CarrersScrollList;