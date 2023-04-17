import React, { useRef, useEffect, useState } from "react";
import ClientsHome from "./ClientsHome/ClientsHome";
import ClientsWhyUs from "./ClientsHome/ClientsWhyUs/ClientsWhyUs";
import ScrollingComponent from "./ScrollingComponent/ScrollingComponent";
import ClientFotter from "./ClientFotter/ClientFotter";
import Loader from "../Loader/Loader";

const Clients = () => {

    const ref = useRef(null);

    const [loader, serLoader] = useState(false);

    const [OP, setOP] = useState(0);

    var hhToDivHeight;

    useEffect(() => {

        setTimeout(() => {
            serLoader(true);
        }, 2000);

        window.scrollTo({
            top: 0,
            // behavior: 'smooth' // smooth scrolling animation
          });

        if (ref.current) {
            const { top } = ref.current.getBoundingClientRect();
            // OP = ;
            console.log(top);

            hhToDivHeight = Math.round(top);

            setOP(hhToDivHeight);
            console.log(hhToDivHeight);
            console.log(OP);
            console.log("Found OUTSIDE");
        }
    }, [OP, loader]);

    return(
        loader? <div>
            <ClientsHome />
            <ClientsWhyUs />
            <div ref={ref}><ScrollingComponent  heightStartsHere={OP != 0? OP : 1000} firstImage="https://thumbs.dreamstime.com/b/business-man-factory-grand-opening-ceremony-162560819.jpg" secondImage="https://i.pinimg.com/originals/c3/3a/31/c33a315148e1b3ddb8fe174a20ee9bf0.jpg" thirdImage="https://c.ndtvimg.com/2022-03/ssj5c028_elon-musk-reuters_625x300_22_March_22.jpg?im=Resize=(1230,900)" firstHead="Opening the Door to the Factory Floor" firstDes="Royal Enfield to open new factory in Tamil Nadu to manufacture EVs, global models. Sources say that Royal Enfield has acquired 60 acres landRoyal Enfield to open new factory in Tamil Nadu to manufacture EVs, global models. Sources say that Royal Enfield has acquired 60 acres land ..." secondHead="Metl-Span Hosts" secondDes="Sumitomo Rubber Industries, Ltd. (SRI) is pleased to announce that an opening ceremony was held for our group's first tire factory in the Republic of Turkey Sumitomo Rubber Industries, Ltd. (SRI) is pleased to announce that an opening ceremony was held for our group's first tire factory in the Republic of Turkey ..." thirdHead="Elon Musk Breaks Into Dance" thirdDes="The Open Factory Project, funded by the European Union, launched its own training program which aims to train workers aThe Open Factory Project, funded by the European Union, launched its own training program which aims to train workers and" firstLink="" secondLink="" thirdLink="" /></div>
            <ClientFotter />
        </div> : <Loader />
    )
}

export default Clients;