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
import Loader from './Components/Loader/Loader';
import { createBrowserHistory } from 'history';
import AllNews from './Components/News/AllNews/AllNews';
import SubDropPage from './Components/SubDropPage/SubDropPage';
import MarketingBusiness from './Components/MarketingBusiness/MarketingBusiness';
import MarketingBusinessWriteUp from './Components/MarketingBusiness/MarketingBusinessWriteUp/MarketingBusinessWriteUp';
import SourcingSupplyChain from './Components/Sourcing&SupplyChain/Sourcing&SupplyChain';
import SourcingSupplyChainWriteUp from './Components/Sourcing&SupplyChain/SourcingSupplyChainWriteUp/SourcingSupplyChain';
import MergerAcquisition from './Components/Merger&Acquisition/Merger&Acquisition';
import MergerAcquisitionWriteUp from './Components/Merger&Acquisition/Merger&AcquisitionWriteUp/Merger&Acquisition';
import CeoServices from './Components/CeoServices/CeoServices';
import CeoServicesWriteUp from './Components/CeoServices/CeoServicesWriteUp/CeoServicesWriteUp';
import ManufacturingPartnerships from './Components/ManufacturingPartnerships/ManufacturingPartnerships';
import ManufacturingPartnershipsWriteUp from './Components/ManufacturingPartnerships/ManufacturingPartnershipsWriteUp/ManufacturingPartnershipsWriteUp';
import AutomobileAndEngineeringParts from './Components/AutomobileAndEngineeringParts/AutomobileAndEngineeringParts';
import AutomobileAndEngineeringPartsWriteUp from './Components/AutomobileAndEngineeringParts/AutomobileAndEngineeringPartsWriteUp/AutomobileAndEngineeringPartsWriteUp';
import GenralTrading from './Components/GeneralTrading/GenralTrading';
import GenralTradingWriteUp from './Components/GeneralTrading/GenralTradingWriteUp/GenralTradingWriteUp';
import Casting from './Components/Sourcing&SupplyChain/Casting/Casting';
import MachinedComponents from './Components/Sourcing&SupplyChain/MachinedComponents/MachinedComponents';
import Forging from './Components/Sourcing&SupplyChain/Forging/Forging';
import PlasticAndRubberParts from './Components/Sourcing&SupplyChain/Plastic&RubberParts/Plastic&RubberParts';
import SheetMetalFabricatedParts from './Components/Sourcing&SupplyChain/SheetMetal&FabricatedParts/SheetMetal&FabricatedParts';

const history = createBrowserHistory();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />
  },
  {
    path: "/productsservices",
    element: <ProductsServices />
  },
  {
    path: "/news",
    // loader: <Loader />,
    loader: () =>  <Loader />,
    element: <News />
  },
  {
    path: "/contactus",
    element: <ContactUs />
  },
  {
    path: "/clients",
    element: <Careers/>
  },
  {
    path: "/careers",
    element: <Clients />
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
    path: "/moredetail",
    element: <EnLargeNews />
  },
  {
    path: "/allnews",
    element: <AllNews />
  },
  {
    path: "/newsform",
    element: <NewsForm stateChange="yoyo"/>,
  },
  {
    path: "/MarketingBusiness",
    element: <MarketingBusiness />,
  },
  {
    path: "/Sourcing&SupplyChain",
    element: <SourcingSupplyChain />,
  },
  {
    path: "/Merger&Acquisition",
    element: <MergerAcquisition />,
  },
  {
    path: "/CEOServices",
    element: <CeoServices />,
  },
  {
    path: "/ManufacturingGuild",
    element: <ManufacturingPartnerships />,
  },
  {
    path: "/Automotive&EngineeringParts",
    element: <AutomobileAndEngineeringParts />,
  },
  {
    path: "/GeneralTrading",
    element: <GenralTrading />,
  },
  {
    path: "/PrivacyPolicy",
    element: <SubDropPage />
  },
  {
    path: "/MarketingBusinessWriteUp",
    element: <MarketingBusinessWriteUp />
  },
  {
    path: "/SourcingSupplyChainWriteUp",
    element: <SourcingSupplyChainWriteUp />
  },
  {
    path: "/MergerAcquisitionWriteUp",
    element: <MergerAcquisitionWriteUp />
  },
  {
    path: "/CeoServicesWriteUp",
    element: <CeoServicesWriteUp />
  },
  {
    path: "/ManufacturingPartnershipsWriteUp",
    element: <ManufacturingPartnershipsWriteUp />
  },
  {
    path: "/AutomobileAndEngineeringPartsWriteUp",
    element: <AutomobileAndEngineeringPartsWriteUp />
  },
  {
    path: "/GenralTradingWriteUp",
    element: <GenralTradingWriteUp />
  },
  {
    path: "/Casting",
    element: <Casting />
  },
  {
    path: "/MachinedComponents",
    element: <MachinedComponents />
  },
  {
    path: "/Forging",
    element: <Forging />
  },
  {
    path: "/PlasticAndRubberParts",
    element: <PlasticAndRubberParts />
  },
  {
    path: "/SheetMetalFabricatedParts",
    element: <SheetMetalFabricatedParts />
  },
]);

// window.onload()

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