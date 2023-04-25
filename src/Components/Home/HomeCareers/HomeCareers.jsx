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
                <p className="HomeCareersDesP">At Tilive we believe that our people are the key to our success and that the capability of the company is the combined competence of all of us. Join our team and experience the spirit of a well-networked global enterprise offering exciting projects and outstanding development opportunities.</p>
                <br />
                <Link to={"/careers"} className="aaa"><div className="HomeProductsDesViewMore">
                {/* <p>&#62;</p> */}
                <p>Read More</p></div></Link>
            </div>
        </div>
    )
}

export default HomeCareers;