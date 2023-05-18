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
        <div className="SourcingandsuppychainBG">
            
        <StartingPage want={true}/>
        
                <h1 className="SourcingSupplyChainWriteUpHead">Sourcing and Supply Chain Management</h1>
            <div className="SourcingSupplyChainWriteUp">
                <div className="SourcingSupplyChainWriteUpOne">
                    <ul>
                        <li>Supplier Selection, Approval & Management </li>
                        <li>RFQ Processing and Techno commercial offers</li>
                        <li>Negotiations, Price & Commercial settlements </li>
                        <li>Technical and design sign off </li>
                        <li>Tool Development  </li>
                        <li>Prototype Sample Development & Approval </li>
                        <li>PPAP submission & Approval </li>
                    </ul>
                </div>
                <div className="SourcingSupplyChainWriteUpTwo">
                    <ul>
                        <li>Pilot Batch Supply</li>
                        <li>Production/ Bulk Supplies </li>
                        <li>PDI (Pre-Dispatch Inspection) & Documentation </li>
                        <li>Production & Planning Schedule Management </li>
                        <li>Supply Chain, Logistics & Documentation </li>
                        <li>Payment & Receivables management </li>
                        <li>Warranty Support </li>
                        <li>Vendor Management & Periodic Audits </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default SourcingSupplyChainWriteUp;