import React, { useEffect, useState } from "react";
import "./AboutUsHome.css";
import Fade from "react-reveal/Fade";

const AboutUsHome  = () => {

    const [position, setPosition] = useState(43); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement
  
    useEffect(() => {
      function handleScroll() {
        setPosition(window.pageYOffset/15 + 43);
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
        <div className="AboutUsHome">
            <Fade bottom slow>
                <div className="AboutUsHomeDes" style={{top: `${position}vh`}}>
                    <h1 className="AboutUsHomeDesHead">Transform your marketing, accelerate business development, optimize SCM and empower global sourcing with Tilive!</h1>
                </div>
            </Fade>
        </div>
    )
}

export default AboutUsHome;