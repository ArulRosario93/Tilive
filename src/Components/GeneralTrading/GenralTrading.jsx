import React, { useEffect, useState } from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import "./GenralTrading.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles
import { Link } from "react-router-dom";

const GenralTrading = () => {

    const file = ["https://connectfz.com/wp-content/uploads/2021/08/What-is-General-Trading-in-the-UAE.jpg", "https://hubbae.ae/uploads/services/company/d8849c1a346cac6cb736b4235ee95133.jpg"]

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
                <h1 className="SubDropPageH1">General Trading</h1>
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
                            <p className="SubDropPageGGGDesP">As a supplier of general trading parts, we understand the importance of offering high-quality products
that meet global standards. We source our parts from reliable manufacturers and suppliers, ensuring
that each item meets stringent quality control criteria. This allows us to deliver parts that are reliable,
durable, and perform optimally in their intended applications.</p>
                            <br />
                            <p className="SubDropPageGGGDesP">We strive to stay updated with the latest advancements and market trends, allowing us to provide
cutting-edge solutions to our customers.</p>
                            <br />
                            {/* {
                                mobileView? <div></div>: <p>We understand that managing sourcing and supply chain operations can be complex and time - consuming, and we strive to simplify the process for our clients. We work closely with businesses to identify areas of improvement and develop customized solutions to meet their specific needs and goals.
</p>
                            } */}
                            <br />
                                <Link to={"/GenralTradingWriteUp"}><div className="MarketingBusinessWriteUpViewMore">View More</div></Link>
                            <br />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default GenralTrading;