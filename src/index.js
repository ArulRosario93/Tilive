import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsServices from './Components/Products&Services/Products&Services';
import News from './Components/News/News';
import ContactUs from './Components/ContactUs/ContactUs';
import Errorpage from "./Components/ErrorPage/ErrorPage";
import Clients from './Components/Clients/Clients';
import Careers from './Components/Careers/Careers';
import BuyOnline from './Components/BuyOnline/BuyOnline';
import AboutUs from './Components/AboutUs/AboutUs';
import EnLargeNews from './Components/News/EnlargeNews/EnlargeNews';
import NewsForm from './Components/NewsForm/NewsForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />
  },
  {
    path: "/products&services",
    element: <ProductsServices />
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/contactus",
    element: <ContactUs />
  },
  {
    path: "/clients",
    element: <Clients />
  },
  {
    path: "/carrers",
    element: <Careers/>
  },
  {
    path: "/buyonline",
    element: <BuyOnline />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/news/event",
    element: <EnLargeNews />
  },
  {
    path: "/newsform",
    element: <NewsForm stateChange="yoyo"/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
