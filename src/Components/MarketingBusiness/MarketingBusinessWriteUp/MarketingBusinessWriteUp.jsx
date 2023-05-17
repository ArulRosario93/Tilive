import React, { useEffect } from "react";
import "./MarketingBusinessWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";
import image1 from "./indianCompanies1.jpg";
import image2 from "./indianCompanies2.jpg";
import image3 from "./InternaltionalCompanies.jpg";

const MarketingBusinessWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })

    return(
        <div>
        <StartingPage want={false}/>
            <div className="MarketingBusinessWriteUp">

                <h1 className="MarketingBusinessWriteUpHead">Marketing Business And Development</h1>
                <br />
                <img src={image1}/>
                <img src={image2}/>
                <br />
                <img src={image3}/>
            </div>
        </div>
    )
}

export default MarketingBusinessWriteUp;