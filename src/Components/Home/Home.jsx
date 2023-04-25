import React from "react";
import "./Home.css";
import { StartingPage } from "./StartingPage/StartingPage";
import HomePage from "./HomePage/HomePage";
import HomeProducts from "./HomeProducts/HomeProducts";
import HomeCareers from "./HomeCareers/HomeCareers";
import HomeFooter from "./HomeFooter/HomeFooter";
import { useEffect, useState } from "react";

const Home = () => {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("down");


    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //        var header = document.querySelector(".startingPageContainer");
    //        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //        if (currentScrollTop > lastScrollTop) {
    //           header.classList.add("startingPageContainerdummy");
    //        } else {
    //           header.classList.remove("startingPageContainerdummy");
    //        }
    //        setLastScrollTop(currentScrollTop);
    //     });
    // });

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