import React, { useEffect, useState } from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import "./ManufacturingPartnerships.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles
import { Link } from "react-router-dom";

const ManufacturingPartnerships = () => {

    const file = ["https://d3lhatfimi1ec.cloudfront.net/D2A8C116-11D3-4FE8-ABED-41BDCA2451B4/StaticImages/12-tips-to-build-manufacturing-partnerships.jpg", "https://s3.us-east-1.amazonaws.com/co-assets/assets/images/_fbTw/Overseas-Manufacturer.jpg"]

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
                <h1 className="SubDropPageH1">Manufacturing</h1>
                    <br />
                <div className="SubDropPageGGG">
                <Carousel autoPlay interval={6000} selectedItem={0} onChange={(i) => onChangeCaptured(i)} showArrows={false} showIndicators={false} stopOnHover={false} showStatus={false} showThumbs={false} className="CarouselForMarketBusiness" infiniteLoop>
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
                            <p className="SubDropPageGGGDesP">Our selection process for manufacturing partners involves thorough assessments of their operational
efficiency, quality control measures, and commitment to delivering superior products. We partner with
companies that share our dedication to excellence and possess a track record of producing world-class
goods.</p>
                            <br />
                            <p className="SubDropPageGGGDesP">By collaborating with these highly process-oriented manufacturing firms, we leverage their expertise
and capabilities to bring our customers the finest products available in the market. The meticulous
attention to detail and stringent quality checks employed by our partners guarantee that every item
meets or exceeds our customers' expectations.</p>
                            <br />
                            {/* {
                                mobileView? <div></div>: <p>We understand that managing sourcing and supply chain operations can be complex and time - consuming, and we strive to simplify the process for our clients. We work closely with businesses to identify areas of improvement and develop customized solutions to meet their specific needs and goals.
</p>
                            } */}
                            <br />
                                <Link to={"/ManufacturingPartnershipsWriteUp"}><div className="MarketingBusinessWriteUpViewMore">View More</div></Link>
                            <br />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ManufacturingPartnerships;