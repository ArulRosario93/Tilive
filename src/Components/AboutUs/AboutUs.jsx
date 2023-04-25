import React, { useEffect } from "react";
import AboutUsHome from "./AboutUsHome/AboutUsHome";
import WeAre from "./WeAre/WeAre";
import CompanySecret from "./CompanySecret/CompanySecret";
import { StartingPage } from "../Home/StartingPage/StartingPage";

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);


    return(
        <div className="AboutUs">
            <StartingPage />
            <AboutUsHome />
            <WeAre />
            <CompanySecret />
        </div>
    )
}

export default AboutUs;