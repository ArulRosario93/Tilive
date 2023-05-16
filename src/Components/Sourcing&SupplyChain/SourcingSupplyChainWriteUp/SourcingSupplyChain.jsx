import React, { useEffect } from "react";
import "./SourcingSupplyChain.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image1 from "./sourcing&supplychain.jpg";

const SourcingSupplyChainWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })

    return(
        <div>
        <StartingPage want={false}/>
            <div className="SourcingSupplyChainWriteUp">

                {/* <h1 className="SourcingSupplyChainWriteUpHead">Sourcing & SupplyChain</h1> */}
                    <img src={image1}/>
            </div>
        </div>
    )
}

export default SourcingSupplyChainWriteUp;