import React, { useEffect, useState } from "react";
import "./HomePage.css";

const HomePage =() => {

    const [position, setPosition] = useState(45); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement

    useEffect(() => {
      function handleScroll() {
        setPosition(window.pageYOffset/30 + 45);
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
        <div className="HomePage">
            <div className="HomePageDes" style={{top: `${position}%`}}>
                <h2 className="HomePageDesHead">Tilive</h2>
                <p className="HomePageDesP">Tilive develops and manufactures rear view mirror system and intelligent camera technologies for the automotive industry. It is a member of the Motherson Group, one of the 22 largest automotive suppliers worldwide.</p>
            </div>
        </div>
    )
}

export default HomePage;