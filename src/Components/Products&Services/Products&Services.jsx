import React from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import ProductsServicesHomeHead from "./Products&ServicesHome/Products&ServicesHomeHead/Products&ServicesHome";
import ProductsServicesContainer from "./Products&ServicesContainer/ProductsServicesContainer";

const ProductsServices = () => {
    return(
        <div>
            <StartingPage />
            <ProductsServicesHomeHead />
            <ProductsServicesContainer />
        </div>
    )
}

export default ProductsServices;