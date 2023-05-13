import React, { useState } from "react";
import ContactUsHome from "./ContactUsHome/ContactUsHome";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import Loader from "../Loader/Loader";
import { StartingPage } from "../Home/StartingPage/StartingPage";

const ContactUs = () => {

    const [loader, setLoader] = useState(false);

    setTimeout(() => {
        setLoader(true);
    }, 2000)

    return(
        loader? <div> 
            <StartingPage want={false}/>
            <ContactUsHome />
            <ContactUsForm />
        </div>: <Loader />
    )
}   

export default ContactUs;