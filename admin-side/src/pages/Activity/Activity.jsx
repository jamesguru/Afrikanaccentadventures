import { Link, useLocation } from "react-router-dom";
import {useEffect,useState} from "react"
import "./activity.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Activity = () => {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState();
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState("uploading is 0%");
  const [inputs, setInputs] = React.useState({});
  const [activity,setActivity]=useState({});

  const activityID = location.pathname.split("/")[2];

  useEffect(() => {
    const getActivities = async () => {
      try {
        const res = await publicRequest.get(`/activities/find/${activityID}`);

        setActivity(res.data);

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getActivities();
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", selectedImage);
    data.append("upload_preset", "uploads");

    setUploading("uploading");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dap91fhxh/image/upload",
        data
      );

      const { url } = uploadRes.data;

      setImage(url);

      setUploading("uploaded 100%");
    } catch (error) {
      console.log(error);

      setUploading("uploading failed");
    }
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const handleUpdate = async (e,id) => {
    e.preventDefault();
    console.log({...inputs,img:image});
    console.log(id)
    try {
    const res = await publicRequest.put(`/activities/${id}`, {...inputs,img:image});
    toast.success(`Activity has been successfully updated`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    } catch (error) {
      console.log("something went wrong");
    }
  };


  
  return(
    <div className="product">
    <ToastContainer
       position="right-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
     />
 <div className="productTitleContainer">
   <h1 className="productTitle"> Tour Package</h1>
   <Link to="/newproduct">
     <button className="productAddButton">Create</button>
   </Link>
 </div>
 <div className="productTop">
   <div className="productTopLeft">
     <Chart data={productData} dataKey="Sales" title="Sales Performance" />
   </div>
   <div className="productTopRight">
     <div className="productInfoTop">
       <img src={activity.img} alt="" className="productInfoImg" />
       <span className="productName">{activity.title}</span>
     </div>
     <div className="productInfoBottom">
       <div className="productInfoItem">
         <span className="productInfoKey">id:</span>
         <span className="productInfoValue">{activity._id}</span>
       </div>

       <div className="productInfoItem">
         <span className="productInfoKey">Active:</span>
         <span className="productInfoValue">
           {activity.active ? "true" : "false"}
         </span>
       </div>
     </div>
   </div>
 </div>
 <div className="productBottom">
   <form className="productForm">
     <div className="productFormLeft">
       <label>Title</label>
       <input
         type="text"
         name="title"
         onChange={handleChange}
         placeholder={activity.title}
       />
       <label>Description</label>
       <textarea
         type="text"
         name="desc"
         onChange={handleChange}
         placeholder={activity.desc}
       />
       <label>Price</label>
       <input
         type="number"
         name="originalPrice"
         onChange={handleChange}
         placeholder={activity.originalPrice}
       />
       <label>Description</label>
       <textarea
         type="text"
         name="overview"
         onChange={handleChange}
         placeholder={activity.overview}
       />

       <label>Duration</label>
       <input
         type="text"
         name="duration"
         onChange={handleChange}
         placeholder={activity.duration}
       />
       <label>Tour Type</label>
       <input
         type="text"
         name="tourtype"
         onChange={handleChange}
         placeholder={activity.tourtype}
       />
       <label>Group Size</label>
       <input
         type="text"
         name="groupsize"
         onChange={handleChange}
         placeholder={activity.groupsize}
       />
      
       <label>Active</label>
       <select name="inStock" onChange={handleChange} id="idStock">
         <option value="true">Yes</option>
         <option value="false">No</option>
       </select>
     </div>
     <div className="productFormRight">

       <div>
       <div className="productUpload">
         { selectedImage ? <img src={URL.createObjectURL(selectedImage)} alt="" className="productUploadImg" />:<img src={activity.img} alt="" className="productUploadImg" />}
         <label for="file">
           <Publish className="publish-icon"/>
         </label>
         <input type="file" id="file" onChange={imageChange} style={{ display: "none" }} />

         
       </div>
       {selectedImage && <button onClick={handleUpload}>Upload</button>}
       {selectedImage && <span className="uploading">{uploading}</span>}
       </div>
       
       <button
         className="productButton"
         onClick={(e) => handleUpdate(e,activityID)}
       >
         Update
       </button>
     </div>
   </form>
 </div>
</div>)};


export default Activity;
