import React from "react";
// import Modal from './Modal'
import Nav from "./Nav";
import Card from "./Card.js";
// import "./App.css";
function Header1() {
  return (
    <div>
      <header id="top-header">
        <div className="bg-grey top-header-info">
          <div className="container" id="top-info">
            <div className="row">
              <div className="col-12 col-sm-6">
                {/* <a onClick={phoneCall}>
                  <span>
                    <i className="fas fa-phone text-danger"></i>+855 963184879
                  </span>
                </a> */}
                {/* <a onClick={emial}>
                  <span>
                    <i className="fas fa-envelope text-danger"></i>
                    reaksmey.ponloeu@gmail.com
                  </span>
                </a> */}
                {/* <a onClick={address}>
                  <span>
                    <i className="fas fa-map-marker text-danger"></i> Toul kok
                    23st phnom penh
                  </span>
                </a> */}
              </div>
              <div className="col-12 col-sm-6 text-end">
                <span>
                  <i className="fas fa-globe text-danger"></i>
                  <a href="#">Language </a>
                </span>
                <span>
                  <i className="fas fa-user text-danger"></i>
                  <a href="">My Account</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark-grey p-3">
          <div className="container bg-dark-grey">
            <div className="row">
              {/* Logo Image */}
              <div className="col-12 col-md-3 order-md-1">
                <div className="d-flex justify-content-md-start justify-content-center">
                  <img
                    src="./images/logoTechstoe.png"
                    className="logo"
                    alt=""
                    href="indext.html"
                  />
                </div>
              </div>

              {/* Cart and wishlist */}
              {/* <Modal/> */}

              {/* Search box */}
              <div className="col-12 col-md-6 search-box order-md-2">
                <div className="input-group mb-3 overflow-hidden">
                  <span className="input-group-text p-0 category-box">
                    <select
                      className="form-select text-center"
                      aria-label="Default select example"
                    >
                      <option defaultValue value="all">
                        {" "}
                        All Category
                      </option>
                      <option value="1">Laptop</option>
                      <option value="2">Headset</option>
                      <option value="2">Mouse</option>
                      <option value="2">Monitor</option>
                    </select>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search your product"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-danger search-box-button px-4"
                    type="button"
                  >
                    Search
                  </button>
             
                </div>
              </div>
              <div className="col-12 col-md-3 order-md-3">

              </div>
            </div>
          </div>
        </div>
     
      </header>
      <Nav/>
    </div>  
  );
}
export default Header1;
