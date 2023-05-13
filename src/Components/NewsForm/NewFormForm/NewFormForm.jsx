import React, { useEffect, useState, useId } from "react";
import "../NewsForm.css";

import { firebasee, storage } from "../../../firebase";

import { CollectionReference, addDoc, collection, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { uid } from 'uid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS styles

import { ref, uploadBytes, getDownloadURL, uploadBytesResumable, updateMetadata } from "firebase/storage";
import { useNavigate, useLocation } from "react-router-dom";


const NewsFormForm = () => {
    const navigate = useNavigate();

    const id = uid(16);

    var docForRef = "";
    var docgotUpdated = "";

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

            let data = {
                eventName: eventName,
                eventCaption: eventCaption,
                eventDescription: eventDescription,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                fileLink: [],
            };
            // const collectionRef = firebasee.firestore().collection("tilive_data");
            const collectionRef = collection(firebasee, `tilive_data`);

            // const docRefHere = collectionRef.

            const docRef = await addDoc(collectionRef, data).then((docreffff) => {
                var bb = docreffff.id;
                const vv = bb.toString();
                docForRef = vv;
                docgotUpdated = docreffff;
            });

            var uploadingDatasHere = [];
            uploadingDatasHere = await uploadingData();

            if (uploadingDatasHere == "ERROR") {
                alert("ERROR OCCURED");

                await deleteDoc(docgotUpdated);
                navigate("/"); 
            }else{
                console.log("CAME TO UPDATE DOC");
                
                var dataFound = uploadingDatasHere;

                var count = 0;

                console.log(uploadingDatasHere);
                console.log(uploadingDatasHere.length);
                for (let index = 0; index <= uploadingDatasHere.length; index++) {
                    count++;
                }

                if (uploadingDatasHere.length == 1) {
                    const element = uploadingDatasHere;
                    console.log("CAMAMAA");
                    console.log(element[0]);
                    await updateDoc(docgotUpdated, {
                        "fileLink": firebase.firestore.FieldValue.arrayUnion(element[0]),
                    }).then(() => {
                        console.log("Done!");
                    })
                }else{
                    for (let index = 0; index < uploadingDatasHere.length; index++) {
                        const element = uploadingDatasHere[index];
                        await updateDoc(docgotUpdated, {
                            "fileLink": firebase.firestore.FieldValue.arrayUnion(element),
                        }).then(() => {
                            console.log("Done!");
                        })
                    }
                }
                navigate("/");
            }
        }
    }

    const uploadingData = async () => {
        var downloadURLS = [];
        var returnVal;
        
        for (let index = 0; index < seletedFiles.length; index++) {
            const element = seletedFiles[index];
            
            const storageRef = ref(storage, `files/${docForRef}/${element.name}`);
            console.log("UPLOADING");
            console.log(docForRef);

            await uploadBytesResumable(storageRef, element).then( async (snapshot) => {
                await getDownloadURL(snapshot.ref).then(url => {
                    console.log("COMING FOR NOW");
                    downloadURLS.push(url);
                });
            });
                
            console.log("LINK GETTING");
        }
        console.log(downloadURLS);
        console.log(downloadURLS.length);
        return downloadURLS;
    }

        const handleFileChange = (e) => {
            setFile([]);
        setSelectedFiles(e.target.files);
    }

    useEffect(() => {
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
        <div className="newsForm">
            <div className="newsformhead"><h1>News Form</h1></div>
            <div className="newsformform">
                <div className="newsformformflex">
                    <div className="newsformeventdes">
                        <div className="newsformeventdesEventName">
                            <p className="newsformeventdesp">Event Name*</p>
                            <input className="newsformeventdesinput" autoComplete="off" onChange={(e) => setEventName(e.target.value)} type="text" name="eventname" required/>
                        </div>
                        <div className="newsformeventdesEventCap">
                            <p className="newsformeventdesp">Event Caption</p>
                            <input className="newsformeventdesinput" autoComplete="off" onChange={(e) => setEventCaption(e.target.value)} type="text" name="eventcap"/>
                        </div>
                        {/* <div className="newsformeventdesEventCap">
                            <p className="newsformeventdesp">Event Type</p>
                            <input className="newsformeventdesinput" type="text" placeholder="Event | Company Update | Major News | Casual News"/>
                        </div> */}
                        <div className="newsformeventdesEventDes">
                            <p className="newsformeventdesp">Description*</p>
                            <textarea draggable={false} spellCheck className="newsformeventdesinput" onChange={(e) => setEventDescription(e.target.value)} type="text" name="eventdes" required/>
                        </div>
                    </div>
                    <div className="newsformdivider"></div>
                    <div className="newsformimg">
                        <input multiple accept="image/*,video/*" onChange={(e) => handleFileChange(e)} type="file" id="file-input" />

                        {
                            file.length > 0? <div className="newsformimgCarousel" style={{}}><Carousel className="newsformimgCarouselIn" showIndicators={true} selectedItem={false} showStatus={false} infiniteLoop showThumbs={false}>

                                {
                                    file.map((item, i) => {

                                        var itemNow = `${file[i]}`;

                                        var typeImg = false;

                                        if(seletedFiles[i].type == "video/mp4"){
                                            console.log(seletedFiles[i].type);
                                            typeImg = false;
                                        }else{
                                            typeImg = true;
                                            console.log('FAAALSEE');
                                        }
                                        
                                        return(
                                                typeImg? <img src={file[i]} className="newsformimgCarouselImg" alt="file Selected" width="250" height="200"/>: <video width="350" height="200" controls >
                                                    <source src={file[i]} type="video/mp4"/>
                                                </video>
                                        )
                                    })
                                }

                            </Carousel></div> : <div></div>
                        }

                    </div>
                </div>
                <div className="newsformbutton">
                    <button className="newsformbuttonhead" onClick={validate} ><p>Submit Form</p></button>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}


export default NewsFormForm;