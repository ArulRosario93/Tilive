import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
 
const HomePageComponent = ({ link, top, firstHead, secondHead, firstP, secondP, imgSrc, state }) => {

    const [position, setPosition] = useState(30); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement

    useEffect(() => {
      function handleScroll() {
        setPosition(window.pageYOffset/30 + 30);
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

              <div className="HomePageDes"
               style={{top: `${position}%`}}
               >

                  <h2 className="HomePageDesHead">{firstHead}</h2>
                  <h2 className="HomePageDesHead">{secondHead}</h2>
                  <br />
                  <p className="HomePageDesP">{firstP}</p>
                  <p className="HomePageDesPP">{secondP}</p>
                  <Link to={`/${link}`} state={{state}} className="aaaa"><div className="HomeProductsDesViewMore"><p>View More</p></div></Link>
              </div>
            </Fade>
            <div>
              <div className="overlay"></div>
              <img src={imgSrc}/>
            </div>
        </div>
    )
}

export default HomePageComponent;