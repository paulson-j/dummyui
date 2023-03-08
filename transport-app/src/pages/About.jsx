import React from 'react'
import about from 'C:\\react task\\transport-app\\src\\asserts\\about.png';
import { Navbar } from '../component/Navbar';
import {Footer} from '../component/Footer';
import "./About.css";
export function About() {
    return ( 
        <>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="title mt-5"><h1 className='text-muted'><span className='border-bottom border-5'>About</span> Us</h1></div>
                    <div className="body mt-3 text-center">
                        <em>
                        Our industry-leading solutions are transforming the way carriers, shippers and brokers operate across the supply chain continuum. 
                        Trimble technology empowers transportation stakeholders—drivers, carriers, intermediaries and shippers—to improve collaboration, maximize resource utilization and freight coverage, and transform the world's supply chain for everyone it serves.
                        </em>
                        <br />
                        <button className='mt-3 btn trimble-btncolor' onClick={()=>{window.open('https://trimble.com', '_blank')}}> Know more </button>
                    </div>
                </div>
                <div className="col-sm-6">
                <img className='mt-5' src={about} alt="" width='100%'/>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
     );
}

