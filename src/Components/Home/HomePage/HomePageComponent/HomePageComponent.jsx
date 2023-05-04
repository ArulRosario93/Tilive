import React, { useEffect, useState } from "react";

const HomePageComponent = ({ top, firstHead, secondHead, firstP, secondP, imgSrc }) => {

    const [position, setPosition] = useState(top); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement

    useEffect(() => {
      function handleScroll() {
        setPosition(window.pageYOffset/30 + top);
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
        <div className="hnhn">
            <div className="HomePageDes" style={{top: `${position}%`}}>
                <h2 className="HomePageDesHead">{firstHead}</h2>
                <h2 className="HomePageDesHead">{secondHead}</h2>
                <br />
                <p className="HomePageDesP">{firstP}</p>
                                <p className="HomePageDesP">{secondP}</p>
            </div>
            <img src={imgSrc}/>
        </div>
    )
}

export default HomePageComponent;