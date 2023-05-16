import React from "react";
import "./Plastic&RubberParts.css";
import image from "./plastic&rubberParts.jpg";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

const PlasticAndRubberParts = () => {
    return(
        <div className="PlasticAndRubberParts">
        <StartingPage want={true}/>
        <br />
        <br />
        <br />
        <br />
        <br />
            <img src={image}/>
        </div>
    )
}

export default PlasticAndRubberParts;