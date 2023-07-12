import React, { useEffect } from "react";
import "./MarketingBusinessWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";
import image1 from "./indianCompanies1.jpg";
import image2 from "./indianCompanies2.jpg";
import image3 from "./InternaltionalCompanies.jpg";
import image4 from "./forindian.jpg";

const MarketingBusinessWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })

    return(
        <div>
        <StartingPage want={true}/>
            <div className="MarketingBusinessWriteUp">

                <h1 className="MarketingBusinessWriteUpHead">Marketing and Business Development</h1>
                <br />
                <img src={image1}/>
            </div>
        </div>
    )
}

export default MarketingBusinessWriteUp;