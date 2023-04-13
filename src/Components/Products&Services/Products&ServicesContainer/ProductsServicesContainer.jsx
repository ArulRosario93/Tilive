import React from "react";
import "./ProductsServicesContainer.css";

const ProductsServicesContainer = () => {
    return(
        <div className="ProductsServicesContainer">
            <div className="ProductsServicesContainerDes">
                <h2 className="ProductsServicesContainerDesHead">Turing Machine</h2>
                <br /><br />
                <p className="ProductsServicesContainerDesP">A Turing machine is a mathematical model of computation describing an abstract machine that manipulates symbols on a strip of tape according to a table of rules. Despite the model's simplicity, it is capable of implementing any computer algorithm.A Turing machine is a mathematical model of computation describing an abstract machine that manipulates symbols on a strip of tape according to a table of rules. Despite the model's simplicity, it is capable of implementing any computer algorithm.A Turing machine is a mathematical model of computation describing an abstract machine that manipulates symbols on a strip of tape according to a table of rules. Despite the model's simplicity, it is capable of implementing any computer algorithm.</p>
                <br /><br />
                <div className="ProductsServicesContainerViewInDetail"><button>View In Detail</button></div>
            </div>
            <div className="ProductsServicesContainerImg"><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Turing_Machine_Model_Davey_2012.jpg"/></div>
        </div>
    )
}

export default ProductsServicesContainer;