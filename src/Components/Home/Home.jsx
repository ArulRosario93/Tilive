import React from "react";
import "./Home.css";
import { StartingPage } from "./StartingPage/StartingPage";
import HomePage from "./HomePage/HomePage";
import HomeProducts from "./HomeProducts/HomeProducts";
import HomeCareers from "./HomeCareers/HomeCareers";
import HomeFooter from "./HomeFooter/HomeFooter";

const Home = () => {
    return(
        <div className="Home">
           <StartingPage want={true} />
           <HomePage />
           <HomeProducts />
           <HomeCareers />
           <HomeFooter />
        </div>
    )
}

export default Home;