import React from "react";
import Fade from "react-reveal/Fade";
import "./NewsHomeTopNews.css";

const NewsHomeTopNews = () => {
    return(
        <div className="topNews">
        <h1 className="topNewsHead">Top Activity</h1>
        <div className="NewsHomeTopNews">
            <h1></h1>
            <div className="NewsHomeTopNewsContent">
                <div className="NewsHomeTopNewsContentDes">
                    <h1 className="NewsHomeTopNewsContentDesMainHead">Factory Opening</h1>
                    <br />
                    <h5 className="NewsHomeTopNewsContentDesHead">Learn, invent and transform the sky!</h5>
                    <br />
                    <br />
                    <p className="NewsHomeTopNewsContentDesP">The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl....

The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl....The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron. The talks for opening a second Pegatron...</p>
                
                    <Fade left><div className="NewsHomeTopNewsContentDesViewMore"><button>View More</button></div></Fade>
                </div>
            </div>
            <div className="NewsHomeTopNewsImage">
                <div className="NewsHomeTopNewsImageGoesHere"><img src="https://img.freepik.com/premium-photo/caucasian-business-man-factory-engineer-talking-discussion-heavy-industry-manufacturing-factory-worker-safety-hardhat-factory-industrial-facilities_38052-3039.jpg?w=2000"/></div>
            </div>
        </div>
        </div>
    )
}

export default NewsHomeTopNews;