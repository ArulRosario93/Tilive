import React, { useEffect } from "react";
import "./GenralTradingWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image4 from "./trade.jpeg";

const GenralTradingWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })

    return(
        <div>
        <StartingPage want={true}/>
            <div className="GenralTradingWriteUp">
                <img src={image4}/>
                <div className="genralTradingStarts">
                    <h1 className="genralTradingHead">General Trading</h1>
                <br />
                    
                    <div className="genralTradingInner">
                        <p>Comprehensive genral trading services for domestic Indian market and global customers</p>
                        <p>Extensive Product portfolio covering a wild range of products as per Customer Needs</p>
                        <p>Tailored solutions for clients of all sizes and industries</p>
                        <p>Strong network of reliable suppliers and manufacturers</p>
                        <p>Expertise in navigating local market dynamics and International trade requirements</p>
                        <p>commitment to delivering high-quality products that meet stringent standards</p>
                        <p>Seamless sourcing, logistics and delivery solutions for global customers</p>
                        <p>Emphasis on reliability, customer satisfaction and long term partnerships</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenralTradingWriteUp;