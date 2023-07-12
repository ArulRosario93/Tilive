import React from "react";
import "./Employee.css";
import image1 from "./image1.jpg";
import image2 from "./image2.png";

const Employee = () => {
    return(
        <div className="Employee">
            <img src={image1}/>
            <img src={image2}/>
        </div>
    )
}

export default Employee;