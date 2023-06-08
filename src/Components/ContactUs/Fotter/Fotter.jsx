import React from "react";
import "./Fotter.css";
import { Link } from "react-router-dom";

const Fotter = () => {

    const handleEmailClick = () => {
        window.location.href = `mailto:info@tilive.co.in`;
    };

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
                        <Link to={"/newsform"} className="fotterLink"><p>Administrator</p></Link>
                        <Link to={"/news"} className="fotterLink"><p>News</p></Link>
                        <Link to={"/contactus"} className="fotterLink"><p>Contact Us</p></Link>
                    </div>
                </div>
                <div>
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
                    <div className="FotterFlexTwoDes">
                        <p>Tel: +91 20 4932 9761 &nbsp; I &nbsp; Mob: +91 78754 44099 &nbsp; I &nbsp; 95112 68475</p>
                        <p>Email: <a href={`mailto:info@tilive.co.in`}  onClick={handleEmailClick}>info@tilive.co.in</a> &nbsp; I &nbsp;  Website:<a href="www.tilive.co.in" target="_blank"> www.tilive.co.in</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Fotter;