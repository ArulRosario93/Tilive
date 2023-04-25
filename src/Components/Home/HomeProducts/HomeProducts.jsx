import React, { useState, useEffect } from "react";
import "./HomeProducts.css";
import { Link } from "react-router-dom";

const HomeProducts = () => {

    const [position, setPosition] = useState(30); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement

    useEffect(() => {
      function handleScroll() {

        setPosition(window.pageYOffset/38 + 30);
        // setPosition(window.pageYOffset + moveAmount);
        console.log("this is pageOFFset" + window.pageYOffset);
        // console.log(moveAmount);
      }
      
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [position]);

    return(
        <div className="HomeProducts">
            <div className="HomeProductsDes" style={{top: `${position}%`}}>
                <h4 className="HomeProductsDesHead4">Products & Services</h4>
                <h2 className="HomeProductsDesHead2">Intelligence in View</h2>
                <p className="HomeProductsDesP">Imagine having a perfect vision while driving with a maximum of safety and comfort. This is what Tilive strives for by developing interior and exteriors mirrors as well as intelligent camera technologies for automotive applications.</p>
                <Link to={"/productsservices"} className="aaa"><div className="HomeProductsDesViewMore">
                {/* <p>&#62;</p> */}
                <p>Read More</p></div></Link>
            </div>
        </div>
    )
}

export default HomeProducts;