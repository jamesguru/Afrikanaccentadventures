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

const Activity = () => {
  const location = useLocation();

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

  
  const [inputs, setInputs] = React.useState({});

  const handleUpdate = async (id) => {
    try {
      const res = await publicRequest.put(`/activities/${id}`, inputs);

      console.log(inputs);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  
  return(<div className="product">
  <div className="productTitleContainer">
    <h1 className="productTitle">Activity</h1>
    <Link to="/newactivities">
      <button className="productAddButton">Create</button>
    </Link>
  </div>
  <div className="productTop">
      <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
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
                    <span className="productInfoValue">{activity.active ? 'true' : 'false'}</span>
              </div>
          </div>
      </div>
  </div>
  <div className="productBottom">
      <form className="productForm">
          <div className="productFormLeft">
              <label>Name</label>
              <input type="text" name = "title" onChange={handleChange} placeholder={activity.title}/>
              <label>Description</label>
              <input type="text" name = "desc" onChange={handleChange} placeholder={activity.desc}/>
              <label>Price</label>
              <input type="number" name = "originalPrice"  onChange={handleChange} placeholder={activity.originalPrice}/>

             -- <label>Discounted Price</label>
              <input type="number" name = "discountedPrice"  onChange={handleChange} placeholder={activity.originalPrice}/>
              <label>Active</label>
              <select name = "inStock" onChange={handleChange} id="idStock">
                  <option value="true">Yes</option>
                  <option value="false">No</option>
              </select>
              
          </div>
          <div className="productFormRight">
              <div className="productUpload">
                  <img src={activity.img} alt="" className="productUploadImg" />
                  <label for="file">
                      <Publish/>
                  </label>
                  <input type="file" id="file" style={{display:"none"}} />
              </div>
              <button className="productButton" onClick={() => handleUpdate(activityID)}>Update</button>
          </div>
      </form>
  </div>
</div>)};


export default Activity;
