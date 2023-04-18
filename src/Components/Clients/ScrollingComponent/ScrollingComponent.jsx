import React, { useState, useEffect, useRef } from 'react';
import "./ScrollingComponent.css";
import { Fade } from "react-reveal";

function ScrollingComponent({ handleChange, firstImage, secondImage, thirdImage, firstHead, firstDes, secondHead, secondDes, thirdHead, thirdDes, firstLink, secondLink, thirdLink, heightStartsHere }) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const ref = useRef(null);
  
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);

  const [scrollHeight, setScrollHeight] = useState(60);

  useEffect(() => {    
    const handleScroll = () =>  {

      var secondHeight = heightStartsHere + 450;
      var thirdHeight = secondHeight + 550;
            
      
      if(window.scrollY > heightStartsHere){
        var heightHere = window.scrollY - heightStartsHere;
        setIsScrolled(true);
        setImage1(true);

        setScrollHeight(66 -heightHere/11)
        console.log(70 -heightHere/11);
      }else{
        setIsScrolled(false);
        setImage1(false);
      }

      
      if(window.scrollY > secondHeight){
        var heightHere = window.scrollY - secondHeight;
        setImage2(true);
        setScrollHeight(66 -heightHere/11)
        console.log(70 -heightHere/11);
      }else{
        setImage2(false);
      }
      
      if(window.scrollY > thirdHeight){
        var heightHere = window.scrollY - thirdHeight;
        setImage3(true);
        setScrollHeight(70 -heightHere/11)
        console.log(70 -heightHere/11);
      }else{
        setImage3(false);
      }
    }

    window.addEventListener('scroll', () => {

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

  }, [heightStartsHere]);

  return (
    <div className='ScrollingComponent' ref={ref}>
      <div className='ScrollingComponentImg' style={{position: isScrolled? 'fixed': 'relative'}}>
        {
          image3 ? <div className='CalledIn'><Fade bottom><img src={thirdImage} alt='gonnabeFixed'/><Fade><div className='ScrollingComponentDes' style={{top: `${scrollHeight}vh`}}>
            <h1 className='ScrollingComponentDesHead'>{thirdHead}</h1>
            <br />
            <p className='ScrollingComponentDesP'>{thirdDes} </p>
            <br/>
            <div className='ScrollingComponentViewInDetail'><button>View In Detail</button></div>
          </div></Fade></Fade></div> : image2? <div className='CalledIn'><Fade><img src={secondImage} alt='gonnabeFixed'/><div className='ScrollingComponentDes' style={{top: `${scrollHeight}vh`}}>
            <h1 className='ScrollingComponentDesHead'>{secondHead}</h1>
            <br />
            <p className='ScrollingComponentDesP'>{secondDes}</p>
            <br/>
            <div className='ScrollingComponentViewInDetail'><button>View In Detail</button></div>
          </div></Fade></div>: image1? <div className='CalledIn'><img src={firstImage} alt='gonnabeFixed'/><Fade><div className='ScrollingComponentDes' style={{top: `${scrollHeight}vh`}}>
            <h1 className='ScrollingComponentDesHead'>{firstHead}</h1>
            <br />
            <p className='ScrollingComponentDesP'>{firstDes}</p>
            <br/>
            <div className='ScrollingComponentViewInDetail'><button>View In Detail</button></div>
          </div></Fade></div>: <img src={firstImage} alt='gonnabeFixed'/>
        }
      </div>
    </div>
  );
}

export default ScrollingComponent;