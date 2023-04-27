import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import './StartingPage.css';
import { Link } from 'react-router-dom';

export const StartingPage = ({ want }) => {

   const [lastScrollTop, setLastScrollTop] = useState(0);
   const [scrollDirection, setScrollDirection] = useState("down");

   // const handleScroll = () => {
   //    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
   //    if (currentScrollTop > lastScrollTop) {
   //       header.classList.remove("startingPageContainerdummy");
   //    } else {
   //       header.classList.add("startingPageContainerdummy");
   //    }
   //    setLastScrollTop(currentScrollTop);
   // };

   // useEffect(() => {
   //    if (want) {
   //       window.addEventListener("scroll", () => {
   //          var header = document.querySelector(".startingPageContainer");
   //          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
   //          if (window.pageYOffset > 100) {
   //             setScrollDirection("down");
   //             header.classList.remove("startingPageContainerdummy");
   //             header.classList.add("startingPageContainerdummy");
   //          } else {
   //             setScrollDirection("up");
   //             header.classList.add("startingPageContainerdummy");
   //             header.classList.remove("startingPageContainerdummy");
   //          }
   //          setLastScrollTop(currentScrollTop);
   //       });
   //    }
   // }, [])

      // if (window.pageYOffset < 100) {
      //   header.classList.add("startingPageContainerdummy");
      // } else if(window.pageYOffset > 0) {
      //   header.classList.remove("startingPageContainerdummy");
      // }

      // window.addEventListener("scroll", function() {
      //    var header = document.querySelector(".startingPageContainer");
      //    if (window.pageYOffset < 100) {
      //      header.classList.add("startingPageContainerdummy");
      //    } else {
      //      header.classList.remove("startingPageContainerdummy");
      //    }
      //  });
      // window.addEventListener("scroll", function() {
      //    var header = document.querySelector(".startingPageContainer");
      //    if (window.pageYOffset > 0) {
      //      header.classList.add("scrolling");
      //    } else {
      //      header.classList.remove("scrolling");
      //    }
      //  });

   const [stylee, setStyle] = useState(false);

    const handleClick = () => {
        setStyle(!stylee);
    }

   return (
    <div className="startingPageContainer">
    <div className="HomeNav" style={{opacity: stylee? "1": "0", zIndex: stylee? "1000": "0", height: stylee? "100vh": "0vh", width: stylee? "100%": "0%",}}>
            <h1 className="HomeNavClose" onClick={() => handleClick()}>X</h1>
            <div className="HomeNavNav">
                <div>
                    <Link to={"/aboutus"}><p>About Us</p></Link>
                </div>
                <div>
                    <Link to={"/productsservices"}><p>Products & Services</p></Link>
                </div>
                <div>
                    <Link to={"buyonline"}><p>Buy Online</p></Link>
                </div>
                <div>
                    <Link to={"clients"}><p>Clients</p></Link>
                </div>
                <div>
                    <Link to={"/news"}><p>News</p></Link>
                </div>
                <div>
                    <Link to={"/careers"}><p>Careers</p></Link>
                </div>
                <div>
                    <Link to={"contactus"}><p>Contact Us</p></Link>
                </div>
            </div>
        </div>

         <Link to={"/contactus"}><button id="float_contact">CONTACT US</button></Link>
            <div className='start'>
            <Link to={"/"}>
               <button id="floating_btn" style={{outline: "none", background: 'transparent', border: 'none', cursor: '-moz-initial'}}><img id="startlogo" style={{borderRadius: '50px'}} src="https://t3.ftcdn.net/jpg/02/05/46/30/360_F_205463037_cXsFsDC65v6ZlZlqoDYabosy0sZnwReO.jpg" alt="ehh"></img></button>
            </Link>
          {
            want? <>
            <div className="navLine">
               <p className="gTHem" onClick={() => handleClick()}>
                  ===
               </p>
            </div>
            <div className="gg">
         <Link to="/contactus">
            <button type='button' className='startingPageContact startingButton'>Contact Us</button>
         </Link>
         <Link to="/careers">
            <button type='button' className='startingPageCareers startingButton'>Careers</button>
         </Link>
         <Link to="/news">
            <button type='button' className='startingPageNews startingButton'>News</button>
         </Link>
         <Link to="/clients">
            <button type='button' className='startingPageClients startingButton'>Clients</button>
         </Link>
         <Link to="/buyonline">
            <button type='button' className='startingPageBuy startingButton'>Buy Online</button>
         </Link>

         <Link to="/productsservices"><button type='button' className='startingPageNews startingButton'>
         <div class="dropdown">
            <button class="dropbtn">Products & Services</button>
            <div class="dropdown-content">
               <div class="sub-dropdown">
                  <button class="sub-dropbtn">Cars</button>
                  <div class="sub-dropdown-content">
                     <button className="insubdropbtn">Gears</button>
                     <button className="insubdropbtn">Tires</button>
                     <button className="insubdropbtn">Brakes</button>
                     <button className="insubdropbtn">Fuel-tanks</button>
                     <button className="insubdropbtn">Spares</button>
                  </div>
               </div>
            <div class="sub-dropdown">
               <button class="sub-dropbtn">Strawhats</button>
               <div class="sub-dropdown-content">
               <button className="insubdropbtn">Monkey D Luffy</button>
               <button className="insubdropbtn">Roronoa Zoro</button>
               <button className="insubdropbtn">Vinsmoke Sanji</button>
               <button className="insubdropbtn">Usopp</button>
               </div>
            </div>
            <div class="sub-dropdown">
               <button class="sub-dropbtn">Red-Hair</button>
               <div class="sub-dropdown-content">
               <button className="insubdropbtn">Red-Hair Shanks</button>
               <button className="insubdropbtn">Benn Beckman</button>
               <button className="insubdropbtn">Yasopp</button>
               <button className="insubdropbtn">Lucky Roo</button>
               </div>
            </div>
            <div class="sub-dropdown">
               <button class="sub-dropbtn">Whitebeard</button>
               <div class="sub-dropdown-content">
               <button className="insubdropbtn">Edward Newgate</button>
               <button className="insubdropbtn">Marco</button>
               <button className="insubdropbtn">Portagaz D Ace</button>
               <button className="insubdropbtn">Kozuki Oden</button>
               </div>
            </div>
            <div class="sub-dropdown">
               <button class="sub-dropbtn">Cross-Guild</button>
               <div class="sub-dropdown-content">
               <button className="insubdropbtn">Buggy D Clown</button>
               <button className="insubdropbtn">Dracule Mihawk</button>
               <button className="insubdropbtn">Sir Crocodile</button>
               <button className="insubdropbtn">Doflamingo</button>
               </div>
            </div>
  </div>
</div>
</button>
         </Link>

        
         <Link to="/aboutus">
            <button type='button' className='startingPageAbout startingButton'>About Us</button>
         </Link>
         <Link to="/newsform">
            <button type='button' className='startingPageAbout startingButton'>Administrator</button>
         </Link>
         </div>
         </>: null
          }
     </div>
    </div>
   )
}