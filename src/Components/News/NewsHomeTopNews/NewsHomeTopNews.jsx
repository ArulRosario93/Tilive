import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./NewsHomeTopNews.css";

import { getDocs, collection, doc } from "firebase/firestore";
import { firebasee } from "../../../firebase";
import { Link } from "react-router-dom";

const NewsHomeTopNews = () => {

    const [docs, setDocs] = useState();

    const handleClick = async () => {
        const aa  = await getDocs(collection(firebasee, "tilive_data"));
        setDocs(aa.docs[5]?._document?.data?.value?.mapValue?.fields);
        console.log(aa.docs[5]?._document?.data?.value?.mapValue?.fields);
    }

    var stateChange = {
        eventName: docs?.eventName?.stringValue,
        eventDescription: docs?.eventDescription?.stringValue,
        eventCaption: docs?.eventCaption?.stringValue,
        linkURl: docs?.fileLink?.arrayValue?.values,
    }

    var linkURl3 = `${docs?.fileLink?.arrayValue?.values[0]?.stringValue}`;

    const CurrentType = linkURl3.slice(linkURl3.lastIndexOf(".") +1, linkURl3.lastIndexOf(".") + 4);

    var fileType = true;

    if(CurrentType == "mp4"){
        fileType = false;
    }

    useEffect(() => {
        handleClick();
    }, []);

    return(
        <div className="topNews">
        <h1 className="topNewsHead">Top Activity</h1>
        <div className="NewsHomeTopNews">
            <h1></h1>
            <div className="NewsHomeTopNewsContent">
                <div className="NewsHomeTopNewsContentDes">
                    <h1 className="NewsHomeTopNewsContentDesMainHead">{docs?.eventName?.stringValue}</h1>
                    <br />
                    <h5 className="NewsHomeTopNewsContentDesHead">{docs?.eventCaption?.stringValue}</h5>
                    <br />
                    <br />
                    <p className="NewsHomeTopNewsContentDesP">{docs?.eventDescription?.stringValue}</p>
                
                    <Fade><div className="NewsHomeTopNewsContentDesViewMore"><Link to={"/news/event"} state={{stateChange}}><button>View In Detail</button></Link></div></Fade>
                </div>
            </div>
            <div className="NewsHomeTopNewsImage">
                <div className="NewsHomeTopNewsImageGoesHere">

                    {
                        fileType? <img src={docs?.fileLink?.arrayValue?.values[0]?.stringValue}/>: <video width="100%">
                            <source src={docs?.fileLink?.arrayValue?.values[0]?.stringValue} type="video/mp4"/>
                        </video>
                    }    
                
                </div>
            </div>
        </div>
        </div>
    )
}

export default NewsHomeTopNews;