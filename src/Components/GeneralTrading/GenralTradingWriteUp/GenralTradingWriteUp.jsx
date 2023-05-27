import React, { useEffect } from "react";
import "./GenralTradingWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image4 from "./generaltrading.jpg";


const GenralTradingWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })

    return(
        <div>
        <StartingPage want={true}/>
            <div className="GenralTradingWriteUp">

                {/* <h1>General Trading</h1> */}
                <br />
                <img src={image4}/>
            </div>
        </div>
    )
}

export default GenralTradingWriteUp;