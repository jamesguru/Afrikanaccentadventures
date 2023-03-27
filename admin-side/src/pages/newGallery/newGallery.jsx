import {React,useState,useEffect} from 'react';

import './newGallery.css';

import {getStorage,ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import app from '../../firebasestore';

import axios from 'axios';
import { publicRequest } from '../../requestMethods';




const NewGallery = () => {


    
    
    const [file,setFile] = useState(null);
    const [file2,setFile2] = useState(null);
    const [title, setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [percentage,setpercentage] = useState(0);

    const [uploading, setUploading] = useState("start uploading");

    const uploadGallery = async (gallery) =>{


        try {


            await publicRequest.post('/gallery/',gallery);
            
        } catch (error) {


            console.log('something went wrong');
            
        }


    }



    const handleUpload2 = async() => {

      const data = new FormData();

      data.append("file",file2);
      data.append("upload_preset", "uploads");


      setUploading("uploading");

      try {


        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",data);

        const {url} = uploadRes.data;

        console.log(uploadRes);

        console.log(url);

        setUploading("uploaded 100%");
        
      } catch (error) {


        console.log(error);


        setUploading("uploading failed");
        
      }



    }


    const handleUpload = (e) => {

        e.preventDefault();


       

        const filename = new Date().getTime() + file.name;
      
        const storage = getStorage(app);
      
        const StorageRef = ref(storage, filename);
      
        const uploadTask = uploadBytesResumable(StorageRef,file);

        
      
        
      
      
        uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
          setpercentage(progress);
          console.log('Upload is ' + percentage + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
      
            default:
      
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {


            console.log(downloadURL);


            const newGallery = {"video":downloadURL,"title":title,"desc":desc};


             title && desc &&  uploadGallery(newGallery);



            
          });
        }
      );
      
      




    }


    

    return (
        <div className="container">


            <h3>New Gallery</h3>



        <div className="info">


                <input type="file"  onChange ={(e) => setFile(e.target.files[0])}/>

                <h4 style={{color:'green'}}>{`File upload is ${percentage} %`}</h4>

                <input type="file"  onChange ={(e) => setFile2(e.target.files[0])}/>

                <button onClick={handleUpload2}>{uploading}</button>

                <input className="input-title" type="text" placeholder="how to use serum" onChange={(e) => setTitle(e.target.value)}/>


                <textarea  cols="40" rows="5" onChange={(e) => setDesc(e.target.value)} placeholder="description"></textarea>


                <button onClick={handleUpload} className="upload-button">Upload</button>

                




        </div>


            





            
        </div>
    )
}

export default NewGallery;
