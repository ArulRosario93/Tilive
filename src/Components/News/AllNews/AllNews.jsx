import React, { useEffect, useState } from "react";
import { StartingPage } from "../../Home/StartingPage/StartingPage";
import "./AllNews.css";
import { firebasee } from "../../../firebase";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { Fade } from "react-reveal";
import AllNews3Grid from "./AllNews3Grid/AllNews3Grid";
import AllNewsHead from "./AllNewsHead/AllNewsHead";
import AllNewsContainer from "./AllNewsContainer/AllNewsContainer";
import Loader from "../../Loader/Loader";
import Fotter from "../../ContactUs/Fotter/Fotter";

const AllNews = () => {

    const [loader, setLoader] = useState(true);

    setTimeout(() => {
        setLoader(false);
    }, 2000);

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return(
        <>
            {
                loader? <Loader />: <div className="AllNews">
                    <StartingPage want={true}/>

                    <div className="AllNewsContainer">
                        {/* <h1 className="AllNewsContainerHead">News & Events</h1> */}
                        {/* <Fade> */}
                            <AllNewsHead />
                        {/* </Fade> */}

                        {/* <Fade> */}
                            <AllNews3Grid />
                        {/* </Fade> */}

                        {/* <Fade bottom> */}
                            {/* <AllNewsContainer /> */}
                        {/* </Fade> */}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Fotter />
                    </div>            
                </div>
            }
        </>
    )
}

export default AllNews;