import React, { useEffect } from "react";
import "./CeoServicesWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image1 from "./ceocfo.jpg";

const CeoServicesWriteUp = () => {
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })


    return(
        <div>
        <StartingPage want={true}/>
            <div className="CeoServicesWriteUp">

                {/* <h1>Ceo Services</h1> */}
                <br />
                <img src={image1} />
            </div>
        </div>
    )
}

export default CeoServicesWriteUp;