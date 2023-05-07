import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
 
const HomePageComponent = ({ link, top, firstHead, secondHead, firstP, secondP, imgSrc, state }) => {

    const [position, setPosition] = useState(top); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement

    useEffect(() => {
      function handleScroll() {
        setPosition(window.pageYOffset/30 + top);
        console.log("this is pageOFFset" + window.pageYOffset);
      }
      
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [position]);

    console.log("Hello");
    console.log(state);

    return(
        <div className="hnhn">
          <Fade>
              <div className="HomePageDes" style={{top: `${position}%`}}>
                  <h2 className="HomePageDesHead">{firstHead}</h2>
                  <h2 className="HomePageDesHead">{secondHead}</h2>
                  <br />
                  <p className="HomePageDesP">{firstP}</p>
                  <p className="HomePageDesP">{secondP}</p>
                  <Link to={`/${link}`} state={{state}} className="aaaa"><div className="HomeProductsDesViewMore"><p>View More</p></div></Link>
              </div>
            </Fade>
            
            <img src={imgSrc}/>
        </div>
    )
}

export default HomePageComponent;