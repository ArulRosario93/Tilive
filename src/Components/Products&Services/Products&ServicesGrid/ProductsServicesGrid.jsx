import React from "react";
import "./ProductsServicesGrid.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const ProductsServicesGrid = () => {


    // const [docs, setDocs] = useState([]);
        
    //     const handleClick = async () => {
    //         const aa  = await getDocs(collection(firebasee, "tilive_data"));
    //         setDocs(aa.docs);
    //         console.log(aa.docs);
    //     }

    //     useEffect(() => {
    //         handleClick();
    //     }, []);

    var stateChange = {
        eventName: "Alpha Machine",
        eventCaption: "",
        eventDescription: 'BlahBLAhBlah',
        linkURl: ["igi"],
        purchaseNow: true,
    }

    return(
        <div className="ProductsServicesGrid">
            <h1 className="ProductsServicesGridHead">Products</h1>
            <div className="ProductsServicesGridHere">


                <div className="ProductsServicesGridHereEach">
            <Link to={"/news/event"} state={{stateChange}}>
                    <div className="ProductsServicesGridHereEachImg">
                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">Turing Machine</h2>
                                <br />  
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                    <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">Turing Machine</p>
                    </div>
            </Link>
                </div>



                <div className="ProductsServicesGridHereEach">
                    <div className="ProductsServicesGridHereEachImg">
                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">Alpha Machine</h2>
                            <br /><br/>
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                    <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">Alpha Machine</p>
                    </div>
                </div>
                <div className="ProductsServicesGridHereEach">
                    <div className="ProductsServicesGridHereEachImg">
                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"/>
                    </div>
                    <div className="ProductsServicesGridHereEachAbsolute">
                    <Fade>
                        <div className="ProductsServicesGridHereEachAbsoluteInside">
                            <h2 className="ProductsServicesGridHereEachAbsoluteInsideHead">Beta Machine</h2>
                            <br /><br/>
                            <p className="ProductsServicesGridHereEachAbsoluteInsideHeadP">View In Detail</p>
                        </div>
                    </Fade>
                    </div>
                        <br />
                    <div className="ProductsServicesGridHereEachName">
                        <p className="ProductsServicesGridHereEachNameP">Beta Machine</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProductsServicesGrid;