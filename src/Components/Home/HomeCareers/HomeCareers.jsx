import React from "react";
import "./HomeCareers.css";
import { Link } from "react-router-dom";

const HomeCareers = () => {
    return(
        <div className="HomeCareers">
            <div className="HomeCareersImg">
                <div className="HomeCareersImgImg"><img src="https://fellow.app/wp-content/uploads/2021/09/career-talks.jpg"/></div>
            </div>
            <div className="HomeCareersDes">
                <h4 className="HomeCareersDesHead4">CAREERS</h4>
                <h2 className="HomeCareersDesHead2">"Become part of our team"</h2>
                <p className="HomeCareersDesP">At Tilive International LLP, we believe that our greatest asset is our talented team
of professionals. We are a dynamic and rapidly growing consultancy and service
provider in the Automotive &amp; Engineering sectors, offering exciting career
opportunities for individuals who are passionate, innovative, and committed to
excellence.</p>
                <br />
                <Link to={"/careers"} className="aaa"><div className="HomeProductsDesViewMoreHEy">
                {/* <p>&#62;</p> */}
                <p>Read More</p></div></Link>
            </div>
        </div>
    )
}

export default HomeCareers;