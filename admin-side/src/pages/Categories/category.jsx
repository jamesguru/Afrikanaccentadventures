import React from 'react';

import './category.css';


import {useEffect} from 'react';
import { publicRequest } from '../../requestMethods';

const Categories = () => {


    const [title, setTitle] = React.useState('');

    const [category, setCategory] = React.useState('');


    const [categories, setCategories] = React.useState([]);

    

    const handleAddCategory = async (e) =>{

        e.preventDefault();


        try {



            

            await publicRequest.post('/category/', {title,category});


            
        } catch (error) {

            console.log(error)
            
        }


        

                

    }


    
    



    const handleDeleteCategory = async (id) => {


        try {

           

            await publicRequest.delete(`/category/${id}`)
            
        } catch (error) {


            console.log('something went wrong')
            
        }
    } 


   
    useEffect(() =>{



        const getCategory = async() =>{



            try {


                const res = await publicRequest.get('/category/');



                setCategories(res.data);
                
            } catch (error) {



                console.log('something went wrong');
                
            }





        }

        
        
        getCategory();


    },[])


    
    console.log(categories);

   


    return (



        <div className="category">


            <>



                    <div className="current"> 

                            
                    {categories.map((cat,index) => <div style={{display:"flex"}}>


                    <h5 key={index}>{cat.title}</h5> 





                    <button key ={index} onClick={() => handleDeleteCategory(cat._id)} style={{ cursor: 'pointer' ,borderRadius:'5px', padding:'5px', border:'none', backgroundColor:'red', marginLeft:'10px', color:'white'}}>Delete</button>


                </div>)}

    
            </div>


            <h4>Add Categories</h4>

            <div className="add">


            <input className="add-input" type="text" placeholder="write title for category" onChange={(e) => setTitle(e.target.value)}/>


            



        </div>


        <div className="add">


            <input className="add-input" type="text" placeholder="write category" onChange={(e) => setCategory(e.target.value)}/>


           



        </div>

        <button onClick={handleAddCategory} style={{ cursor: 'pointer' ,borderRadius:'5px', padding:'10px', border:'none', backgroundColor:'teal', marginLeft:'10px', color:'white'}}>upload</button>


        </>


        <hr />


        


            
        </div>
    )
}

export default Categories;
