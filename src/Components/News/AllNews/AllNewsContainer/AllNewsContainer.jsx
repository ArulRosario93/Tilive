import React, { useState, useEffect } from "react";
import "./AllNewsContainer.css";

import { getDocs, collection } from "firebase/firestore";
import { firebasee } from "../../../../firebase";
import { Link } from "react-router-dom";

const AllNewsContainer = () => {

    const [docs, setDocs] = useState();
    // const [fileType, setfileType] = useState(true);

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
        <div className="AllNewsCreativeContainer">
            <div className="AllNewsContainerStartsHere">
                <div className="AllNewsContainerStartsHereDes">
                    <h2 className="AllNewsContainerStartsHereDesHead">{docs?.eventName?.stringValue}</h2>
                    <br />
                    <p className="AllNewsContainerStartsHereDesP">{docs?.eventDescription?.stringValue}</p>
                    <div className="NewsHomeTopNewsContentDesViewMore"><Link to={"/news/event"} state={{stateChange}}><button>View More Detail</button></Link></div>
                </div>
                <div className="AllNewsContainerStartsHereImg">
                    {
                        fileType? <img src={docs?.fileLink?.arrayValue?.values[0]?.stringValue}/>: <video width="100%">
                                    <source src={docs?.fileLink?.arrayValue?.values[0]?.stringValue} type="video/mp4"/>
                                </video>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default AllNewsContainer;