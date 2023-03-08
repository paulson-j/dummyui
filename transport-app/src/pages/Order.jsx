import React from 'react'
 import order from "C:\\react task\\transport-app\\src\\asserts\\order.jpg";
import { Navbar } from '../component/Navbar';
import {useFormik} from "formik";
import axios from 'axios'; 
import {Footer} from '../component/Footer'
export function Order(){
    
    const formik=useFormik({
        initialValues:{
            id:"",
            name:"",
            destination:"",
            eta:""
            
        },

        onSubmit:values=>{
            var data={'id':values['id'],'name':values['name'],'destination':values['destination'],"ETA":values["eta"]}
            axios.put("http://127.0.0.1:5000/addOrder",data)
            .then(response =>{
                console.log(response)
                // alert((response['data']))
                alert("order added")
              }) 
              .catch(error =>{
                console.log("error :",error)
              })
        }
      })

    return(
        <div>
            <Navbar></Navbar>
          <div className="containerlight">
             <div className="row  row-color">
                <div className="col-lg-6 col-md-12 col-sm-4 col-color">
                    <div className="container p-4 ">
                    <img src={order} alt="driver-img img-fluid"  class="img-fluid"width="550px" />
                    </div>
                 
                </div>
                <div className="col-lg-6 col-md-10 col-sm-8">
                    <div className="container form-container mt-4">
                    <form onSubmit={formik.handleSubmit} action="" className='p-5 '>
                        <label htmlFor="id" className='form-label' id='id' required>ID</label>
                        <input type="number" value={formik.values.id} onChange={formik.handleChange} class="form-control" name="id" placeholder="Enter order ID" required/>
                        <br />
                        <label htmlFor="name" className='form-label' id='name'>Name</label>
                        <input type="text" value={formik.values.name} onChange={formik.handleChange}  class="form-control" name='name' placeholder='Enter Name' required/>
                        <br />
                        <label htmlFor="eta" className='form-label' id='eta'>ETA</label>
                        <input type="number" value={formik.values.eta} onChange={formik.handleChange}  class="form-control" name='eta' placeholder='Enter ETA' required/>
                        <br />
                        <label htmlFor="destiantion" className='form-label' id='desination'>Destination</label>
                        <input type="text" value={formik.values.destination} onChange={formik.handleChange} class="form-control" name="destination"placeholder='Enter Destination'  required/>
                        <br />
                        <button class="btn btn-primary" type='submit' >submit</button>
                    </form>
                    </div>
               
                </div>
             </div>
          </div>
        <Footer></Footer>
       </div>   
    );
}