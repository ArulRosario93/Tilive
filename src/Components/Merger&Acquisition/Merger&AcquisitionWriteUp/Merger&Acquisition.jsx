import React, { useEffect } from "react";
import "./Merger&Acquisition.css"
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image1 from "./megeracq.jpg";

const MergerAcquisitionWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })


    return(
        <div>
        <StartingPage want={true}/>
            <div className="MergerAcquisitionWriteUp">

                {/* <h1>Merger & Acquisition Consultancy Services</h1> */}
                <br />
                <img src={image1}/>
            </div>
        </div>
    )
}

export default MergerAcquisitionWriteUp;