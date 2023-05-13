import React from "react";
import "./Fotter.css";
import { Link } from "react-router-dom";

const Fotter = () => {
    return(
        <div className="Fotter">
            <div className="FotterFlex">
                <div className="FotterFlexOne">
                    <div>
                        <Link to={"/"} className="fotterLink"><p>Home</p></Link>
                        <Link to={"/aboutus"} className="fotterLink"><p>About Us</p></Link>
                        <Link to={"/clients"} className="fotterLink"><p>Clients</p></Link>
                    </div>
                    <div>
                        <Link to={"/careers"} className="fotterLink"><p>Careers</p></Link>
                        <Link to={"/news"} className="fotterLink"><p>News</p></Link>
                        <Link to={"/productsservices"} className="fotterLink"><p>Products & Services</p></Link>
                    </div>
                </div>
                <div className="FotterFlexTwo">
                    <div className="FotterFlexTwoBranch">
                        <h3>Branch office:</h3>
                        <p>G-31, Sunshree Woods Commercial Complex</p>
                        <p>NIBM Road, Kondhwa, Pune- 411048</p>
                        <p>Maharashtra, India</p>
                    </div>
                    <br />
                    <div className="FotterFlexTwoRegistered">
                        <h3>Registered office:</h3>
                        <p>P-12, Sacred Heart Town</p>
                        <p>Wanawadi, Pune- 411040</p>
                        <p>Maharashtra, India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter;