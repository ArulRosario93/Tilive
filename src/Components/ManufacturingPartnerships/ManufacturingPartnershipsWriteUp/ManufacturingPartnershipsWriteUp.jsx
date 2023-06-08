import React, { useEffect } from "react";
import "./ManufacturingPartnershipsWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image1 from "./facturing.jpg";
import image2 from "./gg1.jpg";
import image3 from "./gg2.jpg";
import image4 from "./gg3.jpg";

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
                {/* <img src={image}/> */}
                <img src={image1}/>
                {/* <img src={image3}/>
                <img src={image4}/>
                <img src={image2}/>  */}


                <div className="ManufacturingPartnershipsWriteUpStartsHere">

                    <h1 className="ManufacturingPartnershipsWriteUpHead">
                        Manufacturing Guild 
                    </h1>

                    <div className="ManufacturingPartnershipsWriteUpHeadFlex">
                        <div>
                            <p>Rotary Unions</p>
                            <p>Pole Wheels</p>
                            <p>Machined Components</p>
                        </div>
                        <div>
                            <p>Hot & Cold Forgings</p>
                            <p>Investment Castings</p>
                            <p>Tools - Instruments - Gauges</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManufacturingPartnershipsWriteUp;