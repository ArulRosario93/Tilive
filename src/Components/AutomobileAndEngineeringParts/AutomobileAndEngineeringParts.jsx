import React, { useEffect, useState } from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import "./AutomobileAndEngineeringParts.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles
import { Link } from "react-router-dom";

const AutomobileAndEngineeringParts = () => {

    const file = ["https://images.ctfassets.net/2sam6k0rncvg/5Vf1NBxpQFzxTBWqi1wyRt/5065b6f336ba6cc7b5a80d5482f614f6/basic-car-knowledge.png", "https://i.ytimg.com/vi/_i5RkAxGiwQ/maxresdefault.jpg"]

    const [mobileView, setmobileView] = useState(false);

    const [currentItem, setCurrentItem] = useState(0);

    const onChangeCaptured = (i) => {
        console.log("ON CHANGE DETECTED" + " " + i);
        setCurrentItem(i);
        return currentItem;
    }


    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
        console.log("jaogu ogoHGO");
        console.log(mobileView);

        if (window.screen.width < 425) {
            setmobileView(true);
        }
    })
    
    return(
        <div>
            <StartingPage want={true} color={mobileView? true: false} />
        <div className="SubDropPageforMarketing">
                <h1 className="SubDropPageH1">Automobile And Engineering Parts</h1>
                    <br />
                    <br />
                <div className="SubDropPageGGG">
                <Carousel autoPlay interval={5000} selectedItem={0} onChange={(i) => onChangeCaptured(i)} showArrows={false} showIndicators={false} stopOnHover={false} showStatus={false} showThumbs={false} className="CarouselForMarketBusiness" infiniteLoop>
                    {
                        
                                    file.map((item, i) => {

                                        var itemNow = `${file[i]}`;

                                        var typeImg = true;

                                        {/* if(seletedFiles[i].type == "video/mp4"){
                                            console.log(seletedFiles[i].type);
                                            typeImg = false;
                                        }else{
                                            typeImg = true;
                                            console.log('FAAALSEE');
                                        } */}
                                        
                                        return(
                                                typeImg? <img src={file[i]} className="CarouselForMarketBusinessIMg" alt="file Selected" width="250" height="200"/>: <video width="350" height="200" controls >
                                                    <source src={file[i]} type="video/mp4"/>
                                                </video>
                                        )
                                    })
                                }
                    
                </Carousel>
                    <div className="SubDropPageGGGDes">
                            <p>Tilive International LLP offers top-notch consultancy services in sourcing and supply chain management, helping businesses optimize their operations. Our experts provide customized solutions in supplier selection, logistics, compliance, and sustainability. We prioritize collaboration and communication to ensure alignment with clients' vision and values.</p>
                            <br />
                            <p>At Tilive International LLP, we are committed to providing top-notch consultancy services in the domain of sourcing and supply chain management. Our team of experts has extensive experience in the industry and is well-equipped to help businesses optimize their sourcing and supply chain operations.</p>
                            <br />
                            
                            <br />
                                <Link to={"/AutomobileAndEngineeringPartsWriteUp"}><div>View More</div></Link>
                            <br />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default AutomobileAndEngineeringParts;