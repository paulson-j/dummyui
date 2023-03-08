import React  from "react";
import "./Footer.css";
import logo from "C:\\react task\\transport-app\\src\\asserts\\TrimbleR-Horiz-RGB-White.svg";
import facebook from "C:\\react task\\transport-app\\src\\asserts\\facebook.png";
import twitter from "C:\\react task\\transport-app\\src\\asserts\\twitter.png";
export function Footer() {
    return (
      <footer class="dark text-light bg-dark">
      <div class="container-fluid mt-5">
        <div class="row ">
          <div class="col-md-3 p-4 dark">
            <img src={logo} class="img-fluid" alt="Your Logo" height="40px"/>
          </div>
          <div class="col-md-6 p-4 dark">
            <p class="">Transforming the way the world works. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt necessitatibus impedit excepturi explicabo corrupti, molestiae ipsum, eligendi harum qui obcaecati fuga laboriosam voluptatibus amet sit alias ducimus repudiandae numquam. Voluptatem?</p>
          </div>
          <div class="col-md-3 p-4 dark">
            <p>Follow us:</p>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="https://www.facebook.com/TrimbleCorporate/"><i class="fab fa-facebook"></i></a></li>
              <li class="list-inline-item"><a href="https://twitter.com/TrimbleCorpNews"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-md-6">
            <p>&copy; 2023 Your Company</p>
          </div>
          <div class="col-md-6">
            <ul class="list-inline float-md-right">
              <li class="list-inline-item"><a href="#">Terms of Use</a></li>
              <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>





































    //  <footer className="footer">
    //    <div className="logo-container">
    //      <img src={logo} alt="Company Logo" className="logo" />
    //      <p className="company-name">© 2023 Your Company</p>
    //    </div>
    //    <div className="footer-content">
    //        <p>Trimble is an industrial technology company transforming the way the world works by delivering solutions that enable our customers to thrive. Core technologies in positioning, modeling, connectivity and data analytics connect the digital and physical worlds to improve productivity, quality, safety, transparency and sustainability. From purpose built products to enterprise lifecycle solutions, Trimble is transforming industries such as agriculture, construction, geospatial and transportation</p>
    //    </div>
    //    <div className="social-media-icons">
    //      <a href="https://www.facebook.com/TrimbleCorporate/" target="_blank" rel="noreferrer">
    //        <img src={facebook} alt="Facebook" className="social-media-icon" />
    //      </a>
    //      <a href="https://twitter.com/TrimbleCorpNews" target="_blank" rel="noreferrer">
    //        <img src={twitter} alt="Twitter" className="social-media-icon" />
    //      </a>
    //    </div>
    //  </footer>
   );
  }
  
