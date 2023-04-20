import React from "react";
import { createBrowserHistory } from "history";
import './StartingPage.css';
import { Link, his } from 'react-router-dom';

export const StartingPage = ({ want }) => {

   return (
    <div className="startingPageContainer">
     <div className = 'start'>
         <Link to={"/"}>
            <button id="floating_btn"style={{outline: "none", background: 'transparent', border: 'none', cursor: '-moz-initial'}}><img id="startlogo" style={{borderRadius: '50px'}} width="100px" height="100px" src="https://t3.ftcdn.net/jpg/02/05/46/30/360_F_205463037_cXsFsDC65v6ZlZlqoDYabosy0sZnwReO.jpg" alt="ehh"></img></button>
         </Link>
         <Link to={"/contactus"}><button id="float_contact">Contact us</button></Link>
          {
            want? <>
            
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
         
         </>: null
          }
     </div>
    </div>
   )
}