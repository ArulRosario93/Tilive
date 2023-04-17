import React from "react";
import "./ContactUsHome.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

const ContactUsHome = () => {
        return(
            <>
                <StartingPage want={false}/>
                <div className="ContactUsHome">
                    <p className="ContactUsHomeP">CONTACT</p>
                    <h1 className="ContactUsHomeHead">How can we be of service?</h1>
                    <p className="ContactUsHomePara">Samvardhana Motherson Reflectec (SMR) is one of the largest manufacturers of rearview mirrors for passenger vehicles in the world.</p>
                </div>
            </>
        )
}

export default ContactUsHome;