import React from "react";
import AboutUsHome from "./AboutUsHome/AboutUsHome";
import WeAre from "./WeAre/WeAre";
import CompanySecret from "./CompanySecret/CompanySecret";

const AboutUs = () => {
    return(
        <div className="AboutUs">
            <AboutUsHome />
            <WeAre />
            <CompanySecret />
        </div>
    )
}

export default AboutUs;