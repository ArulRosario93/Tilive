import React from "react";
import Home from "./Components/Home/Home";
import { firebase } from "./firebase";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";

const App = () => {
  
    return(
        <Home />
    )
}

export default App;