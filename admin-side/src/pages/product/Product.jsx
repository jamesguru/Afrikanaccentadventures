import { Link,useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import {useDispatch,useSelector} from 'react-redux';
import { publicRequest } from "../../requestMethods";
import axios from 'axios';
import React from 'react';


export default function Product() {

    const location = useLocation();


    const productId = location.pathname.split("/")[2];

    const product = useSelector((state) => state.product.products.find((product) => product._id === productId));

    const [inputs,setInputs] = React.useState({});

   


    const handleUpdate = async (id) => {


        try {


            const res = await publicRequest.put(`/products/${id}`,inputs);

            console.log(inputs);
            


        } catch (error) {


            console.log("something went wrong");
            
        }
    }


    const handleChange = (e) => {

        setInputs(prev => {
      
      
          return {...prev, [e.target.name] : e.target.value}
        })
      }


      console.log(inputs);


  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle"> Tour Package</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                    <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                     <span className="productInfoValue">{product._id}</span>
                  </div>
                 
                  <div className="productInfoItem">
                      <span className="productInfoKey">Active:</span>
                        <span className="productInfoValue">{product.active ? 'true' : 'false'}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Name</label>
                  <input type="text" name = "title" onChange={handleChange} placeholder={product.title}/>
                  <label>Description</label>
                  <input type="text" name = "desc" onChange={handleChange} placeholder={product.desc}/>
                  <label>Price</label>
                  <input type="number" name = "originalPrice"  onChange={handleChange} placeholder={product.originalPrice}/>

                 -- <label>Discounted Price</label>
                  <input type="number" name = "discountedPrice"  onChange={handleChange} placeholder={product.originalPrice}/>
                  <label>Active</label>
                  <select name = "inStock" onChange={handleChange} id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" onClick={() => handleUpdate(productId)}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
