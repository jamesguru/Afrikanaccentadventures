import {React,useEffect,useState} from 'react';
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import app from '../../firebasestore';

import './newSlider.css';
import axios from 'axios';
import { publicRequest } from '../../requestMethods';

const NewSlider = () => {


        const [title,setTitle] = useState('');
        const [id,setID] = useState('');
        
        const [desc, setDesc] = useState('');

        const [file,setFile] = useState(null);

        const [uploading,setUploading] = useState('uploading is 0%');



      console.log(desc)

        const uploadSlider = async(slider) => {


            try {


                await publicRequest.post('/slider/', slider);


                window.location.reload();

                
                
            } catch (error) {


                console.log(error);



                
            }
        }



        const handleUpload = async(e) => {


          e.preventDefault();
        
          const data = new FormData();
        
          data.append("file",file);
          data.append("upload_preset", "uploads");
        
        
          setUploading("uploading");
        
          try {
        
        
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",data);
        
            const {url} = uploadRes.data;
        
           
    
            const newSlider = {"img":url,"title":title,"desc":desc, "id":id};
    
            uploadSlider(newSlider)
        
            setUploading("uploaded 100%");
            
          } catch (error) {
        
        
            console.log(error);
        
        
            setUploading("uploading failed");
            
          }
        
        
        
        }

        



    return (
        <div className="container">


            <div className="info">


                <h3>New Slider</h3>


                <input type="file" className="input-title" onChange={(e) => setFile(e.target.files[0])}/>
                <h4 style={{color:'green'}}>{uploading}</h4>

                <input type="text" className="input-title" placeholder="Write title" onChange={(e) => setTitle(e.target.value)}/>

               


                <input type="text" className="input-desc"  placeholder="Write small description" onChange={(e) => setDesc(e.target.value)}/>

                <input type="text" className="input-desc"  placeholder="Write id for slider" onChange={(e) => setID(e.target.value)}/>


                <button  onClick={handleUpload} className="button-upload">Upload</button>



            </div>
            
        </div>
    )
}

export default NewSlider;
