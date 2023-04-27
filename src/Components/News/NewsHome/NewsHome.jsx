import React, { useState, useEffect } from "react";
import "./NewsHome.css";
import Fade from "react-reveal/Fade";

const NewsHome = () => {

    const [position, setPosition] = useState(50); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement
  
    useEffect(() => {
      function handleScroll() {
        setPosition(window.pageYOffset/25 + 50);
        // setPosition(window.pageYOffset + moveAmount);
        console.log("this is pageOFFset" + window.pageYOffset);
        // console.log(moveAmount);
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [moveAmount]);

    return(
        <div className="NewsHome">
            <div className="NewsHomeDes" style={{top: `${position}vh`}}>
                <Fade bottom>
                    <h3 className="NewsHomeDesHead">Top Highlight Des about the company</h3>
                    <br />
                    <p className="NewsHomeDesP"> More general info saying what the company does etc...sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.</p>
                </Fade>
            </div>
        </div>
    )
}

export default NewsHome;