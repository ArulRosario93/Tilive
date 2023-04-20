import { QueryOrderByConstraint, collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { Link, Params } from 'react-router-dom';
import { firebasee } from '../../../firebase';
import { Fade } from "react-reveal";

const NewsContainer = () => {

    const [docs, setDocs] = useState([]);
        
        const handleClick = async () => {
            const aa  = await getDocs(collection(firebasee, "tilive_data"));
            setDocs(aa.docs);
            console.log(aa.docs);
        }

        useEffect(() => {
            handleClick();
        }, []);

    return(
        <div className='NewsContainer'>

            {
                docs.slice(0, docs.length > 5? 6: docs.length).map((item, i) => {

                    const data = item._document?.data?.value?.mapValue?.fields;

                    const eventCaption = data?.eventCaption;
                    const eventDescription = data?.eventDescription;
                    const eventName = data?.eventName;
                    const linkURl = data?.fileLink?.arrayValue?.values;
                
                
                    const stateChange = {
                        eventCaption: eventCaption,
                        eventDescription: eventDescription,
                        eventName: eventName,
                        linkURl: linkURl,
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
                                <img className="xyz" src={linkURl?.[0]?.stringValue} alt="Factory Image"/>: <video className="xyz" width="100%" height="auto">
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