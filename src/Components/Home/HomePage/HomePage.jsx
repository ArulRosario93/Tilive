import React, { useEffect, useState } from "react";
import "./HomePage.css";

import Automotiveindustry from "./Automotiveindustry.jpg";
import Generaltrading from "./Generaltrading.jpg";
import Manufacturingguild from "./Manufacturingguild.jpg";
import MergerAndAcquisition from "./MergerAndAcquisition.jpg";
import CEOCFOServicesFound from "./CEO/CFOServices.jpg";
import MarketingPage2 from "./MarketingPage2.jpg";
import scm from "./SCM.jpg";


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomePageComponent from "./HomePageComponent/HomePageComponent";

const HomePage =() => {

    const [position, setPosition] = useState(38); // Initial position is 0
    var moveAmount = false; // Adjust this value to change the amount of movement

    const MarketingBusiness = {
      Fhead: "Marketing and Business Development Services",
      SHead: "",
      firstPara: "Grow Your Business Exponentially with our Customized Business Development and Marketing Strategies.",
      SecondPara: "Tilive International LLP offers customized business development and marketing strategies for exponential growth in the Automotive and Industrial domain. With strong business networking skills and established connections, we tailor solutions to individual needs. Our team builds strong client relationships for effective collaboration and communication, ensuring successful outcomes.",
      Desc: ["Looking to expand your business in the Automotive or Industrial domain? Look no further than Tilive International LLP. Our customized business development and marketing strategies are tailored to help you grow your business exponentially.", "With years of experience in the industry, we understand the unique challenges faced by businesses in the Automotive and Industrial sectors. Our team of experts will work closely with you to understand your business goals, target audience, and competition, to develop a custom strategy that meets your specific needs.", "Our range of services includes market research, brand development, product launch planning, digital marketing, and sales strategy development. We use a data-driven approach to analyze market trends, consumer behavior, and competitor activity, to ensure that our strategies are effective and results - driven.", "Whether you're a small start-up or an established company, we have the expertise to help you succeed. Our team is committed to delivering outstanding results and providing exceptional customer service, ensuring that you get the support you need to achieve your business goals.", "So why wait? Contact Tilive International LLP today and let us help you grow your business exponentially in the Automotive and Industrial domains."],
   }

   const SourcingSupplyChain = {
      Fhead: "Sourcing and Supply Chain Management Services",
      SHead: "",
      firstPara: "Drive Seamless Operations and Increased Profitability with Expert Sourcing &amp; Supply Chain Management",
      SecondPara: "Tilive International LLP offers top-notch consultancy services in sourcing and supply chain management, helping businesses optimize their operations. Our experts provide customized solutions in supplier selection, logistics, compliance, and sustainability. We prioritize collaboration and communication to ensure alignment with clients' vision and values.",
      Desc: ["At Tilive International LLP, we are committed to providing top-notch consultancy services in the domain of sourcing and supply chain management. Our team of experts has extensive experience in the industry and is well-equipped to help businesses optimize their sourcing and supply chain operations.", "We understand that managing sourcing and supply chain operations can be complex and time - consuming, and we strive to simplify the process for our clients. We work closely with businesses to identify areas of improvement and develop customized solutions to meet their specific needs and goals.", "Our consultancy services include everything from supplier selection and negotiation to inventory management and logistics optimization. We also provide guidance on risk management, compliance, and sustainability, ensuring that our clients&#39; sourcing and supply chain operations are both efficient and responsible.", "At Tilive International LLP, we believe that collaboration and communication are key to success, and we work closely with our clients to ensure that our consultancy services are aligned with their vision and values. Our team is always available to answer questions, provide guidance, and offer support whenever needed.", "So if you're looking to optimize your sourcing and supply chain operations, partner with Tilive International LLP today. With our top-notch consultancy services, you can rest assured that you're in good hands. Contact us today to learn more about how we can help you achieve your business goals."],
   }

   const MergerAcquisition = {
      Fhead: "Merger & Acquisition Consultancy Services",
      SHead: "",
      firstPara: "We expertly manage your merger and acquisition process, ensuring a seamless transition and maximizing value for your business.",
      SecondPara: "Tilive International LLP specializes in providing customized M&amp;A services for the Automotive components industry. Our technical and commercial due diligence services help identify risks. We prioritize communication and collaboration to align with clients&#39; vision and values.",
      Desc: ["At Tilive International LLP, we specialize in providing top-notch Merger and Acquisition (M&A) services for businesses operating in the Automotive components industry. Our team of experts has extensive experience in the field and is dedicated to helping clients achieve their M&A goals.", "We offer a range of M&A services, including market analysis, target identification, deal structuring, negotiations, and post-merger integration. Our focus is on providing customized solutions that are tailored to our clients' specific needs and goals.", "In addition to our M&A services, we also offer technical and commercial due diligence services as a subset of the M&A process. Our team of experts conducts in-depth assessments of potential acquisition targets, identifying any potential risks or challenges that could impact the success of the deal.", "At Tilive International LLP, we believe that effective communication and collaboration are key to success, and we work closely with our clients to ensure that our M&amp;A services align with their vision and values. Our team is always available to answer questions, provide guidance, and offer support whenever needed.", "So if you&#39;re looking to achieve your M&amp;A goals in the Automotive components industry, partner with Tilive International LLP today. With our top-notch services, including technical and commercial due diligence, you can rest assured that you&#39;re in good hands. Contact us today to learn more about how we can help you achieve your business goals."],
   }

   const CEOCFOServices = {
      Fhead: "CEO/ CFO Services",
      SHead: "",
      firstPara: "Maximize Your Business Potential with Expert Outsourced CEO and CFO Services from Tilive International LLP – Featuring Certified Independent Directors!",
      SecondPara: "Tilive International LLP offers trustworthy outsourced CEO and CFO services on a short-term basis. Our Certified Independent Directors prioritize integrity and loyalty, collaborating closely with clients to meet their specific needs and goals.",
      Desc: ["Tilive International LLP offers top-notch outsourced CEO and CFO services on a short-term basis. Our leadership team includes Certified Independent Directors, ensuring that our clients receive expert guidance and support.", "We understand that managing leadership positions can be challenging and time-consuming, and we strive to simplify the process for our clients. Our team of experts has extensive experience in the industry and is well-equipped to help businesses optimize their operations and achieve their goals.", "At Tilive International LLP, we believe that collaboration and communication are key to success, and we work closely with our clients to ensure that our outsourced services align with their vision and values. Our team is always available to answer questions, provide guidance, and offer support whenever needed.", "So if you're looking for expert CEO and CFO services on a short-term basis, partner with Tilive International LLP today. With our top-notch outsourced services and Certified Independent Directors on our team, you can rest assured that you&#39;re in good hands. Contact us today to learn more about how we can help you achieve your business goals."],
   }
  
   const ManufacturingGuild = {
      Fhead: "Manufacturing Partnerships",
      SHead: "",
      firstPara: "We take pride in delivering exceptional products to our customers. To ensure the highest quality standards, we have established partnerships with manufacturing companies that are renowned for their meticulous processes and skilled workforce.",
      SecondPara: "Our Products include Rotary Unions, Pole Wheels, Forgings, Tools, Gauges & Instruments.",
      Desc: ["Our selection process for manufacturing partners involves thorough assessments of their operational efficiency, quality control measures, and commitment to delivering superior products. We partner with companies that share our dedication to excellence and possess a track record of producing world-class goods.", "By collaborating with these highly process-oriented manufacturing firms, we leverage their expertise and capabilities to bring our customers the finest products available in the market. The meticulous attention to detail and stringent quality checks employed by our partners guarantee that every item meets or exceeds our customers&#39; expectations.", "Moreover, our commitment to providing competitive prices sets us apart in the industry. Through our strong relationships with our manufacturing partners, we are able to negotiate favorable terms and optimize production costs without compromising on quality. This enables us to offer our customers exceptional products at prices that are both reasonable and competitive.", "Our customers can trust that each product they purchase from us has undergone a rigorous manufacturing process, ensuring its reliability, durability, and overall excellence. We continuously strive to enhance our partnerships with manufacturing companies, seeking out new collaborations to expand our product range and meet evolving customer needs.", "In summary, our success lies in our strategic partnerships with highly process-oriented, skilled, and quality manufacturing companies. Together, we deliver world-class products that surpass customer expectations while maintaining competitive prices."],
   }
   
   const AutomotiveEngineeringParts = {
      Fhead: "Automotive and Engineering Parts",
      SHead: "",
      firstPara: "Delivering Excellence: Your Source for World-Class Automotive and Engineering Parts.",
      SecondPara: "We specialize in supplying automotive and engineering parts for both aftermarket and original equipment (OE) applications. Our extensive range of products caters to the diverse needs of our customers in the automotive and engineering industries.",
      Desc: ["For the aftermarket sector, we provide high-quality replacement parts that meet or exceed OEM specifications. Our products undergo rigorous testing to ensure their performance, reliability, and compatibility with various vehicle models. We understand the importance of delivering parts that offer durability and value for money to customers seeking affordable alternatives.", "In addition to the aftermarket, we also supply OE parts for manufacturers and assembly plants. Our OE parts meet the stringent standards set by original equipment manufacturers, ensuring seamless integration and optimal performance within their systems. We work closely with OE manufacturers to understand their specific requirements and deliver parts that meet their exact specifications.", "With our extensive network of trusted suppliers and manufacturers, we are able to offer a comprehensive range of automotive and engineering parts to meet the diverse needs of our customers. Our commitment to quality, competitive pricing, and exceptional customer service sets us apart in the industry.", "Whether our customers require aftermarket or OE parts, they can rely on us to deliver reliable and high- performance products that meet their specific requirements. We continually strive to expand our product offerings and stay up to date with the latest advancements in the automotive and engineering sectors to better serve our customers."],
   }
   
   const GeneralTrading = {
      Fhead: "General Trading",
      SHead: "",
      firstPara: "Your Trusted Source for a Comprehensive Range of Quality Products for Your Unique Requirements",
      SecondPara: "We are a trusted provider of parts / products catering to a wide range of household and industrial applications. Our comprehensive selection of parts enables us to meet the diverse needs of our customers in various sectors, including house hold, automotive, manufacturing, construction, and more.",
      Desc: ["As a supplier of general trading parts, we understand the importance of offering high-quality products that meet global standards. We source our parts from reliable manufacturers and suppliers, ensuring that each item meets stringent quality control criteria. This allows us to deliver parts that are reliable, durable, and perform optimally in their intended applications.", "We strive to stay updated with the latest advancements and market trends, allowing us to provide cutting-edge solutions to our customers.", "With our commitment to customer satisfaction, we not only offer a wide variety of parts but also provide exceptional customer service. Our knowledgeable team is ready to assist customers in finding the right products for their specific requirements, offering support and guidance throughout the process.", "We are dedicated to delivering reliable products at competitive pricing, and excellent customer service to ensure utmost customer satisfaction."],
   }

   if (window.screen.width <= 425) {
      moveAmount = true
   }

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
      <Carousel swipeable={false} transitionTime={600} autoPlay animation={"Fade"} stopOnHover={false} infiniteLoop interval={7000} autoFocus showStatus={false} className="HomePageCarousel" showIndicators={false} showArrows={true}>

                <HomePageComponent top={moveAmount? 35: 40} state={MarketingBusiness} link="MarketingBusiness" firstHead="Marketing and Business" secondHead={"Development Services"} firstP="Grow Your Business Exponentially with our Customized Business Development and Marketing Strategies" secondP="Tilive International LLP offers customized business development and marketing strategies for
  exponential growth in the Automotive and Industrial domain. With strong business networking skills and
  established connections, we tailor solutions to individual needs. Our team builds strong client
  relationships for effective collaboration and communication, ensuring successful outcomes."  imgSrc={MarketingPage2} />

                <HomePageComponent top={moveAmount? 36: 41} state={SourcingSupplyChain} link="Sourcing&SupplyChain" firstHead="Sourcing and Supply Chain" secondHead="Management Services" firstP="Drive Seamless Operations and Increased Profitability with Expert Sourcing &amp;
  Supply Chain Management" secondP="Tilive International LLP offers top-notch consultancy services in sourcing and supply chain management,
  helping businesses optimize their operations. Our experts provide customized solutions in supplier
  selection, logistics, compliance, and sustainability. We prioritize collaboration and communication to
  ensure alignment with clients&#39; vision and values." imgSrc={scm} />

                <HomePageComponent top={moveAmount? 35: 40} state={MergerAcquisition} link="Merger&Acquisition" firstHead="Merger &amp; Acquisition" secondHead="Consultancy
Services" firstP="We expertly manage your merger and acquisition process, ensuring a seamless
transition and maximizing value for your business." secondP="Tilive International LLP specializes in providing customized M&amp;A services for the Automotive
components industry. Our technical and commercial due diligence services help identify risks. We
prioritize communication and collaboration to align with clients&#39; vision and values."  imgSrc={MergerAndAcquisition}/>
                
                <HomePageComponent top={moveAmount? 43: 48} state={CEOCFOServices} link="CEOServices" firstHead="CEO/ CFO Services" secondHead="" firstP="Maximize Your Business Potential with Expert Outsourced CEO and CFO Services
from Tilive International LLP – Featuring Certified Independent Directors!" secondP="Tilive International LLP offers trustworthy outsourced CEO and CFO services on a short-term basis. Our
Certified Independent Directors prioritize integrity and loyalty, collaborating closely with clients to meet
their specific needs and goals."  imgSrc={CEOCFOServicesFound}/>
                
                <HomePageComponent top={moveAmount? 45: 50} state={ManufacturingGuild} link="ManufacturingGuild" firstHead="Manufacturing Guild" secondHead="" firstP="Manufacturing Excellence for Rotary Unions, Pole Wheels, Forgings, Tools,
Gauges, and Instruments." secondP="" imgSrc={Manufacturingguild}/>
                
                <HomePageComponent top={moveAmount? 46: 51} state={AutomotiveEngineeringParts} link="Automotive&EngineeringParts" firstHead="Automotive and Engineering Parts" secondHead="" firstP="Delivering Excellence: Your Source for World-Class Automotive and Engineering
Parts." secondP="We specialize in supplying automotive and engineering parts for both aftermarket and original
equipment (OE) applications. Our extensive range of products caters to the diverse needs of our
customers in the automotive and engineering industries." imgSrc={Automotiveindustry}/>
                
                <HomePageComponent top={moveAmount? 46: 51} state={GeneralTrading} link="GeneralTrading" firstHead="General Trading" secondHead="" firstP="Your Trusted Source for a Comprehensive Range of Quality Products for Your
Unique Requirements" secondP="We are a trusted provider of parts / products catering to a wide range of household and industrial
applications. Our comprehensive selection of parts enables us to meet the diverse needs of our
customers in various sectors, including house hold, automotive, manufacturing, construction, and more." imgSrc={Generaltrading}/>
          
          </Carousel>
            {/* {
              moveAmount? <div className="downScroll"><a href="#SubComponents">Go Down</a></div>: ""
            } */}
         </div>
    )
}

export default HomePage;