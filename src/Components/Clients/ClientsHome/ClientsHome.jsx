import React from "react";
import "./ClientsHome.css";

const ClientsHome = () => {
    return(
        <div className="ClientsHome">
            <div className="ClientsHomeImg">
            {/* <img src="https://www.sedex.com/app/uploads/2022/11/Consulting-2.jpeg"/> */}
            </div>
            <div className="ClientsHomeDes">
                <h3 className="ClientsHomeDesHeadThird">Careers</h3>
                <br />
                <h1 className="ClientsHomeDesHeadOne">"Become part of our team"</h1>
                <br />
                <p className="ClientsHomeDesP"> <span className="ClientsHomeDesPSpan">At SMR we believe that our people are our biggest assets and that the capability of the company is the combined competence of all of us. Join our team and experience the spirit of a well-networked global enterprise offering exciting projects and outstanding development opportunities.</span></p>
            </div>
        </div>
    )
}

export default ClientsHome;