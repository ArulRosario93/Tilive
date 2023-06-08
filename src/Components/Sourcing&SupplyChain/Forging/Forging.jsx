import React from "react";
import "./Forging.css";

import image from "./forgingIn.jpg";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

const Forging = () => {
    return(
        <div className="Casting">
        <img src={image}/>
        <StartingPage want={true}/>
            {/* <br/>
            <br/>
            <br/>
            <br/>
            <br/> */}

        <div className="CastingDep" style={{background: 'rgba(0, 0, 0, 0.386)'}}>
            <h1 className="CastingHead">Forging:</h1>
            <div className="CastingflexIT" style={{width: '70%', marginTop: '8vh'}}>
                <div className="CastingMaterial">
                    <h2>Process</h2>
                    <ul>
                        <li>Closed &  Open Die forgings</li>
                        <li> Upsetting</li>
                        <li>Ring Rolling</li>
                        <li>Cold Forging</li>
                    </ul>
                </div>
                <div className="CastingMaterial">
                    <h2>Material</h2>
                    <ul>
                        <li>Steel (grades as per requirements)</li>
                    </ul>
                </div>
            </div>
            <br />  
            <br />  
            <div className="CastingMaterial2"  style={{width: '70%', margin: 'auto'}}>
                    <h2>Weight Range</h2>
                    <ul>
                        <li>As per Customer Requirements</li>
                    </ul>
                </div>
        </div>
        </div>
    )
}

export default Forging;