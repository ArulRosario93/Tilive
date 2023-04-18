import React from "react";
import { Fade } from "react-reveal";

const CarrersEachScroll = ({ measureHeight, image, Head, Des }) => {
    return(
        <div>
            <img src={image}/>
            <Fade>
                <div className="CarrersScrollListImgDes" style={{top: `${measureHeight}vh`}}>
                    <h1 className="CarrersScrollListImgDesHead">{Head}</h1>
                    <br />
                    <p className="CarrersScrollListImgDesP">{Des}
                    </p>
                    <br />
                    <div className="CarrersScrollListImgDesLocation">
                        <p className="CarrersScrollListImgDesLocationP">Location</p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default CarrersEachScroll;