// ort {React,useEffect,useState} from 'react'
// import axios from 'axios';
// import {Navbar} from "../component/Navbar"
// import {useFormik} from "formik";





// export function Assignorder() {
   
//     const [data,setData]=useState([]);
//     const [updateData,setUpdateData]= useState({
//         name:'',
//         id:'',
//         age:'',
//         type_of_vehicle:'',
//         time:''
//     })

//     const [selectedDriver,setDriver]=useState(null);

//     function submit(e){
//         e.preventDefault();
//         console.log("update data",updateData);
//         axios.put("http://127.0.0.1:5000/updateDriver",{
//             name:updateData.name,
//             age:parseInt(updateData.age),
//             id:parseInt(updateData.id),
//             type_of_vehicle:updateData.type_of_vehicle,
//             time:parseInt(updateData.time)
//         }).then((response)=>{console.log("response",response.data)})
//     }
    
//     function handler(e){
//         const newData = { ...updateData}
//         console.log(e.target.value)
//         newData[e.target.id]=e.target.value
//         setUpdateData(newData);
//         setDriver(newData)
//         console.log("hand",updateData);
//     }
    
//     useEffect(()=>{
//         axios.get("http://127.0.0.1:5000/listDriver").then((response)=>setData(Object.values(response.data)))
//         console.log("render")
//     },[updateData]);


//     const deleteentry = (item) => {
//         //code
//         console.log(item.id);
//         axios.delete("http://127.0.0.1:5000/deleteDriver/"+item.id).then((response)=>console.log("deleted",response.data))
//     }

//     const handleOpen=(driver)=> {
//         console.log("open",driver);
//         setDriver(driver)
//         setUpdateData(driver)
//     }
//     const handleClose= () => {
//         setDriver(null);
//         setUpdateData(null)
//     }
//     const [openIndex, setOpenIndex] = useState(-1);

//   const handleAccordionClick = (index) => {
//     setOpenIndex(index === openIndex ? -1 : index);
//   };
//     return (
//         <div>
//             <Navbar></Navbar>
//             <div className="container">
//                 <div className="row">
//                     {
//                         data.map((item)=>{
//                             return(
//                                 <div className="col-md-4">
//                                     <div className="card mt-5">
//                                         <div className="card-header">{item.name}
//                                         <span  className='position-absolute end-0'>
//                                         <i onClick={()=>{deleteentry(item)}} class="fa-solid fa-trash p-2 "></i>
//                                         <i onClick={()=>{handleOpen(item)}} class="fa-solid fa-pencil p-2 "></i>
//                                         </span>
//                                          </div>
//                                         <div className="card-body">
//                                         <div className="">Driver Id: <span>{item.id}</span></div>
//                                         <div className="">Name: <span>{item.name}</span></div>
//                                         <div className="">Age: <span>{item.age}</span></div>
//                                         <div className="">Type of Vehicle: <span>{item.type_of_vehicle}</span></div>
//                                         <div className="">Time: <span>{item.time}</span></div>
//                                         <div className="">Number of orders: <span>{item.list_of_order.length}</span></div>
//                                         <div className="mb-2">View order</div>  
//                                         <div id="accordion">
//                                             {item.list_of_order.map((order) => (
//                                                 <div className="card" key={order.id}>
//                                                 <div className="card-header" id={`heading${order.id}`}>
//                                                     <h5 className="mb-0">
//                                                     <button className="btn" onClick={() => handleAccordionClick(order.id)} aria-expanded={order.id === openIndex} aria-controls={`collapse${order.id}`}>
//                                                         {order.name}
//                                                     </button>
//                                                     </h5>
//                                                 </div>

//                                                 <div id={`collapse${order.id}`} className={`collapse ${order.id === openIndex ? 'show' : ''}`} aria-labelledby={`heading${order.id}`} data-parent="#accordion">
//                                                     <div className="card-body">
//                                                      <div className="">Order ID: <span>{order.id}</span></div>
//                                                      <div className="">Order Name: <span>{order.name}</span></div>
//                                                      <div className="">Order Destiantion: <span>{order.destination}</span></div>
//                                                      <div className="">ETA: <span>{order.ETA}</span></div>

//                                                     </div>
//                                                 </div>
//                                                 </div>
//                                             ))
//                                             }
                                            
