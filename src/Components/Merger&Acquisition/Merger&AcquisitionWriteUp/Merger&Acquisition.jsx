import React, { useEffect } from "react";
import "./Merger&Acquisition.css"
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image1 from "./mergerandacqu.jpg";

const MergerAcquisitionWriteUp = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })


    return(
        <div>
        <StartingPage want={true}/>
            <div className="MergerAcquisitionWriteUp">
                <img src={image1}/>
                <div className="ggGoUp">
                    <h1>Merger & Acquisition Consultancy Services</h1>
                    <br />
                    <div className="MergerAcquisitionWriteUpList">
                        <ul>
                            <li>Target identification and screening</li>
                            <li>Due diligence assessments</li>
                            <li>Finacial analysis and valuation</li>
                            <li>Regulatory and compliance support</li>
                            <li>Integration planning and execution</li>
                            <li>Strategic planning for mergers and acquisitions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MergerAcquisitionWriteUp;