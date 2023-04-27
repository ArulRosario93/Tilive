import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { firebasee } from "../../../../firebase";

const AllNews3Grid = () => {

    const [docs1, setDocs1] = useState();
    const [fileType1, setfileType1] = useState(true);
    
    const [docs2, setDocs2] = useState();
    const [fileType2, setfileType2] = useState(true);

    const [docs3, setDocs3] = useState();
    const [fileType3, setfileType3] = useState(true);

    const [currentItem, setCurrentItem] = useState(true);

    const [anyChange, setAnyChange] = useState(false);
    const options = { year: "numeric", month: "long", day: "numeric"}

    const handleEvent1 = async () => {
        const query1 = await collection(firebasee, "tilive_data");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb); 

        if(aa?.docs[1]?._document?.data?.value?.mapValue?.fields){

            const data = aa?.docs[1]?._document?.data?.value?.mapValue?.fields;

            const finalONe1 =  new Date(data?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)

            const eventCaption = data?.eventCaption?.stringValue;
            const eventDescription = data?.eventDescription?.stringValue;
            const eventName = data?.eventName?.stringValue;
            const linkURl = data?.fileLink?.arrayValue?.values;

            const stateChange = {
                eventCaption: eventCaption,
                eventDescription: eventDescription,
                eventName: eventName,
                linkURl: linkURl,
                timestamp: finalONe1,
            }

            setDocs1(stateChange);

            const linkURl1 = docs1.linkURl[0]?.stringValue;

            const CurrentType = linkURl1.slice(linkURl1.lastIndexOf(".") +1, linkURl1.lastIndexOf(".") + 4);
            
            if(CurrentType == "mp4"){
                setfileType1(false);
            }

        }
    }

    setTimeout(() => {
        setCurrentItem(false);
    }, 500);

    const handleEvent2 = async () => {
const query1 = await collection(firebasee, "tilive_data");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb); 
        if(aa?.docs[2]?._document?.data?.value?.mapValue?.fields){
            // const item = aa?.docs[0]?._document?.data?.value?.mapValue?.fields;

            const data = aa?.docs[2]?._document?.data?.value?.mapValue?.fields;

            const finalONe1 =  new Date(data?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)


            const eventCaption = data?.eventCaption?.stringValue;
            const eventDescription = data?.eventDescription?.stringValue;
            const eventName = data?.eventName?.stringValue;
            const linkURl = data?.fileLink?.arrayValue?.values;

            const stateChange = {
                eventCaption: eventCaption,
                eventDescription: eventDescription,
                eventName: eventName,
                timestamp: finalONe1,
                linkURl: linkURl,
            }

            setDocs2(stateChange);

            const linkURl2 = docs2.linkURl[0]?.stringValue;

            const CurrentType = linkURl2.slice(linkURl2.lastIndexOf(".") +1, linkURl2.lastIndexOf(".") + 4);
            
            if(CurrentType == "mp4"){
                setfileType2(false);
            }

        }
    }

    const handleEvent3 = async () => {
        const query1 = await collection(firebasee, "tilive_data");

        const bb = await query(query1, orderBy('timeStamp', 'desc'));

        const aa = await getDocs(bb); 
        if(aa?.docs[3]?._document?.data?.value?.mapValue?.fields){
            // const item = aa?.docs[0]?._document?.data?.value?.mapValue?.fields;

            const data = aa?.docs[3]?._document?.data?.value?.mapValue?.fields;

            const finalONe1 =  new Date(data?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)

            const eventCaption = data?.eventCaption?.stringValue;
            const eventDescription = data?.eventDescription?.stringValue;
            const eventName = data?.eventName?.stringValue;
            const linkURl = data?.fileLink?.arrayValue?.values;

            const stateChange = {
                eventDescription: eventDescription,
                eventName: eventName,
                eventCaption: eventCaption,
                linkURl: linkURl,
                timestamp: finalONe1,
            }

            setDocs3(stateChange);

            const linkURl3 = docs3.linkURl[0]?.stringValue;

            const CurrentType = linkURl3.slice(linkURl3.lastIndexOf(".") +1, linkURl3.lastIndexOf(".") + 4);
        
            if(CurrentType == "mp4"){
                setfileType3(false);
            }

        }
    }

    useEffect(() => {
        handleEvent1();
        handleEvent2();
        handleEvent3();
    }, [currentItem]);


    var doc1Des = `${docs1?.eventDescription}`;
    var doc1finalDes = doc1Des.substring(0, 120) + "...";

    var doc2Des = `${docs2?.eventDescription}`;
    var doc2finalDes = doc2Des.substring(0, 120) + "...";
    
    var doc3Des = `${docs3?.eventDescription}`;
    var doc3finalDes = doc3Des.substring(0, 120) + "...";

    return(
        <div className="AllNews3Grid">
        <h1 className="AllNews3GridHead">Latest Events From Tilive</h1>
        <div className="AllNewsContainerGrid">
                        {
                            fileType1 ?
                                <div className="AllNewsContainerGridEach">
                                <Link to={"/moredetail"} state={{docs1}}>
                                        <img className="AllNewsContainerGridEachImg" src={docs1?.linkURl[0]?.stringValue}/>
                                        <div className="AllNewsContainerGridEachDiv">
                                            <div className="AllNewsContainerGridEachDivDes">
                                                <Fade bottom>
                                                    <h2 className="AllNewsContainerGridEachDivDesHead">Description:</h2>
                                                    <br />
                                                    <p className="AllNewsContainerGridEachDivDesP">{doc1finalDes}</p>
                                                </Fade>
                                            </div>
                                        </div>
                                    </Link>
                                </div> 
                            : <div className="AllNewsContainerGridEach">
                            <Link to={"/moredetail"} state={{docs1}}>
                                <video width="350px" height="auto" >
                                    <source src={docs1.linkURl[0]?.stringValue} type="video/mp4"/>
                                </video>
                            </Link>
                                    <div className="AllNewsContainerGridEachDiv">
                                        <div className="AllNewsContainerGridEachDivDes">
                            <Fade bottom>
                                            <h2 className="AllNewsContainerGridEachDivDesHead">Description:</h2>
                                            <br />
                                            <p className="AllNewsContainerGridEachDivDesP">{doc1finalDes}</p>
                            </Fade>
                                        </div>
                                    </div>
                                </div>
                        }
                        
                        {
                            fileType2 ? <Link to={"/moredetail"} state={{docs2}}><div className="AllNewsContainerGridEach">
                                    <img className="AllNewsContainerGridEachImg" alt="Src Img" src={docs2?.linkURl[0]?.stringValue}/>
                                <div className="AllNewsContainerGridEachDiv">
                                    <div className="AllNewsContainerGridEachDivDes">
                        <Fade bottom>
                                        <h2 className="AllNewsContainerGridEachDivDesHead">Description:</h2>
                                        <br />
                                        <p className="AllNewsContainerGridEachDivDesP">{doc2finalDes}</p>
                        </Fade>
                                    </div>
                                </div>
                                    </div> </Link>: <Link to={"/moredetail"} state={{docs2}}><div className="AllNewsContainerGridEach">
                                        <video className="AllNewsContainerGridEachVid" width="350px" height="350px">
                                            <source src={docs2?.linkURl[0]?.stringValue} type="video/mp4"/>
                                        </video>
                                    <div className="AllNewsContainerGridEachDiv">
                                        <div className="AllNewsContainerGridEachDivDes">
                                            <Fade bottom>
                                                <h2 className="AllNewsContainerGridEachDivDesHead">Description:</h2>
                                                <br />
                                                <p className="AllNewsContainerGridEachDivDesP">{doc2finalDes}</p>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        }
                        {
                            fileType3 ? <Link to={"/moredetail"} state={{docs3}}><div className="AllNewsContainerGridEach">
                                    <img className="AllNewsContainerGridEachImg" src={docs3?.linkURl[0]?.stringValue}/>
                                <div className="AllNewsContainerGridEachDiv">
                                    <div className="AllNewsContainerGridEachDivDes">
                        <Fade bottom>
                                        <h2 className="AllNewsContainerGridEachDivDesHead">Description:</h2>
                                        <br />
                                        <p className="AllNewsContainerGridEachDivDesP">{doc3finalDes}</p>
                        </Fade>
                                    </div>
                                </div>
                            </div> </Link>: <Link to={"/moredetail"} state={{docs3}}><div className="AllNewsContainerGridEach">
                                    <video width="350px" height="auto" >
                                        <source src={docs3?.linkURl[0]?.stringValue} type="video/mp4"/>
                                    </video>
                                <div className="AllNewsContainerGridEachDiv">
                                        <div className="AllNewsContainerGridEachDivDes">
                            <Fade bottom>
                                            <h2 className="AllNewsContainerGridEachDivDesHead">Description:</h2>
                                            <br />
                                            <p className="AllNewsContainerGridEachDivDesP">{doc3finalDes}</p>
                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        }
                </div>
                    </div>
    )
}

export default AllNews3Grid;