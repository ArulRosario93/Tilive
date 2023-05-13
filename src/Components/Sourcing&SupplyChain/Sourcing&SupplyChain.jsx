import React, { useEffect, useState } from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage"; 
import "./Sourcing&SupplyChain.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles
import EnlargeNewsCarouselFile from "../News/EnlargeNews/EnlargeNewsCarousel/EnlargeNewsCarouselFile/EnlargeNewsCarouselFile";
import { Link } from "react-router-dom";

const SourcingSupplyChain = () => {

    const file = ["https://simfoni.com/wp-content/uploads/2022/02/Sourcing-Procurement-Cycle.png", "https://aavenir.com/wp-content/uploads/2021/08/What-is-Strategic-Sourcing-Category-Management-Best-Practices-Aavenir.png"]

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
                <h1 className="SubDropPageH1">Sourcing & SupplyChain</h1>
                    <br />
        <br />
                <div className="SubDropPageGGG">
                <Carousel autoPlay interval={4000} selectedItem={0} onChange={(i) => onChangeCaptured(i)} showArrows={false} showIndicators={false} stopOnHover={false} showStatus={false} showThumbs={false} className="CarouselForMarketBusiness" infiniteLoop>
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
                            <p>Drive Seamless Operations and Increased Profitability with Expert Sourcing & Supply Chain Management</p>
                            <br />
                            <p>Tilive International LLP offers top-notch consultancy services in sourcing and supply chain management, helping businesses optimize their operations. Our experts provide customized solutions in supplier selection, logistics, compliance, and sustainability. We prioritize collaboration and communication to ensure alignment with clients' vision and values.</p>
                            <br />
                            {
                                mobileView? <div></div>: <p>We understand that managing sourcing and supply chain operations can be complex and time - consuming, and we strive to simplify the process for our clients. We work closely with businesses to identify areas of improvement and develop customized solutions to meet their specific needs and goals.
</p>
                            }
                            <br />
                                <Link to={"/SourcingSupplyChainWriteUp"}><div>View More</div></Link>
                            <br />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default SourcingSupplyChain;