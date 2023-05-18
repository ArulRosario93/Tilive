import React, { useEffect } from "react";
import "./AutomobileAndEngineeringPartsWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image from "./AutomobileEngineering.jpg";

const AutomobileAndEngineeringPartsWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })


    return(
        <div>
        <StartingPage want={true}/>
            <div className="AutomobileAndEngineeringPartsWriteUp">
                <img src={image}/>
            </div>
        </div>
    )
}

export default AutomobileAndEngineeringPartsWriteUp;