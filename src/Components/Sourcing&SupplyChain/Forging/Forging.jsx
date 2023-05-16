import React from "react";
import "./Forging.css";

import image from "./forging.jpg";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

const Forging = () => {
    return(
        <div className="Forging">
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

export default Forging;