import React from "react";
import "./SheetMetal&FabricatedParts.css";
import image from "./steelmetal&fabricatedParts.jpg";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

const SheetMetalFabricatedParts = () => {
    return(
        <div className="SheetMetalFabricatedParts">
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

export default SheetMetalFabricatedParts;