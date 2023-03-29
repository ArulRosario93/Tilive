import React from 'react';
import EnLargeNews from './EnlargeNews/EnlargeNews';
import "./News.css";

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
    return (
        <div className='News'>
            {/* <h1 className='NewsHeading'>
                News
            </h1> */}

           <div className='container'> 
            <img className="xyz" src="https://images.sw.cdn.siemens.com/siemens-disw-assets/public/
            3sjyywgMdKCHepAuf1rhP6/en-US/tecnomatix-factory-line-design-shero-2560x1440.jpg?auto=f
            ormat,compress&w=1920&q=60"/>
                
                <div className="news">
                    <div className="text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            </div>
           </div>

           {/* //src={newsItems[0].image} */}

        </div>
    )
}

export default News;