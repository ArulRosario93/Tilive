import React from "react";
import { createBrowserHistory } from "history";
import './StartingPage.css';
import { Link, his } from 'react-router-dom';

export const StartingPage = ({ want }) => {

   return (
    <div className="startingPageContainer">
     <div className = 'start'>
         <Link to={"/"}>
            <button style={{outline: "none", background: 'transparent', border: 'none', cursor: '-moz-initial'}}><img id="startlogo" style={{borderRadius: '50px'}} width="100px" height="100px" src="https://t3.ftcdn.net/jpg/02/05/46/30/360_F_205463037_cXsFsDC65v6ZlZlqoDYabosy0sZnwReO.jpg" alt="ehh"></img></button>
         </Link>
          {
            want? <><Link to="/aboutus">
            <button type='button' className='startingPageAbout startingButton'>About Us</button>
         </Link>

         <Link to="/buyonline">
            <button type='button' className='startingPageBuy startingButton'>Buy Online</button>
         </Link>

         <Link to="/careers">
            <button type='button' className='startingPageCareers startingButton'>Careers</button>
         </Link>

         <Link to="/clients">
            <button type='button' className='startingPageClients startingButton'>Clients</button>
         </Link>

         <Link to="/contactus">
            <button type='button' className='startingPageContact startingButton'>Contact Us</button>
         </Link>

         <Link to="/news">
            <button type='button' className='startingPageNews startingButton'>News</button>
         </Link>

         <Link to="/productsservices">
            <button type='button' className='startingPageProd startingButton'>Products & Services</button>
         </Link></>: null
          }
     </div>
    </div>
   )
}