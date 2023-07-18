import React, { useState } from "react";
import "./ContactUsForm.css";
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
const ContactUsForm = () => {

    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userNum, setUserNum] = useState("");
    const [userText, setUserText] = useState("");

    const navigate = useNavigate();


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

    var emailTo = "mailto:`itsarrowhere380@gmail.com?subject='Web Contact Us'&body=${userText}`";

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        if (userMail.length < 10) {
            alert("Enter Valid Mail-ID")
        }else if(userName.length < 3){
            alert("Enter Name");
        }else if(userText.length < 10){
            alert("Enter Message More Than 10 Characters");
        } else{

            alert("Email successfully sent!")
        
            try {
                  const email = userMail;
                  const message = userText;
                  const number = userNum;

                  // Send the email using EmailJS
                const res = await emailjs
                    .send('service_tfnv1es', 'template_ac6g7q9', {
                      to_email: "itsarrowhere380@gmail.com",
                      to_name: "Tilive International",
                      namefound: userName,
                      mailfound: email,
                      message: message,
                      numberfound: number
                    }, "wU8stQ8vwlVtJoNWl")
                    .then((response) => {
                        console.log("Came here");
                        navigate('/', { replace: true });
                    })
                    .catch((error) => {
                      console.error('Error sending email:', error);
                    });
            } catch (error) {
                alert(error)
            }
        }
    }

    return(
        <div className="handleCapture">
            <form onSubmit={(e) => handleFormSubmit(e)}>
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
                <div className="handleCaptureFormText">
                    {/* <p>Tilive is one of leading consulting firm in the area of biz dev, Sourcing, Marketing, Supply chain management,  Manufacturing, and supply of various of OE and aftermarket parts domestic snd international markets.</p> */}
                </div>
                <div className="handleCaptureFormSubmit">
                    <button className="handleCaptureFormSubmitButton" type="submit">Submit</button>
                </div>
                <br />
                <br />
            </form>
        </div>
    )
}

export default ContactUsForm;