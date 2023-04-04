import React, { useEffect, useState } from "react";
import "./NewsForm.css";
import { firebasee, storage, } from "../../firebase";
import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore";

// import { useLocation } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';

import { ref, uploadBytes, getDownloadURL, uploadBytesResumable, updateMetadata } from "firebase/storage";
import { useNavigate, useLocation } from "react-router-dom";

const NewsForm = () => {
    const navigate = useNavigate();

    // const storage = firebase.storage();
    
    const [eventName, setEventName] = useState("");
    const [eventCaption, setEventCaption] = useState("");
    const [eventDescription, setEventDescription] = useState("");

    const [seletedFiles, setSelectedFiles] = useState(null);
    const [file, setFile] = useState([]);

    const validate = async () => {
        if(eventName.length < 1 || eventCaption.length < 1 || eventDescription.length < 1 || file.length < 1){
            alert("Fill out The Credentials");
        }else{
            console.log("RUNIINININININI IN ELSE");
            console.log(seletedFiles == null);
            console.log(file);
            const collectionRef = collection(firebasee, "tilive_data");
            
            let data = {
                eventName: eventName,
                eventCaption: eventCaption,
                eventDescription: eventDescription,
                fileLink: [],
            };

            const downloadURLS = [];

            const docRef = await addDoc(collectionRef, data);

            for (let index = 0; index < file.length; index++) {
                const element = seletedFiles[index];

                console.log("UPLOADING");
                console.log(element);

                    const storageRef = ref(storage, `files/${element.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, element);

                    const downloadURLIT = await getDownloadURL(uploadTask.snapshot.ref);

                    downloadURLS.push(downloadURLIT);

                    console.log("LINK GETTING");
                    console.log(downloadURLS);

                    const updatingDOC = await updateDoc(docRef, {
                        fileLink: downloadURLS,
                    });

                navigate("/");   
            }
        }
    }

    const handleFileChange = (e) => {
        setFile([]);
        setSelectedFiles(e.target.files);
    }

    useEffect(() => {

        // storage.ref("image").put();
        
        if(seletedFiles){
            for (let index = 0; index < seletedFiles.length; index++) {
                console.log(seletedFiles);
                const url = URL.createObjectURL(seletedFiles[index]);
                setFile((prevItem) => 
                    [...prevItem, url]
                );
            }
        }
    }, [seletedFiles]);

    return(
        <div className="newsform">
            <div className="newsformhead"><h1>News Form</h1></div>
            <div className="newsformform">
                <div className="newsformformflex">
                    <div className="newsformeventdes">
                        <div className="newsformeventdesEventName">
                            <p className="newsformeventdesp">Event Name*</p>
                            <input className="newsformeventdesinput" onChange={(e) => setEventName(e.target.value)} type="text" name="eventname" required/>
                        </div>
                        <div className="newsformeventdesEventCap">
                            <p className="newsformeventdesp">Event Caption</p>
                            <input className="newsformeventdesinput" onChange={(e) => setEventCaption(e.target.value)} type="text" name="eventcap"/>
                        </div>
                        <br />
                        <div className="newsformeventdesEventDes">
                            <p className="newsformeventdesp">Description*</p>
                            <textarea draggable={false} className="newsformeventdesinput" onChange={(e) => setEventDescription(e.target.value)} type="text" name="eventdes" required/>
                        </div>
                    </div>
                    <div className="newsformdivider"></div>
                    <div className="newsformimg">
                        <input multiple accept="image/*,video/*" onChange={(e) => handleFileChange(e)} type="file" id="file-input" />
                        {/* <br /> */}

                        {
                            file.length > 0? <div className="newsformimgCarousel"><Carousel className="newsformimgCarouselIn" showIndicators={false} selectedItem={false} showStatus={false} infiniteLoop showThumbs={false}>

                                {
                                    file.map((item, i) => {
                                        return(
                                            <img src={file[i]} className="newsformimgCarouselImg" alt="file Selected" width="250px" height="250px"/>
                                        )
                                    })
                                }

                            </Carousel></div> : <div></div>
                        }

                    </div>
                </div>
                <div className="newsformbutton">
                    <button className="newsformbuttonhead" onClick={validate} >Submit Form</button>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default NewsForm;