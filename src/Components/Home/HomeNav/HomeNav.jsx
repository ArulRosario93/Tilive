import React, { useState } from "react";
import "./HomeNav.css";

const HomeNav = () => {

    const [style, setStyle] = useState(false);

    const handleClick = () => {
        setStyle(!style);
    }

    return(
        <div className="HomeNav" style={{display: style? "block": "none"}}>
            <h1 className="HomeNavClose" onClick={() => handleClick()}>X</h1>
            <div className="HomeNavNav">
                <div>
                    <p>About Us</p>
                </div>
                <div>
                    <p>Products & Services</p>
                </div>
                <div>
                    <p>Buy Online</p>
                </div>
                <div>
                    <p>Clients</p>
                </div>
                <div>
                    <p>News</p>
                </div>
                <div>
                    <p>Careers</p>
                </div>
                <div>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default HomeNav;