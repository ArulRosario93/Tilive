import React from "react";
import './StartingPage.css';
import { Link } from 'react-router-dom';

export const StartingPage = () => {
   return (
    <div className="startingPageContainer">
     <div className = 'start'>
          <img id="startlogo"src="https://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png" alt="ehh"></img>
          <button type='button' component={Link} to="/contactus" className='startingPageAbout startingButton'>About Us</button>
          <button type='button' className='startingPageBuy startingButton'>Buy Online</button>
          <button type='button' className='startingPageCareers startingButton'>Careers</button>
          <button type='button' className='startingPageClients startingButton'>Clients</button>
          <button type='button' className='startingPageContact startingButton'>Contact Us</button>
          <button type='button' className='startingPageNews startingButton'>News</button>
          <button type='button' className='startingPageProd startingButton'>Products & Services</button>
     </div>
    </div>
   )
}