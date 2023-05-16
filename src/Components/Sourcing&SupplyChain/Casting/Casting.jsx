import React from "react";
import "./Casting.css";
import image from "./casting.jpg";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

const Casting = () => {
    return(
        <div className="Casting">
        <StartingPage want={true}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
            <img src={image}/>
        </div>
    )
}

export default Casting;