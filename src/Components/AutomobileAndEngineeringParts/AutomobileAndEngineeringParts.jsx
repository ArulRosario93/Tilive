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
                            <p>For the aftermarket sector, we provide high-quality replacement parts that meet or exceed OEM
specifications. Our products undergo rigorous testing to ensure their performance, reliability, and

compatibility with various vehicle models. We understand the importance of delivering parts that offer
durability and value for money to customers seeking affordable alternatives.</p>
                            <br />
                            <p>In addition to the aftermarket, we also supply OE parts for manufacturers and assembly plants. Our OE
parts meet the stringent standards set by original equipment manufacturers, ensuring seamless
integration and optimal performance within their systems. We work closely with OE manufacturers to
understand their specific requirements and deliver parts that meet their exact specifications.</p>
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