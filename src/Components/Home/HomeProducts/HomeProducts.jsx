import React from "react";
import "./HomeProducts.css";
import { Link } from "react-router-dom";

const HomeProducts = () => {
    return(
        <div className="HomeProducts">
            <div className="HomeProductsDes">
                <h4 className="HomeProductsDesHead4">Products</h4>
                <h2 className="HomeProductsDesHead2">Intelligence in View</h2>
                <p className="HomeProductsDesP">Imagine having a perfect vision while driving with a maximum of safety and comfort. This is what Tilive strives for by developing interior and exteriors mirrors as well as intelligent camera technologies for automotive applications.</p>
                <Link to={"/productsservices"} className="aaa"><div className="HomeProductsDesViewMore"><p>Read More</p></div></Link>
            </div>
        </div>
    )
}

export default HomeProducts;