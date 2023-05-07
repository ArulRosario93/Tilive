import React, { useState, useEffect } from "react";
import "./ClientsHome.css";

const ClientsHome = () => {

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
        <div className="ClientsHome">
            <div className="ClientsHomeImg">
            {/* <img src="https://www.sedex.com/app/uploads/2022/11/Consulting-2.jpeg"/> */}
            </div>
            <div className="ClientsHomeDes" style={{top: `${position}%`}}>
                <h3 className="ClientsHomeDesHeadThird">Careers</h3>
                <br />
                <h1 className="ClientsHomeDesHeadOne">"Join Our Team at Tilive International LLP"</h1>
                <br />
                <p className="ClientsHomeDesP"> <span className="ClientsHomeDesPSpan">At Tilive International LLP, we believe that our greatest asset is our talented team
of professionals. We are a dynamic and rapidly growing consultancy and service
provider in the Automotive &amp; Engineering sectors, offering exciting career
opportunities for individuals who are passionate, innovative, and committed to
excellence.</span></p>
            </div>
        </div>
    )
}

export default ClientsHome;