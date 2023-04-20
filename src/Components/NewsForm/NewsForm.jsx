import React, { useState } from "react";
import "./NewsForm.css";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import NewsFormForm from "./NewFormForm/NewFormForm";
import ProductForm from "./ProductForm/ProductForm";
import CarrersForm from "./CarrersForm/CarrersForm";
import ClientsForm from "./ClientsForm/ClientsForm";

const NewsForm = () => {

    const [ selectedOpt, setSelectedOpt ] = useState("News Form");
    const [ accepted, setAccepted ] = useState(false);
    const [ secretKey, setSecretKey ] = useState("");

    const options = [
        'News Form', 'Products Form', 'Carrers Form', 'Clients Form'
      ];

      const handleChange = (e) => {
        setSelectedOpt(e?.value);
      }

      const handleChangeKey = (e) => {
        setSecretKey(e.target.value);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        
        if (secretKey == 123456) {
          console.log("Submitted " + selectedOpt);
            setAccepted(true);
        }else{
            console.log("Login Error");
        }
      }

      return(
        accepted? <div className="newsform">
            {
              selectedOpt == 'News Form'? <NewsFormForm />: selectedOpt == 'Products Form'? <ProductForm />: selectedOpt == 'Carrers Form'? <CarrersForm />: <ClientsForm />
            }
          </div>: <div className="newsformPre">

            <h2 className="newsformHead">Administrator Login</h2>

            <br />
            <br />

            <form onSubmit={(e) => handleSubmit(e)}>
                <Dropdown options={options} onChange={(e) => handleChange(e)} value={selectedOpt} placeholder="Select an option" />
                <br />
                <input required type="text" onChange={(e) => handleChangeKey(e)} placeholder="Key" className="NewForminput" />
                <br />
                <br />

                <button onClick={(e) => handleSubmit(e)} className="NewForminputButton">Submit</button>
            </form>
        </div>
    )
}

export default NewsForm;