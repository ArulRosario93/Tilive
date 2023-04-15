import React from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage";
import ProductsServicesHomeHead from "./Products&ServicesHome/Products&ServicesHomeHead/Products&ServicesHome";
import ProductsServicesContainer from "./Products&ServicesContainer/ProductsServicesContainer";
import ProductsServicesGrid from "./Products&ServicesGrid/ProductsServicesGrid";

const ProductsServices = () => {
    return(
        <div>
            <StartingPage />
            <ProductsServicesHomeHead />
            <ProductsServicesContainer />
            <ProductsServicesGrid />
        </div>
    )
}

export default ProductsServices;