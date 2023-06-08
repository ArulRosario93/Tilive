import React from "react";
import "./Casting.css";
import image from "./CastingsBackgroundforwebpage.png";
import { StartingPage } from "../../Home/StartingPage/StartingPage";
import Fotter from "../../ContactUs/Fotter/Fotter";

const Casting = () => {
    return(
        <div className="Casting">
        <StartingPage want={true}/>
        {/* <br/>
        <br/>
        <br/>
        <br/>
        <br/> */}

        <div className="CastingDep">
            <h1 className="CastingHead">Castings:</h1>
            <div className="CastingflexIT">
                <div className="CastingMaterial">
                    <h2>Material</h2>
                    <ul>
                        <li>Grey</li>
                        <li>SGI / Ductile Iron</li>
                        <li>Steel</li>
                        <li>Aluminum</li>
                    </ul>
                </div>
                <div className="CastingMaterial">
                    <h2>Process</h2>
                    <ul>
                        <li>Green Sand Molding</li>
                        <li>Shell Molding</li>
                        <li>Investment / Last Foam / Wax process</li>
                        <li>Hand Molding For Large Castings</li>
                        <li>Pressure Die Casting & Gravity Die Casting (for Aluminum)</li>
                    </ul>
                </div>
            </div>
            <div className="CastingMaterial2">
                    <h2>Weight Range</h2>
                    <ul>
                        <li>As per Customer Requirements</li>
                    </ul>
                </div>
        </div>


            <img src={image}/>

            <Fotter />
        </div>
    )
}

export default Casting;