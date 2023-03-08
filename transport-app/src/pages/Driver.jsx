import React, { useState } from 'react'
import driver from "C:\\react task\\transport-app\\src\\asserts\\driver.jpg"
import {Navbar} from "../component/Navbar"
import axios from 'axios';
import {useFormik} from "formik";
import {Footer} from '../component/Footer'
export function Driver(){

  const formik=useFormik({
    initialValues:{
        name:"",
        age:"",
        type_of_vehicle:"",
        id:""
    },
    onSubmit:values=>{
        var data={'id':values['id'],'name':values['name'],'age':values['age'],"type_of_vehicle":values["type_of_vehicle"]}
        axios.post("http://127.0.0.1:5000/addDriver",data)
        .then(response =>{
            console.log(response)
            // alert((response['data']))
            alert("driver added")
          }) 
          .catch(error =>{
            console.log("error :",error)
          })
    }
    
  }
  
  )
console.log(formik.values)

    return(
       <div>
         <Navbar></Navbar>
          
         <div className="containerlight">
             <div className="row  row-color">
                <div className="col-lg-6 col-md-12 col-sm-4 col-color">
                    <div className="container p-5 mt-5 ">
                    <img src={driver} alt="driver-img img-fluid"  class="img-fluid"width="550px" />
                    </div>
                 
                </div>
                <div className="col-lg-6 col-md-10 col-sm-8">
                    <div className="container form-container mt-4">
                        <form  onSubmit={formik.handleSubmit} action="" className='p-5' id="form">
                            <label htmlFor="name" className='form-label' id='name' required>Name</label>
                            <input value={formik.values.name} name="name" onChange={formik.handleChange}type="text"  class="form-control" placeholder="Enter your name" required/>
                            <br />
                            <label htmlFor="age" className='form-label' name="age" id='age'>age</label>
                            <input type="number" value={formik.values.age} class="form-control" onChange={formik.handleChange} name="age" placeholder='Enter your age' required/>
                            <br />
                            <label htmlFor="type_of_vehicle" className='form-label'name="type_of_vehicle" id='type_of_vehicle'>type of vehicle</label>
                            <input type="text" value={formik.values.type_of_vehicle}  class="form-control" onChange={formik.handleChange} name="type_of_vehicle"placeholder='Enter the type of vehicle' required/>
                            <br />
                            <label htmlFor="ID" className='form-label'  id='id'>ID</label>
                            <input type="number" value={formik.values.id} name="id"  class="form-control" onChange={formik.handleChange}  placeholder='Enter your ID'  required/>
                            <br />
                            <button class="btn btn-primary"  >submit</button>
                        </form>
                    </div>
               
                </div>
             </div>
          </div>
























          {/* <div className="containerlight">
             <div className="row  row-color">
                <div className="col-lg-6 col-md-4 col-sm-4 col-color">
                    <div className="container p-4 mt-5">
                    <img src={driver} alt="driver-img img-fluid"  class="img-fluid"width="550px" />
                    </div>
                 
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8">
                    <div className="container form-container">
                    <form action="" className='p-5 needs-validation' noValidate>
                        <label htmlFor="" className='form-label' id='name' required>Name</label>
                        <input type="text"  class="form-control" placeholder="Enter name" required/>
                        <br />
                        <label htmlFor="" className='form-label' id='age'>Age</label>
                        <input type="number" class="form-control" placeholder='Enter age' required/>
                        <br />
                        <label htmlFor="" className='form-label' id='type-of-vehicle'>Type of vehicle</label>
                        <input type="text" class="form-control" placeholder='Enter type of vehicle' required/>
                        <br />
                        <label htmlFor="" className='form-label' id='eta'>ID</label>
                        <input type="number" class="form-control" placeholder='Enter driver ID'  required/>
                        <br />
                        <button class="btn btn-primary" onClick={submit}>submit</button>
                    </form>
                    </div>
               
                </div>
             </div>
          </div> */}
         <Footer></Footer>
       </div>   

    );
}