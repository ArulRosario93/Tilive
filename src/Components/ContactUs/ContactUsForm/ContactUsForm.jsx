import React, { useState } from "react";
import "./ContactUsForm.css";

const ContactUsForm = () => {

    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userNum, setUserNum] = useState("");
    const [userText, setUserText] = useState("");

    const handleCapture = (e) => {
        // e.preeventDefault();
        var link = "mailto:" + 'itsarrowhere380@gmail.com';
        window.location.href = link;
    }

    const nameChange = (e) => {
        console.log(e);
        setUserName(e.target.value);
    }
    const mailChange = (e) => {
        setUserMail(e.target.value);
    }
    const numChange = (e) => {
        setUserNum(e.target.value);
    }
    const textChange = (e) => {
        setUserText(e.target.value);
    }

    return(
        <div className="handleCapture">
            <form onSubmit={(e) => handleCapture(e)}>
                <div className="handleCaptureForm">
                    <div className="handleCaptureFormLeft">
                        <div className="handleCaptureFormName">
                            <p className="handleCaptureFormNamep">Your name*</p>
                            <input className="handleCaptureFormNameInp" onChange={(e) => nameChange(e)} autoComplete="off" type="text" placeholder=""/>
                        </div>
                        <div className="handleCaptureFormMail">
                            <br />
                            <p className="handleCaptureFormMailp">Your mail-address*</p>
                            <input className="handleCaptureFormMailInp" onChange={(e) => mailChange(e)} autoComplete="off" type="email" placeholder=""/>
                            {/* <br /> */}
                        </div>
                        <div className="handleCaptureFormNum">
                            <br />
                            <p className="handleCaptureFormNump">Your telephone number (optional)</p>
                            <input className="handleCaptureFormNumInp" onChange={(e) => numChange(e)} autoComplete="off" type="tel" placeholder=""/>
                        </div>
                    </div>
                    <div className="handleCaptureFormRight">
                        <div className="handleCaptureFormTextArea">
                            <p className="handleCaptureFormTextAreaP">Your message</p>
                            <textarea onChange={(e) => textChange(e)} rows={17} cols={50}></textarea>
                        </div>
                    </div>
                </div>
                <div className="handleCaptureFormSubmit">
                    <a className="handleCaptureFormSubmitButton">Submit</a>
                </div>
            </form>
        </div>
    )
}

export default ContactUsForm;