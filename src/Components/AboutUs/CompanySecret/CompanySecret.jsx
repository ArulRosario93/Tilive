import React, { useState, useEffect } from "react";
import "./CompanySecret.css";

const CompanySecret = () => {

    const [position, setPosition] = useState(34); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement
  
    useEffect(() => {
      function handleScroll() {
        setPosition(window.pageYOffset/40 + 34);
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
        <div className="CompanySecret">
            {/* <div className="CompanySecretBG"><img src="https://previews.123rf.com/images/vbvv77/vbvv771601/vbvv77160100039/50905108-vector-abstract-small-black-dots-background.jpg"/></div> */}
            <div className="CompanySecretBG"><img src="https://thumbs.dreamstime.com/b/abstract-white-background-small-black-spots-abstract-white-background-small-black-spots-183662720.jpg"/></div>

            <div className="CompanySecretHead" style={{padding: `${position}px 10px`}}>

                <h1 className="CompanySecretHeadH1">The Company's Secret</h1>

            </div>
            <div className="CompanySecretDes">
                <p className="CompanySecretDesp"> Resources for Black BackgroundFind & Download Free Graphic Resources for Black Background Find & Download Free Graphic Resources for Black Background Find & Download Free Graphic Resources for Black Background White Dots. 85000+ Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ HighFind & Download Free Graphic Resources for Black Background White Dots. 85000+ Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ HighFind & Download Free Graphic Resources for Black Background White Dots. 85000+ Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ HighFind & Download Free Graphic Resources for Black Background White Dots. 85000+ Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High...</p>
                <br />
                {/* <p className="CompanySecretDesp"> Graphic Resources for Black Background Find & Download Free Graphic Resources for Black Background Find & Download Free Graphic Resources for Black Background  Free Graphic Resources for Black BackgroundFind & Download Free Graphic Resources for Black Background Find & Download Free Graphic Resources for Black Background Find & Download Free Graphic Resources for Black Background White Dots. 85000+ Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ HighFind & Download Free Graphic Resources for Black Background White Dots. 85000+ Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ HighFind & Download Free Graphic Resources for Black Background White Dots. 85000+ Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ HighFind & Download Free Graphic Resources for Black Background White Dots. 85000+ Vectors, Stock Photos & PSD files. ✓ Free for commercial use ✓ High...</p> */}
            </div>
        </div>
    )
}

export default CompanySecret;