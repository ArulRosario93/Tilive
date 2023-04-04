import React, { useState } from 'react';
import EnLargeNews from './EnlargeNews/EnlargeNews';
import "./News.css";
import { Carousel } from 'react-responsive-carousel';
import gg from "./gg.mp4";

import { firebasee } from '../../firebase';

import { Firestore, collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import { Link, Params } from 'react-router-dom';

// import firebase from "firebase";

const newsItems = [
    {
        eventname: "Factory Opening",
        shortDes: "Learn, invent and transform the sky!",
        date: "27/03",
        desciption: "The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl...",
        image: ["https://media.istockphoto.com/id/1352825077/photo/female-automotive-engineer-wearing-hard-hat-standing-using-laptop-monitoring-control.jpg?b=1&s=170667a&w=0&k=20&c=9AIv5qGnwd4H6_7I7zdg3o89X-yPBg1GEvtyT9mbusc=", "https://media.istockphoto.com/id/528068934/photo/on-line-orders-in-futuristic-factory.jpg?s=170667a&w=0&k=20&c=4iS3w5uiMAZhLRX4cyb0GwlP783K86YrmrrQ9H2zz3o="],
    },
    {
        eventname: "Integrated Work",
        shortDes: "Invent, learn and transform the sky!",
        date: "16/03",
        desciption: "The Facebook pixel is a piece of code you place on the backend of your website to track visitors to your site. The pixel allows you to run highly targeted campaigns, so it's important to install it before running Facebook ads. Each ad account gets one default pixel to use.. oqehipikni heou oih ....",
        image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyUzXAzB3a7bU746WwfjCCSqawrzhy_icYFyruuYlJq8_M5B4Jy2ygqLEMpsFTlgh5kw&usqp=CAU", "https://www.cepal.org/sites/default/files/styles/1280x720/public/images/featured/18_0.jpg?itok=oMj4aiLW"],
    },
]

const News = () => {

    const [docs, setDocs] = useState([]);

    const [desContent, setDesContent] = useState("");
        
        const handleClick = async () => {
            const aa  = await getDocs(collection(firebasee, "tilive_data"));
            setDocs(aa.docs);
            console.log(aa.docs);
        }

        useEffect(() => {
            handleClick();
        }, []);

    return (
        <div className='News'>
            <h1 className='NewsHeading'>
                News
            </h1>

            <br />
            
            <div className='NewsContainer'>

            {
                docs.map((item, i) => {

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

                    return(
                        <Link to={`event`} state={{stateChange}}>

                        <div className='container' key={i}> 

                                <div className='imgdiv'>
                                    <img className="xyz" src={linkURl?.[0]?.stringValue} alt="Factory Image"/>
                                </div>
                                
                                <div className="news">
                                    <div className='newsDescription'>
                                        <h3 className="newsDescriptionHead">Description</h3>
                                        <p className="newsDescriptionP">{des}</p>
                                    </div>
                                    
                                </div>

                                <div className='containerBottom'>
                                    <h1>_</h1>
                                </div>
                        </div>
                        </Link>
                    )
                })
            }
                </div>
        </div> 
    )
}


export default News;