//     </div>
        
//                                 </div>                                          
                                            
//                                         </div>
//                                         {
//                                                 (selectedDriver) && (
//                                                     <div className="card popup">
//                                                             <form onSubmit={(e)=>{submit(e)}} className='p-5' id="form">
//                             <label htmlFor="name" className='form-label' id='name' required>Name</label>
//                             <input value={updateData.name} name="name" onChange={(e)=>handler(e)}type="text"  class="form-control" placeholder="Enter your name" required/>
//                             <br />
//                             <label htmlFor="age" className='form-label' name="age" id='age'>age</label>
//                             <input type="number" value={selectedDriver.age} class="form-control" onChange={(e)=>handler(e)} name="age" placeholder='Enter your age' required/>
//                             <br />
//                             <label htmlFor="type_of_vehicle" className='form-label'name="type_of_vehicle" id='type_of_vehicle'>type of vehicle</label>
//                             <input type="text" value={selectedDriver.type_of_vehicle}  class="form-control" onChange={(e)=>handler(e)} name="type_of_vehicle"placeholder='Enter the type of vehicle' required/>
//                             <br />
//                             <label htmlFor="ID" className='form-label'  id='id'>ID</label>
//                             <input type="number" value={selectedDriver.id} name="id"  class="form-control" onChange={(e)=>handler(e)}  placeholder='Enter your ID'  required/>
//                             <br />
//                             <label htmlFor="time" className='form-label'  id='time'>Time</label>
//                             <input type="number" value={selectedDriver.time} name="time"  class="form-control" onChange={(e)=>handler(e)}  placeholder='Enter your Time'  required/>
//                             <br />
                            
//                             <button class="btn btn-primary"  >submit</button>
//                         </form>
                                                           
                                                        
//                                                         <button onClick={()=>{handleClose()}}>Close</button>

//                                                     </div>
//                                                 )
//                                             }
//                                     </div>
                                
//                             );
//                         })
//                     }
//                 </div>
//             </div>
            
//     </div> 
//     );
// }





