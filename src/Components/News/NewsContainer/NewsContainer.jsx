import { Query, QueryOrderByConstraint, collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { Link, Params } from 'react-router-dom';
import { firebasee } from '../../../firebase';
import 'firebase/firestore';
import { Fade } from "react-reveal";

const NewsContainer = () => {

    const [docs, setDocs] = useState([]);

        const handleClick = async () => {

            const query1 = await collection(firebasee, "tilive_data");

            const bb = await query(query1, orderBy('timeStamp', 'desc'));

            const aa = await getDocs(bb); 

            setDocs(aa.docs);
            console.log(aa.docs);
        }

        useEffect(() => {
            handleClick();
        }, []);

    return(
        <div className='NewsContainer'>
        
            {
                docs.slice(1, docs.length > 6? 7: docs.length).map((item, i) => {

                    const data = item._document?.data?.value?.mapValue?.fields;

                    const options = { year: "numeric", month: "long", day: "numeric"}
                    const finalONe1 =  new Date(data?.timeStamp?.timestampValue).toLocaleDateString(undefined, options)


                    const eventCaption = data?.eventCaption;
                    const eventDescription = data?.eventDescription;
                    const eventName = data?.eventName;
                    const linkURl = data?.fileLink?.arrayValue?.values;
                    
                
                    const stateChange = {
                        eventCaption: eventCaption,
                        eventDescription: eventDescription,
                        eventName: eventName,
                        linkURl: linkURl,
                        timestamp: finalONe1
                    }

                    var des = "";

                    des = data?.eventDescription?.stringValue;

                    if (des.length > 650) {
                        des = des.slice(0, 650) + "...";
                    } 

                    var itemNow = `${linkURl[0]?.stringValue}`;

                    console.log(itemNow);
                    const currentType = itemNow.slice(itemNow.lastIndexOf(".") +1, itemNow.lastIndexOf(".") + 4);
                                

                    var typeImg = true;

                    if(currentType == "mp4"){
                        typeImg = false;
                    }
                    

                    return(
                        <Fade bottom>
                        {
                                    i == 5? <Link to={`/allnews`} state={{stateChange}}>
                            <div className='container' key={i}> 
                                <div className='containerimgdiv' style={{textAlign: 'center'}}>
                                    <h1 className="containerImgdivHead1"> &gt; </h1>
                                    <br />
                                    <h3 className="containerImgdivHead3">For More Latest News</h3>
                                </div>

                            <div className="news">

                            </div>
                        </div>
                        </Link>:<Link to={`/moredetail`} state={{stateChange}}>
                            <div className='container' key={i}> 
                            <div className='imgdiv'>
                            {
                                typeImg?
                                <img className="xyz" src={linkURl?.[0]?.stringValue} alt="Factory Image"/>: <video className="xyz">
                                        <source src={linkURl?.[0]?.stringValue} type="video/mp4"/>
                                    </video>
                            }
                            </div>

                            <div className="news">
                                <div className='newsDescription'>
                                <Fade bottom>
                                    <h3 className="newsDescriptionHead">Description</h3>
                                    <p className="newsDescriptionP">{des}</p>
                                </Fade>
                                </div>
                                
                            </div>
                            </div>
                        </Link>
                        }
                        
                        </Fade>
                    )
                })
            }
                </div>
    )
}


export default NewsContainer;