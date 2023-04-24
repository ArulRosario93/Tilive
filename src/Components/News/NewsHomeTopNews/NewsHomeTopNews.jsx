import React, { useState, useEffect } from "react";
import "./NewsHomeTopNews.css";

import { getDocs, collection, doc, query, orderBy } from "firebase/firestore";
import { firebasee } from "../../../firebase";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const NewsHomeTopNews = () => {

    const [docs, setDocs] = useState();

    const handleClick = async () => {
        const query1 = await collection(firebasee, "tilive_data");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb); 

        setDocs(aa.docs[0]?._document?.data?.value?.mapValue?.fields);
        console.log(aa.docs[5]?._document?.data?.value?.mapValue?.fields);
    }

    const options = { year: "numeric", month: "long", day: "numeric"}
    const finalONe1 =  new Date(docs?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)

    var stateChange = {
        eventName: docs?.eventName?.stringValue,
        eventDescription: docs?.eventDescription?.stringValue,
        eventCaption: docs?.eventCaption?.stringValue,
        linkURl: docs?.fileLink?.arrayValue?.values,
        timestamp: finalONe1,
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
                
                    <Fade><div className="NewsHomeTopNewsContentDesViewMore"><Link to="/moredetail" state={{stateChange}}><button onClick={()=> {console.log("CLicked Here on")}}>View In Detail</button></Link></div></Fade>
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