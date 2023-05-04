import React, { useEffect, useState } from "react";
import "./HomePage.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles
import HomePageComponent from "./HomePageComponent/HomePageComponent";

const HomePage =() => {

    const [position, setPosition] = useState(38); // Initial position is 0
    const moveAmount = 10; // Adjust this value to change the amount of movement

    useEffect(() => {
      function handleScroll() {
        setPosition(window.pageYOffset/30 + 38);
        // setPosition(window.pageYOffset + moveAmount);
        console.log("this is pageOFFset" + window.pageYOffset);
        // console.log(moveAmount);
      }
      
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [position]);

    return(
         <div className="HomePage">
      <Carousel className="HomePageCarousel" autoPlay showIndicators={false} showStatus={false} showArrows={true}>

                <HomePageComponent top={40} firstHead="Marketing and Business" secondHead={"Development Services"} firstP="Grow Your Business Exponentially with our Customized Business Development and Marketing Strategies" secondP="Tilive International LLP offers customized business development and marketing strategies for
  exponential growth in the Automotive and Industrial domain. With strong business networking skills and
  established connections, we tailor solutions to individual needs. Our team builds strong client
  relationships for effective collaboration and communication, ensuring successful outcomes."  imgSrc="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/Ultimae/2023/02_21/aven_ultimae_05.jpg"/>

                <HomePageComponent top={41} firstHead="Sourcing and Supply Chain" secondHead="Management Services" secondP="Drive Seamless Operations and Increased Profitability with Expert Sourcing &amp;
  Supply Chain Management" firstP="Tilive International LLP offers top-notch consultancy services in sourcing and supply chain management,
  helping businesses optimize their operations. Our experts provide customized solutions in supplier
  selection, logistics, compliance, and sustainability. We prioritize collaboration and communication to
  ensure alignment with clients&#39; vision and values." imgSrc="https://themes10.win/wp-content/uploads/2019/04/forest-mystical-fog-trees-night-starry-sky-1-1024x576.jpg" />

                <HomePageComponent top={40} firstHead="Merger &amp; Acquisition" secondHead="Consultancy
Services" firstP="We expertly manage your merger and acquisition process, ensuring a seamless
transition and maximizing value for your business." secondP="Tilive International LLP specializes in providing customized M&amp;A services for the Automotive
components industry. Our technical and commercial due diligence services help identify risks. We
prioritize communication and collaboration to align with clients&#39; vision and values."  imgSrc="https://wallpaperaccess.com/full/4434265.jpg"/>
                
                <HomePageComponent top={48} firstHead="CEO/ CFO Services" secondHead="" firstP="Maximize Your Business Potential with Expert Outsourced CEO and CFO Services
from Tilive International LLP – Featuring Certified Independent Directors!" secondP="Tilive International LLP offers trustworthy outsourced CEO and CFO services on a short-term basis. Our
Certified Independent Directors prioritize integrity and loyalty, collaborating closely with clients to meet
their specific needs and goals."  imgSrc="https://images.squarespace-cdn.com/content/v1/5c16691b3917ee3bfd77e9ad/1545055598627-GE85GGJ5DDHZZZZTZU5W/VanMalleghem_POLICE001.jpg?format=2500w"/>
                
                <HomePageComponent top={50} firstHead="Manufacturing Guild" secondHead="" firstP="Manufacturing Excellence for Rotary Unions, Pole Wheels, Forgings, Tools,
Gauges, and Instruments." secondP="" imgSrc="https://wallpapers.com/images/hd/dark-theme-eerie-forest-eqotskl5ef7i8wod.jpg"/>
                
                <HomePageComponent top={51} firstHead="Automotive and Engineering Parts" secondHead="" firstP="Delivering Excellence: Your Source for World-Class Automotive and Engineering
Parts." secondP="" imgSrc="https://static.vecteezy.com/system/resources/thumbnails/001/624/835/original/abstract-technology-background-free-video.jpg"/>
                
                <HomePageComponent top={51} firstHead="General Trading" secondHead="" firstP="Your Trusted Source for a Comprehensive Range of Quality Products for Your
Unique Requirements" secondP="" imgSrc="https://wallpapers.com/images/hd/dark-theme-background-cml7xusbzkcxz371.jpg"/>
          
          </Carousel>
         </div>
    )
}

export default HomePage;