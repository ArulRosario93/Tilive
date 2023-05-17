import React, { useEffect, useState } from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import "./MarketingBusiness.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles
import EnlargeNewsCarouselFile from "../News/EnlargeNews/EnlargeNewsCarousel/EnlargeNewsCarouselFile/EnlargeNewsCarouselFile";
import { Link } from "react-router-dom";

const MarketingBusiness = () => {

    const file = ["https://www.lucidadvertising.com/wp-content/uploads/2020/06/marketing.jpg", "https://s40424.pcdn.co/in/wp-content/uploads/2022/04/March_What-is-the-Importance-of-Marketing-for-Businesses-1-1140x800.jpg.optimal.jpg"]

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
                <h1 className="SubDropPageH1">Marketing Business And Development</h1>
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
                            <p className="SubDropPageGGGDesP">Looking to expand your business in the Automotive or Industrial domain? Look no further than Tilive
International LLP. Our customized business development and marketing strategies are tailored to help
you grow your business exponentially.</p>
                            <br />
                            <p className="SubDropPageGGGDesP">With years of experience in the industry, we understand the unique challenges faced by businesses in
the Automotive and Industrial sectors. Our team of experts will work closely with you to understand
your business goals, target audience, and competition, to develop a custom strategy that meets your
specific needs.</p>
                            <br />
                            {/* {
                                mobileView? <div></div>: <p>We understand that managing sourcing and supply chain operations can be complex and time - consuming, and we strive to simplify the process for our clients. We work closely with businesses to identify areas of improvement and develop customized solutions to meet their specific needs and goals.
</p>
                            } */}
                            <br />
                                <Link to={"/MarketingBusinessWriteUp"}><div>View More</div></Link>
                            <br />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default MarketingBusiness;