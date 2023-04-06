import React from "react";
import "./AboutUsHome.css";
import Fade from "react-reveal/Fade";

const AboutUsHome  = () => {
    return(
        <div className="AboutUsHome">
            <Fade bottom slow>
                <div className="AboutUsHomeDes">
                    <h1 className="AboutUsHomeDesHead">Trust Integrity Loyalty is our DNA</h1>
                </div>
            </Fade>
        </div>
    )
}

export default AboutUsHome;