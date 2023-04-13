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

const AllNews = () => {

    const [docs, setDocs] = useState([]);

    const [loader, setLoader] = useState(true);
        
    const handleClick = async () => {
        const aa  = await getDocs(collection(firebasee, "tilive_data"));
        setDocs(aa.docs);
        console.log(aa.docs);
    }

    setTimeout(() => {
        setLoader(false);
    }, 2000);

    useEffect(() => {
        window.scrollTo(0,0);
        handleClick();
    }, []);

    return(
        <>
            {
                loader? <Loader />: <div className="AllNews">
                    <StartingPage want={false}/>

                    <div className="AllNewsContainer">
                        {/* <h1 className="AllNewsContainerHead">News & Events</h1> */}
                        {/* <Fade> */}
                            <AllNewsHead />
                        {/* </Fade> */}

                        {/* <Fade> */}
                            <AllNews3Grid />
                        {/* </Fade> */}

                        {/* <Fade bottom> */}
                            <AllNewsContainer />
                        {/* </Fade> */}
                    </div>            
                </div>
            }
        </>
    )
}

export default AllNews;