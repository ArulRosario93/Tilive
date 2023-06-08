import React, { useEffect, useState } from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import "./Merger&Acquisition.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles
import { Link } from "react-router-dom";

const MergerAcquisition = () => {

    const file = ["https://img.freepik.com/premium-vector/consulting-banner-web-icon-business_35632-115.jpg", "https://thumbs.dreamstime.com/b/business-consulting-concept-businessman-selecting-interface-54909168.jpg"]

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
                <h1 className="SubDropPageH1">Merger & Acquisition Consultancy Services</h1>
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
                            <p className="SubDropPageGGGDesP">At Tilive International LLP, we specialize in providing top-notch Merger and Acquisition (M&A) services
for businesses operating in the Automotive components industry. Our team of experts has extensive
experience in the field and is dedicated to helping clients achieve their M&A goals.</p>
                            <br />
                            <p className="SubDropPageGGGDesP">We offer a range of M&A services, including market analysis, target identification, deal structuring,
negotiations, and post-merger integration. Our focus is on providing customized solutions that are
tailored to our clients' specific needs and goals.</p>
                            <br />
                            <br />
                                <Link to={"/MergerAcquisitionWriteUp"}><div className="MarketingBusinessWriteUpViewMore">View More</div></Link>
                            <br />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default MergerAcquisition;