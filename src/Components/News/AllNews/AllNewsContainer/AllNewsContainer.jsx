import React, { useState, useEffect } from "react";
import "./AllNewsContainer.css";

import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { firebasee } from "../../../../firebase";
import { Link } from "react-router-dom";


const AllNewsContainer = () => {

    const [docs, setDocs] = useState();
    // const [fileType, setfileType] = useState(true);

    const handleClick = async () => {
        const query1 = await collection(firebasee, "tilive_data");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb); 

        setDocs(aa.docs[5]?._document?.data?.value?.mapValue?.fields);
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

    var des = `${docs?.eventDescription?.stringValue}`;
    var desfinal = des.length > 500? des.substring(0, 500) + "...": des.substring(0, 500);

    return(
        <div className="AllNewsCreativeContainer">
            <div className="AllNewsContainerStartsHere">
                <div className="AllNewsContainerStartsHereDes">
                    <h2 className="AllNewsContainerStartsHereDesHead">{docs?.eventName?.stringValue}</h2>
                    <br />
                    <p className="AllNewsContainerStartsHereDesP">{desfinal}</p>
                    <div className="NewsHomeTopNewsContentDesViewMore"><Link to={"/moredetail"} state={{stateChange}}><button>View More Detail</button></Link></div>
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