import React from "react"

const product = () => {
    return (
<div>
    <header id="top-header" >
        <div class="bg-grey top-header-info">
          <div id="top-info">
            <div class="row">
              <div class="col-12 col-sm-6 topinfo">
                <a href="">
                  <span><i class="fas fa-phone text-danger"></i>+855 126 728 66</span>
                </a>
                <a href="">
                  <span><i class="fas fa-envelope text-danger"></i> ll@gmail.com</span>
                </a>
                <a href="">
                  <span><i class="fas fa-map-marker text-danger"></i> Toul kok phnom penh</span>
                </a>
              </div>
              <div class="col-12 col-sm-6 text-end">
                <span><i class="fas fa-dollar-sign text-danger"></i> USD</span>
                <span><i class="fas fa-user text-danger"></i> My Account</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-dark-grey p-3">
          <div class="container bg-dark-grey">
            
            
              <div class="col-12 col-md-3 order-md-1">
                <div class="d-flex justify-content-md-start justify-content-center">
                  <img src="./images/logoTechstoe.png" class="logo" alt="" href="indext.html"/>
                </div>
              </div>
          </div>
        </div>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="file:///C:/Users/Gaming%20Store/Desktop/rathapanhapich/user%20accoount/Manage%20account/personal%20info/personalinfo.html#">Personal Information</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="file:///C:/Users/Gaming%20Store/Desktop/rathapanhapich/user%20accoount/Manage%20account/Check%20out/Checkout.html#">Checkout</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Personal list item</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="file:///C:/Users/Gaming%20Store/Desktop/rathapanhapich/user%20accoount/Manage%20account/Payment%20method/payment.html">Payment  method</a>
                </li>
              </ul>              
          </header>         
    <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img src="img/beats.jpg" width="100%" id="productImg"/>
                <div class="small-img-row">
                    <div class="small-img-col">
                        <img src="img/beats.jpg" width="100%" class="small-img"/>
                    </div>
                    <div class="small-img-col">
                        <img src="img/beats2.jpg" width="100%" class="small-img"/>
                    </div>
                    <div class="small-img-col">
                        <img src="img/beats3.jpg" width="100%" class="small-img"/>
                    </div>
                    <div class="small-img-col">
                        <img src="img/beats4.jpg" width="100%" class="small-img"/>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <p>Home / Heahphone</p>
                <h2>Beats Headphone</h2>
                <h4>$399.00</h4>
                <h6 id="time"></h6>
                <div class = "product-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span>4.8 (revivew)</span>
                        
                   <div class="color">
                       <h9>Color:</h9>
                   </div>      
                    <div class="color-choose">
                        <div>
                            <input type="radio" id="Space-Grey" name="color"/>
                            <label for="Space Grey"><span></span></label>
                            <p>Grey</p>
                        </div>
                        <div>
                            <input type="radio" id="Gold" name="color" checked/>
                            <label for="Gold"><span></span></label>
                            <p>Gold</p>
                        </div>
                        <div>
                            <input type="radio" id="black" name="color"/>
                            <label for="black"><span></span></label>
                            <p>black</p>
                        </div>
                    </div>     
              
                    <div class = "purchase-info">
                        <h6>Oview about item:</h6>
                        <p>
                            High-performance wireless noise cancelling headphones
                            Compatible with iOS and Android devices.
                            Pure adaptive noise canceling (pure ANC) actively blocks external noise
                            Real-time Audio calibration preserves a Premium listening experience
                            Up to 22 hours of battery life enables full-featured all-day wireless playback
                            Apple's W1 chip and industry-leading Bluetooth technology keep you connected farther with fewer drop-outs
                            With fast Fuel, a 10-minute charge gives 3 hours of play when battery is low. 
                            Rechargeable lithium ion battery
                        </p>
                    
                        <div class="order">
                            <input class="btn btn-primary" type="button" value="Order" onclick="Order();"/>
                            <button type="button" class="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p style="text-align: center;"> More items to explore</p>
        <div class="row nana"> 
          <div class="card" style="width: 18rem;">
            <img class="col-4 small-container" src="/img/M337.png" alt="m337"/>
            <div class="card-body">
              <h5 class="card-title">Mouse Logitech | M337</h5>
              <p class="card-text">USe with any Bluetooth enabled computer, laptop or tablet, Mac, Windows.</p>
              <p style="text-decoration: underline;">$29</p>
              <a href="#" class="btn btn-outline-primary">Buy Now</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="col-4  small-container" src="/img/keyboard.jpeg" alt="keyboard"/>
            <div class="card-body">
              <h5 class="card-title">Keyboard Logitech</h5>
              <p class="card-text">it can use with window mac and device who support with smartkeyboard.</p>
              <p style="text-decoration: underline;">$129</p>
              <a href="#" class="btn btn-outline-primary">Buy Now</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="col-4  small-container" src="/img/ROG.png" alt="ROG"/>
            <div class="card-body">
              <h5 class="card-title">ROG Monitor</h5>
              <p class="card-text">HD monitor with oled display watch movies and play game smoothly even low internet.</p>
              <p style="text-decoration: underline;">$329</p>
              <a href="#" class="btn btn-outline-primary">Buy Now</a>
            </div>
          </div>
        </div>
 
    </div>
</div>    
)
}
export default product;