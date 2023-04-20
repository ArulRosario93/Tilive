import React, { useEffect, useRef, useState } from "react";
import { StartingPage } from "../Home/StartingPage/StartingPage.jsx";
import ProductsServicesHomeHead from "./Products&ServicesHome/Products&ServicesHomeHead/Products&ServicesHome";
import ProductsServicesContainer from "./Products&ServicesContainer/ProductsServicesContainer";
import ProductsServicesGrid from "./Products&ServicesGrid/ProductsServicesGrid";
import Loader from "../Loader/Loader";
import ScrollingComponent from "../Clients/ScrollingComponent/ScrollingComponent";
import ProductsServicesFotter from "./ProductsServicesFotter/ProductsServicesFotter";

const ProductsServices = () => {

    const [loader, setLoader] = useState(false);

    const [OP, setOP] = useState(0);

    const ref = useRef(null);

    useEffect(() => {

        setTimeout(() => {
            setLoader(true);
        }, 2000);

        window.scrollTo({
            top: 0,
            // behavior: 'smooth' // smooth scrolling animation
        });
        

        if (ref.current) {
            const { top } = ref.current.getBoundingClientRect();

            var hhToDivHeight = Math.round(top);

            setOP(hhToDivHeight);
            console.log(OP);
            console.log("Found");
        }
    }, [loader, OP])

    return(
        loader? <div>
            <StartingPage want={false}/>
            <ProductsServicesHomeHead />
            <ProductsServicesContainer />
            <ProductsServicesGrid />
            <div ref={ref}><ScrollingComponent heightStartsHere={OP != 0? OP : 2000} firstImage="https://media.istockphoto.com/id/987385296/photo/metal-rolled-products-on-a-warehouse-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=nDlihb5fUsKIyJgOt6IWPNmFfeQSE_CcSQVyzd-aSis=" secondImage="https://www.ferrettogroup.com/uploads/Pagine/ferretto-omr-031.jpg" thirdImage="https://www.baumalog.eu/wp-content/uploads/2022/02/TwinTower-mini-1.jpg" firstHead="Baumalog" firstDes="Find here online price details of companies selling Steel Metal Components. Get info of suppliers, manufacturers, exporters, traders of Steel MetalFind here online price details of companies selling Steel Metal Components. Get info of suppliers, manufacturers, exporters, traders of Steel Metal ..." secondHead="Sheet metal storage" secondDes="Wholesale Merchants of Iron and Steel Products - Iron And Steel, Metal Sheets And Plates, TMT Bars and Structural Sheets offered by CB-YASHI & COWholesale Merchants of Iron and Steel Products - Iron And Steel, Metal Sheets And Plates, TMT Bars and Structural Sheets offered by CB-YASHI & CO..." thirdHead="Metal sheet warehouse rack" thirdDes="Steel Products manufacture custom-made items of metal. We reduce raw material waste and achieve higher product strength at even lower prices. Steel Products manufacture custom-made items of metal. We reduce raw material waste and achieve higher product strength at even lower prices..." firstLink="" secondLink="" thirdLink=""/></div>
            <ProductsServicesFotter />
        </div> : <Loader />
    )
}

export default ProductsServices;