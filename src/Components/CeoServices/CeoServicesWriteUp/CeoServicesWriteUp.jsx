import React, { useEffect } from "react";
import "./CeoServicesWriteUp.css";
import { StartingPage } from "../../Home/StartingPage/StartingPage";

import image1 from "./serviceSut.png";

const CeoServicesWriteUp = () => {
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    })


    return(
        <div>
        <StartingPage want={true}/>
            <div className="CeoServicesWriteUp">

                {/* <h1>Ceo Services</h1> */}
                {/* <br /> */}
                <img src={image1} />

                <div className="CeoServiceAndWriteUp">
                    <div className="CeoServiceAndWriteUpInner">
                        <br />
                        <h1 className="CeoServiceAndWriteUpHead">CEO & CFO Services:</h1>
                        <br />
                        <div className="CeoServiceAndWriteUpList">
                            <ul>
                                <li>Strategic leadership and vision setting</li>
                                <li>Business performance analysis and improvement strategies</li>
                                <li>Finacial Management</li>
                                <li>Risk Assessment And Management</li>
                                <li>Leadership development and succession planning</li>
                                <li>Exclusive coaching and mentoring</li>
                                <li>Finacial planning and analysis</li>
                                <li>Budgeting and forecasting</li>
                                <li>Finacial reporting and compliance</li>
                                <li>Cash flow management and working capital optimization</li>
                            </ul>
                            <ul>
                                <li>Mergers and acquisitions support and integration</li>
                                <li>Cost Management And Efficiency improvement</li>
                                <li>Business process optimization and automotion</li>
                                <li>Change management and organizational transformation</li>
                                <li>Market and Competitive Analysis</li>
                                <li>Business development and growth strategies</li>
                                <li>Performance measurement and key performance indicators (KPIs)</li>
                                <li>Technology and digital transformation strategies</li>
                                <li>Sustainability and Environment, Social & Governance (ESG) initiatives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CeoServicesWriteUp;