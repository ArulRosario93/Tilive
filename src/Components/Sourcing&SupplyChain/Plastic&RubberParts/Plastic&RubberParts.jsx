import React from "react";
import "./Plastic&RubberParts.css";
import image from "./plastic&rubberParts.jpg";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import { TiStarFullOutline } from "react-icons/ti";

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
        <br />
        <br />
        <p>Airsprings for Trailers/CV/Buses  <TiStarFullOutline />  Bushes for Trailers/CV/PV <TiStarFullOutline /> Fenders/Mudguards <TiStarFullOutline /> Headlamps, Tail lamps <TiStarFullOutline /> Rear view mirrors</p>
        <br />
        <br />
        <div className="spaceHEre"></div>
        {/* <p>Bushes for trailers/CV/PV</p>
        <p>Fenders/mudguards </p>
        <p>Headlamps, tail lamps </p>
        <p>Rear view mirrors </p> */}
        </div>
    )
}

export default PlasticAndRubberParts;