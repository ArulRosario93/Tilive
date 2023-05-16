import React from "react";
import "./MachinedComponents.css";
import image from "./machinedComponents.jpg";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

const MachinedComponents = () => {
    return(
        <div className="MachinedComponents">
        <StartingPage want={true}/>
        <br />
        <br />
        <br />
        <br />
            <img src={image}/>
        </div>
    )
}

export default MachinedComponents;