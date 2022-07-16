import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import Privacy from "./Privacy";

function Footer() {
    return (
    <div>  
    <footer id="footer">
      {/* <!-- top footer --> */}
      <div className="section">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-6 col-md-6">
              <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>
                  This website was create by ITE students at RUPP, Website was
                  create in porpuse for study and practice in subject Project
                  Practicum
                </p>
                <ul className="footer-links">
                  {/* <li>
                    <a onClick={address}
                      ><i className="fa fa-map-marker"></i>Toul Khok 23st Phnom
                      Penh</a>
                  </li> */}
                  {/* <li>
                    <a onClick={phoneCall}
                    ><i className="fa fa-phone"></i>+855963184879</a>
                  </li> */}
                  {/* <li>
                    <a onClick={emial}
                      ><i className="fa fa-envelope-o"></i>
                      reaksmey.ponloeu@email.com </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-md-6">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><Link to="/Privacy">Privacy</Link></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>  
            <div id="bottom-footer" className="section">
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="copyright">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                <script>
                  document.write(new Date().getFullYear());
                </script>
                All rights reserved | This template is made with
                <i className="fa fa-heart-o" aria-hidden="true"></i> by
                <a href="http://www.rupp.edu.kh/fe/" target="_blank">RUPP</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </span>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /bottom footer --> */}
    </footer>
       </div>
    )
}
export default Footer;