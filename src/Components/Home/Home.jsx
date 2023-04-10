import React from "react";
import "./Home.css";
import { StartingPage } from "./StartingPage/StartingPage";
const Home = () => {
    return(
        <div className="Home">
           <StartingPage want={true} />
        </div>
    )
}

export default Home;