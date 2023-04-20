import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

const CarrersEachScroll = ({ measureHeight, image, Head, Des }) => {

    const [heightFound, setHeightFound] = useState();

    useEffect(() => {
        setHeightFound(measureHeight);
    }, [measureHeight, image, Head, Des])

    return(
            <Fade>
        <div>
            <img src={image}/>
            <Fade>
                <div className="CarrersScrollListImgDes" style={{top: `${heightFound}vh`}}>
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
            </Fade>
    )
}

export default CarrersEachScroll;