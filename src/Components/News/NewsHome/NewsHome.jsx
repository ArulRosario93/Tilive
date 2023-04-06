import React from "react";
import "./NewsHome.css";
import Fade from "react-reveal/Fade";


const NewsHome = () => {
    return(
        <div className="NewsHome">
            <div className="NewsHomeDes">
                <Fade bottom>
                    <h3 className="NewsHomeDesHead">Top Highlight Des about the company</h3>
                    <br />
                    <p className="NewsHomeDesP"> More general info saying what the company does etc...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet sodales diam, ac pharetra mi. Nullam erat quam, sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.sollicitudin id venenatis a, tempus a risus. Duis iaculis ac eros at sollicitudin.</p>
                </Fade>
            </div>
        </div>
    )
}

export default NewsHome;