import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios';
import { Navbar } from '../component/Navbar';
import {Footer} from '../component/Footer'
import 'C:\\react task\\transport-app\\src\\pages\\AssignOrder.css'
export function Assignorder() {
    
    const baseURL="http://localhost:5000/listDriver"

    const [data,setData] = useState([]);
    const updateURL="http://127.0.0.1:5000/updateDriver"
    const deleteURL="http://localhost:5000/deleteDriver"

    const [updateData, setUpdateData] = useState({
        name:'',
        id:'',
        type_of_vehicle:'',
        age:''
       

    })

    function handler(e){
        const newData = { ...updateData}
        newData[e.target.id]=e.target.value
        setUpdateData(newData);
        setSelectedDriver(newData)
        console.log(updateData);
    }

    function submit(e){
        e.preventDefault();
        console.log("submittred",updateData)
        axios.put(updateURL,{
            name:updateData.name,
            age:parseInt(updateData.age),
            id:parseInt(updateData.id),
            type_of_vehicle:updateData.type_of_vehicle,
            time:parseInt(updateData.time)
            
        }).then(response =>{
            console.log(response.data.id)
            if(response.data.Message=="Error in assigning order")
                alert("Error message: "+response.data.Message);
            else    
                alert("Successfully updated Driver Id "+response.data.id);
                handleCardClose();
                

        }).catch(error => {
            console.log("Error occured: "+error)
            alert("Error occured");
    });
}


    useEffect(() => {
        console.log("useeffect")
        axios.get(baseURL).then((response) => {
            setData(Object.values(response.data));
            console.log(response.data)
          }).catch(error => {console.log("error n reterving data")});
      },[updateData]);

      
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);


    const handleOrderClick = (driver) => {
      setSelectedDriver(driver);
      setUpdateData(driver);
      setIsPopupVisible(!isPopupVisible);
    };

    const handleCardClose = () => {
        setSelectedDriver(null);
        setUpdateData(null);
        setIsPopupVisible(!isPopupVisible);
    };

    const handleDeleteClick= (driver) => {
        alert("Do you want to delete? ")
        setUpdateData(driver)
        axios.delete(deleteURL+"/"+driver.id)
        .then((response) => {
            console.log("deleted driver ....")
            console.log("Driver ID: ",driver.id)
            setUpdateData(null)
        }).catch(error => {console.log("Error",error)})
        
        
    }
     

    const [openIndex, setOpenIndex] = useState(-1);

       const handleAccordionClick = (index) => {
         setOpenIndex(index === openIndex ? -1 : index);
       };
    
    
    return ( 
    <>
    <Navbar></Navbar>
    <div className="container dark">

        <div className="row card-list">
        {
            data.map(data => {
                console.log("render",data);
                return (

                    <div className="col-md-3 my-3" key={data.id}>
                        <div className="card">
                            <div className="card-header fs-5 trimble-color text-center">{data.name} <i onClick={() => handleOrderClick(data)} className="fa-solid fa-pencil"></i><i onClick={() => handleDeleteClick(data)} className="fa-solid fa-trash  position-absolute end-0 me-3 mt-1"></i></div>
                            <div className="card border-0 m-2 p-2">
                                <div className='key'>Id: <span className='value'>{data.id}</span></div>
                                <div className='key'>Age: <span className='value'>{data.age}</span></div>
                                <div className='key'>Type Of Vehicle: <span className='value'>{data.type_of_vehicle}</span></div>
                                <div className='key'>Time: <span className='value'>{data.time} <span className='text-muted'>(In Hours)</span></span></div>
                                <br />
                                <div id="accordion">
                                            {data.list_of_order.map((order) => (
                                                <div className="card mb-2" key={order.id}>
                                                <div className="card-header" id={`heading${order.id}`}>
                                                    <h5 className="mb-0">
                                                    <button className="btn" onClick={() => handleAccordionClick(order.id)} aria-expanded={order.id === openIndex} aria-controls={`collapse${order.id}`}>
                                                        {order.name}
                                                    </button>
                                                    </h5>
                                                
                                                </div>
                                                <div id={`collapse${order.id}`} className={`collapse ${order.id === openIndex ? 'show' : ''}`} aria-labelledby={`heading${order.id}`} data-parent="#accordion">
                                                    <div className="card-body">
                                                    <div className="">Order ID: <span>{order.id}</span></div>
                                                    <div className="">Order Name: <span>{order.name}</span></div>
                                                    <div className="">Order Destiantion: <span>{order.destination}</span></div>
                                                    <div className="">ETA: <span>{order.ETA}</span></div>
                                                    </div>
                                                </div>
                                                </div>
                                            ))
                                        }
                                        
    </div>


                            </div>
                        </div>
                    
                    </div>);})
        }
            <div>
        {selectedDriver && (
            <div  className="popup card">
                <div className="card-header text-center fs-4 trimble-color">Update Driver Details<button className='fa-solid fa-close close' onClick={handleCardClose}></button></div> 
                <form onSubmit={(e)=>{submit(e)}}>
                <div className="card m-2 p-2">
                    <div className="mb-3">
                    <span className=''>Driver id :<span className='text-muted fs-4'> {selectedDriver.id}</span></span>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="name">Name: </label>
                    <input className="form-control" type="text" onChange={(e)=>handler(e)} name="name" id="name" value={selectedDriver.name} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="age">Age: </label>
                    <input className="form-control" type="number" onChange={(e)=>handler(e)} name="age" id="age" value={selectedDriver.age} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="type_of_vehicle">Type of Vehicle: </label>
                    <input className="form-control" type="text" onChange={(e)=>handler(e)} name="type_of_vehicle" id="type_of_vehicle" value={selectedDriver.type_of_vehicle} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="time">Time</label>
                    <input className="form-control" type="text" onChange={(e)=>handler(e)} name="time" id="time" value={selectedDriver.time} />
                    </div>
                    
                </div>
                <div className="container"><div className="row">
                    <div className="col d-flex justify-content-around"><button className='btn trimble-btncolor' >Submit</button></div>
                    <div className="col d-flex justify-content-around"><button className='btn trimble-btncolor' onClick={handleCardClose}>Cancel</button></div></div></div>
                </form>

                
            </div>)
        }
            </div>
        </div>
    
    </div>
    <div className='container-fluid footer'>
    <Footer></Footer>
    </div>
    
    </>
     );
}