import React, { useEffect, useState } from "react";
import "./SubDropPage.css";
import { useLocation } from "react-router-dom";
import { StartingPage } from "../Home/StartingPage/StartingPage";

const SubDropPage = () => {

    const location = useLocation();

    const [mobileView, setmobileView] = useState(false);

    const data = location?.state?.MarketingBusiness ? location?.state?.MarketingBusiness: location?.state?.SourcingSupplyChain ? location?.state?.SourcingSupplyChain: location?.state?.MergerAcquisition ? location?.state?.MergerAcquisition: location?.state?.CEOCFOServices ? location?.state?.CEOCFOServices : location?.state?.ManufacturingGuild ? location?.state?.ManufacturingGuild : location?.state?.AutomotiveEngineeringParts ? location?.state?.AutomotiveEngineeringParts :  location?.state?.GeneralTrading ? location?.state?.GeneralTrading : location?.state?.state ? location?.state?.state: location?.state?.PrivacyPolicy ? location?.state?.PrivacyPolicy : "";
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
        console.log("jaogu ogoHGO");
        console.log(mobileView);

        if (window.screen.width > 425) {
            setmobileView(true);
        }
    })

    return(
        <div className="SubDropPage">
        <StartingPage want={true} color={mobileView? true: false}/>
            <div className="SubDropPageDiv">
                <h1 className="SubDropPageH1">{data?.Fhead}</h1>
                <h1 className="SubDropPageH1">{data?.SHead}</h1>
                <br />
                <p>{data?.firstPara}</p>
                <br />
                <p>{data?.SecondPara}</p>
                {
                    data?.Desc ? data?.Desc.map((item, i) => {
                        return(
                            <div>
                                <br />
                                <p>{item}</p>
                            </div>
                        )
                    }) : ""
                }
            </div>
        </div>
    )
}

export default SubDropPage;