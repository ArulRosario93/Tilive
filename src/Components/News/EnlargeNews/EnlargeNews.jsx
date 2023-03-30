import React from "react";
import "./EnlargeNews.css";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";

const EnLargeNews = () => {
    return(
        <div className="EnLargeNews">
            <div className="EnLargeNewsImage">

            <Link to="/aboutus">
                <Carousel autoPlay={true} showArrows={false} showIndicators={false} showStatus={false} className="carousel" infiniteLoop={true}>
                            <div style={{background: "red", height: '100vh'}}>
                                <img style={{objectFit: 'cover'}} src="https://media.istockphoto.com/id/846859964/photo/robots-welding-in-a-car-factory.jpg?s=612x612&w=0&k=20&c=YLDHM61cwwC7xPnzP8nlBEbmJLB1sqgMr9W6B1m2WBk=" />
                            </div>
                            <div style={{background: "blue", height: '100vh'}}>
                                <img style={{objectFit: 'cover'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seagate_Wuxi_China_Factory_Tour.jpg/1365px-Seagate_Wuxi_China_Factory_Tour.jpg" />
                            </div>
                            <div style={{background: "green", height: '100vh'}}>
                                <img style={{objectFit: 'cover'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ641sbZf92TD3WVT19uKU8LWd4iobgO1Cf43nWBqgtR08mfedm6tTXxhWwjP-Ma7loY&usqp=CAU" />
                            </div>
                </Carousel>
            </Link>
            </div>
            <div></div>
            <div className="EnLargeNewsDescrip">
                <div className="EnLargeNewsHeader">
                    <div className="EnLargeNewsHeadingwithshortDes">
                        <h1 className="EnLargeNewsHeadingwithshortDesHead">Factory Opening</h1>
                        <p className="EnLargeNewsHeadingwithshortDesDes">Learn, invent and transform the sky!</p>
                    </div>
                    <div className="EnLargeNewsHeadingwithDate">27/03</div>
                </div>

                <div className="EnLargeNewsBody">
                    <h2 className="EnLargeNewsBodyHead">Description</h2>
                    <p className="EnLargeNewsBodyDes">The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl....

The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl....The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron.

The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl...The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl...</p>
                    <p className="EnLargeNewsBodyDes">The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl....

The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl....The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron.

The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl...The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl...</p>
                    <p className="EnLargeNewsBodyDes">The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl....

The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl....The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron.

The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl...The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai. The talks for opening a second Pegatron facility on lease is currently underway and it will be situated inside Mahindra World City near Chennai and tl...</p>
                </div>
            </div>

        </div>
    )
}

export default EnLargeNews;