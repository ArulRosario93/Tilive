import React from "react";
import './StartingPage.css';
import { Link } from 'react-router-dom';

export const StartingPage = () => {
   return (
    <div className="startingPageContainer">
     <div className = 'start'>
         <img id="startlogo"src="https://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png" alt="ehh"></img>
          
         <Link to="/contactus">
            <button type='button' className='startingPageAbout startingButton'>About Us</button>
         </Link>

         <Link to="/">
            <button type='button' className='startingPageBuy startingButton'>Buy Online</button>
         </Link>

         <Link to="careers">
            <button type='button' className='startingPageCareers startingButton'>Careers</button>
         </Link>

         <Link to="clients">
            <button type='button' className='startingPageClients startingButton'>Clients</button>
         </Link>

         <Link to="contactus">
            <button type='button' className='startingPageContact startingButton'>Contact Us</button>
         </Link>

         <Link to="news">
            <button type='button' className='startingPageNews startingButton'>News</button>
         </Link>

         <Link to="products&services">
            <button type='button' className='startingPageProd startingButton'>Products & Services</button>
         </Link>
     </div>
    </div>
   )
}