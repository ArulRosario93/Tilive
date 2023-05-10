import React from "react";
import "./Home.css";
import { StartingPage } from "./StartingPage/StartingPage";
import HomePage from "./HomePage/HomePage";
import HomeProducts from "./HomeProducts/HomeProducts";
import HomeCareers from "./HomeCareers/HomeCareers";
import HomeFooter from "./HomeFooter/HomeFooter";
import { useEffect, useState } from "react";
import HomeNav from "./HomeNav/HomeNav";

import CookieConsent, { Cookies } from "react-cookie-consent";
import { Link } from "react-router-dom";

const Home = () => {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("down");

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //        var header = document.querySelector(".startingPageContainer");
    //        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //        if (currentScrollTop > lastScrollTop) {
    //           header.classList.add("startingPageContainerdummy");
    //        } else {
    //           header.classList.remove("startingPageContainerdummy");
    //        }
    //        setLastScrollTop(currentScrollTop);
    //     });
    // });

    const PrivacyPolicy = {
        Fhead: "Privacy Policy",
        SHead: "",
        firstPara: "This Cookie Policy describes how Tilive International LLP ('us,' 'we,' or 'our') uses cookies and similar tracking technologies on our website. Please read this policy carefully to understand how we collect, use, and disclose your information through cookies and your choices regarding such data.",
        SecondPara: "Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to improve your browsing experience, remember your preferences, and provide personalized content.",
        Desc: ["a. Essential Cookies: These cookies are necessary for the website to function properly. They enable basic features such as page navigation, security, and access to certain areas of the website. Disabling these cookies may prevent the website from working correctly.", "b. Performance and Analytics Cookies: These cookies help us analyze how visitors interact with our website. They collect anonymous information and provide statistical data about website usage, allowing us to improve our services and optimize the website's performance.", "c. Functionality Cookies: These cookies remember your preferences and choices to provide enhanced and personalized features. They can be used to remember your language preferences, region, and other customizable aspects of the website.", "d. Advertising and Targeting Cookies: These cookies are used to deliver targeted advertisements based on your browsing behavior and interests. They track your visits to our website and other websites, allowing us to display relevant and engaging content. These cookies may also be used by third-party advertisers.", "Third-Party Cookies", "We may allow third-party service providers, such as analytics or advertising companies, to use cookies on our website. These cookies are subject to the respective privacy policies of these third parties, and we do not have control over or access to these cookies. We recommend reviewing the privacy policies of these third parties for more information about their cookie practices.", "By continuing to use our website, you consent to the use of cookies as described in this policy. However, you have the option to manage or disable cookies through your browser settings. Please note that if you choose to disable cookies, certain features or functionalities of the website may be affected, and your browsing experience may be less efficient.", "Most web browsers allow you to control cookies through their settings. You can usually find these settings in the 'Options,' 'Settings,' or 'Preferences' menu of your browser. To learn more about cookie management, you can visit the browser's help menu or visit www.allaboutcookies.org.", "Changes to this Cookie Policy", "We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated version of the policy on our website with the effective date. We encourage you to review this policy periodically for any changes.", "Contact Us", "If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at: Tilive International LLP @ info@tilive.co.in"],
     }

    return(
        <div className="Home">
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="myCookieConsent"
            style={{ background: "#222", fontSize: "16px" }}
            buttonStyle={{ color: "#fff", fontSize: "14px" }}
            expires={150}
            >
            This website uses cookies to enhance the user experience.
            View <Link color="grey" to={"/PrivacyPolicy"} state={{ PrivacyPolicy }}>Privacy Policy</Link>
        </CookieConsent>
           <StartingPage want={true} />
           <HomePage />
           <HomeNav />
           <HomeProducts />
           <HomeCareers />
           <HomeFooter />
        </div>
    )
}

export default Home;