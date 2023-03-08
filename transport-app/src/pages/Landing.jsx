import { GoogleOAuthProvider } from "@react-oauth/google";
import React  from "react";
import "./Landing.css"
import "./Navbar.css"
import {Footer} from '../component/Footer'
import logo from "C:\\react task\\transport-app\\src\\asserts\\logo.svg"
import { Login } from "./Login";
export function Landing(){
    return ( 
        <div>
            <nav>
                <div className="logo">
                <img src={logo} alt=""></img> 
                </div>
                <div className="login">
                   {/* <button>login</button> */}
                   <GoogleOAuthProvider clientId="109450856637-gh7250f9pmkr9j1m7pt9e7vjladkhfs8.apps.googleusercontent.com"><Login></Login></GoogleOAuthProvider>
                </div>
            </nav> 
        <div class="main-content">
        <div class="main-content-image"> 
            <img src="https://www.dispatchtrack.com/hubfs/saas%20logistics%20software.webp" alt="..." />
        </div>
        <div class="main-content-text">
            <div class="main-content-title"> Trimble Transport</div>
            <div>Up until now, there’s been too much “work” in the way we work. That’s why we’re taking a new approach.</div>
            <div>Now, teams can push their work forward with Trimble, knowing that it is good for the job, good for the planet, and good for the communities they serve.</div>
        </div>
    </div>
    <Footer></Footer>
  </div>
    );
}

