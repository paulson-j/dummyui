import React, { useEffect, useState }  from "react";
import logo from "C:\\react task\\transport-app\\src\\asserts\\logo.svg"
import "./Navbar.css"
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom'
export function Navbar(){
const [credentials, setCredentials] = useState();
const navigate=useNavigate();
useEffect(() => {
    const storedCredentials = localStorage.getItem('User');
    if (storedCredentials) {
      setCredentials((storedCredentials));
    }
    else{
      navigate("/");
      return
    }
    let webToken=storedCredentials.substring(storedCredentials.indexOf(':')+1,storedCredentials.indexOf(','));
    
    console.log(webToken);
    var decoded = jwt_decode(webToken);
    setCredentials(decoded['picture'])

  }, []);
    
  const delcred=()=>{
    localStorage.removeItem("User");
    navigate('/')
  }
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src={logo} alt="brand-logo" width="85px"/>
  <br />
    {/* <a class="navbar-brand" href="#"></a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/home">Driver</a></li>
            <li><a class="dropdown-item" href="/order">Order</a></li>
            <li><a class="dropdown-item" href="/Assignorder">Assign order</a></li>
            {/* <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <button className="btn" onClick={delcred}>logout</button>
      </ul>
      <img class="img"src={credentials} alt="profile pic"></img>
    </div>
  </div>
</nav>  



















                //     <nav className="navbar">
                //     <div className="logo-container">
                //         <img src={logo} alt="Company Logo" className="logo" />
                //     </div>
                //     <ul className="menu">
                //         <li><a href="/">Home</a></li>
                //         <li><a href="/about">About</a></li>
                //         <li><a href="/services">Services</a></li>
                //         <li><a href="/contact">Contact</a></li>
                //         <img src={credentials} alt="profile pic"></img>
                //     </ul>
                // </nav>       
        );
}

// import React, {useState, useEffect} from "react";
// import jwt_decode from "jwt-decode";
// export function Navbar(){

//     const [credentials, setCredentials] = useState();
   
//     useEffect(() => {
//         const storedCredentials = localStorage.getItem('User');
//         console.log(storedCredentials)
//         if (storedCredentials) {
//           setCredentials((storedCredentials));
//         }
//         let webToken=storedCredentials.substring(storedCredentials.indexOf(':')+1,storedCredentials.indexOf(','));
        
//         console.log(webToken);
//         var decoded = jwt_decode(webToken);
//         setCredentials(decoded['picture'])

//       }, []);

//     return(
//         <img src={credentials} alt="profile pic"></img>
//     );
// }