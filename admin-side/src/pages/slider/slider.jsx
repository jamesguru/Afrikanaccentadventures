import {React,useState,useEffect} from 'react';
import './slider.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';











const Slider = () => {


            const [slider,setSlider] = useState([]);

            useEffect(() =>{


                const getSlider = async () => {


                        try {



                            const res = await publicRequest.get('/slider/');


                            setSlider(res.data);
                            
                        } catch (error) {


                            console.log('something went wrong');
                            
                        }



                }


                getSlider();




            },[])




            const handleDelete = async (id) =>{


                try {


                    await publicRequest.delete(`/slider/${id}`);


                    window.location.reload();
                    
                } catch (error) {
                    

                    console.log('there is an error');
                }
            }


    return (
        <div className="container">



           
            

            <div className="info">

            <button className="button-create">
                

                <Link className="link" to="/newslider">

                    Create
                
                </Link>
                
                
                
                
                </button>


                     <h3>Sliders</h3>




                     {slider.length && slider.map((item) => (



                            <div className="wrapper">

                            <img src="" alt="" height="100px" width="100px"/>


                            <h5>{item.title}</h5>


                            <div className="button-delete">
                                    <button onClick={() => handleDelete(item._id)} className="button-delete">Delete</button>

                            </div>




                            </div>








                     ))}


                       


                         
                          

                            


                            

            </div>

           
        </div>
    )
}

export default Slider
