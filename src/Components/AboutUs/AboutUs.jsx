import React, { useEffect } from "react";
import AboutUsHome from "./AboutUsHome/AboutUsHome";
import WeAre from "./WeAre/WeAre";
import CompanySecret from "./CompanySecret/CompanySecret";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import Employee from "./Employee/Employee";
import Fotter from "../ContactUs/Fotter/Fotter";

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return(
        <div className="AboutUs">
            <StartingPage want={true}/>
            <AboutUsHome />
            <WeAre />
            <Employee />
            <Fotter />
            {/* <CompanySecret /> */}
        </div>
    )
}

export default AboutUs;