import React, { useEffect } from "react";
import "./GenralTradingWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

const GenralTradingWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })

    return(
        <div>
        <StartingPage want={false}/>
            <div className="GenralTradingWriteUp">

                <h1>General Trading</h1>
                <br />
                <p>Tilive International LLP offers top-notch consultancy services in sourcing and supply chain management, helping businesses optimize their operations. Our experts provide customized solutions in supplier selection, logistics, compliance, and sustainability. We prioritize collaboration and communication to ensure alignment with clients' vision and values.</p>
                <br />
                <p>At Tilive International LLP, we are committed to providing top-notch consultancy services in the domain of sourcing and supply chain management. Our team of experts has extensive experience in the industry and is well-equipped to help businesses optimize their sourcing and supply chain operations.</p>
                            <br />
                <p>Tilive International LLP offers top-notch consultancy services in sourcing and supply chain management, helping businesses optimize their operations. Our experts provide customized solutions in supplier selection, logistics, compliance, and sustainability. We prioritize collaboration and communication to ensure alignment with clients' vision and values.</p>
                            <br />
                            <p>At Tilive International LLP, we are committed to providing top-notch consultancy services in the domain of sourcing and supply chain management. Our team of experts has extensive experience in the industry and is well-equipped to help businesses optimize their sourcing and supply chain operations.</p>
                            <br />
                            <p>We understand that managing sourcing and supply chain operations can be complex and time - consuming, and we strive to simplify the process for our clients. We work closely with businesses to identify areas of improvement and develop customized solutions to meet their specific needs and goals.
</p>
            </div>
        </div>
    )
}

export default GenralTradingWriteUp;