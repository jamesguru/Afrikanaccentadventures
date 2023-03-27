import React from 'react';

import './annoucement.css';

import axios from 'axios';

import {useEffect} from 'react';
import { publicRequest } from '../../requestMethods';

const Annoucement = () => {


    const [title, setTitle] = React.useState('');

    const [annoucement, setAnnoucement] = React.useState([]);


    const handleAddAnnoucement = async (e) =>{

        e.preventDefault();


        try {



            

            await publicRequest.post('/annoucement/', {title});


            
        } catch (error) {

            console.log(error)
            
        }


        

                

    }


    const handleDeleteAnnoucement = async (id) => {


        try {

            console.log(id);

            await publicRequest.delete(`/annoucement/${id}`)
            
        } catch (error) {


            console.log('something went wrong')
            
        }
    } 


    useEffect(() =>{



        const getAnnoucement = async() =>{



            try {


                const res = await publicRequest.get('/annoucement/');



                setAnnoucement(res.data);
                
            } catch (error) {



                console.log('something went wrong');
                
            }





        }

        
        
        getAnnoucement();


    },[])


    

    console.log(annoucement);


    return (
        <div className="annoucement">



                    <div className="current"> 

                            
                    {annoucement.map((title) => <>


                    <h5>{title.title}</h5> 





                    <button onClick={() => handleDeleteAnnoucement(title._id)} style={{ cursor: 'pointer' ,borderRadius:'5px', padding:'10px', border:'none', backgroundColor:'red', marginLeft:'10px', color:'white'}}>Delete</button>


                    </>)}

                                

                    

                        
                        
                        
                        


        </div>

            <div className="add">


            <input className="add-input" type="text" placeholder="annoucement" onChange={(e) => setTitle(annoucement.length ? '' : e.target.value)}/>


            <button onClick={handleAddAnnoucement} style={{ cursor: 'pointer' ,borderRadius:'5px', padding:'10px', border:'none', backgroundColor:'teal', marginLeft:'10px', color:'white'}}>Add</button>



            </div>


        
            


            

            
            



            
        </div>
    )
}

export default Annoucement
