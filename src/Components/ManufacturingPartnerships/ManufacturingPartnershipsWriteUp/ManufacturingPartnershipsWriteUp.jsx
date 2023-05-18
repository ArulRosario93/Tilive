import React, { useEffect } from "react";
import "./ManufacturingPartnershipsWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image from "./ManufacturingGuild.jpg";

const ManufacturingPartnershipsWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })


    return(
        <div>
        <StartingPage want={true}/>
            <div className="ManufacturingPartnershipsWriteUp">
                <img src={image}/>
            </div>
        </div>
    )
}

export default ManufacturingPartnershipsWriteUp;