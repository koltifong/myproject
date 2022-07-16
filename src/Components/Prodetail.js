import React from "react"

const Prodetail=()=>{

return(
<div>
    <div className="small-container single-product">
        <div className="row">
            <div className="col-2">
                <img src="img/beats.jpg" width="100%" id="productImg"/>
                <div className="small-img-row">
                    <div className="small-img-col">
                        <img src="img/beats.jpg" width="100%" className="small-img"/>
                    </div>
                    <div className="small-img-col">
                        <img src="img/beats2.jpg" width="100%" className="small-img"/>
                    </div>
                    <div className="small-img-col">
                        <img src="img/beats3.jpg" width="100%" className="small-img"/>
                    </div>
                    <div className="small-img-col">
                        <img src="img/beats4.jpg" width="100%" className="small-img"/>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <p>Home / Heahphone</p>
                <h2>Beats Headphone</h2>
                <h4>$399.00</h4>
                <h6 id="time"></h6>
                <div className = "product-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span>4.8 (revivew)</span>
                       
                   <div className="color">
                       <h5>Color:</h5>
                   </div>      
                    <div className="color-choose">
                        <div>  <label for="Space Grey"><span>
                            <input type="radio" id="Space-Grey" name="color"/>
                          </span></label>
                            <p>Grey</p>
                        </div>
                        <div>
                            <label for="Gold"><span>
                            <input type="radio" id="Gold" name="color" checked/>
                            </span></label>
                            <p>Gold</p>
                        </div>
                        <div>  <label for="black">
                            <input type="radio" id="black" name="color"/>
                          <span></span></label>
                            <p>black</p>
                        </div>
                    </div>     
                   
                    <div className = "purchase-info">
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
                        <label for="quantity">Quantity:<br/>
                        <input type="number" id="quantity" name="quantity" min="1" max="99" placeholder="1"/>   
                        </label>
                    </div>
                   
                        <div className="order">
                            <input className="btn btn-primary" type="button" value="Order"/>
                            <button type="button" className="btn btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p style="text-align: center;"> More items to explore</p>
        <div className="row nana"> 
          <div className="card" style={{width: 18}}>
            <img className="col-4 small-container" src="/img/M337.png" alt="m337"/>
            <div className="card-body">
              <h5 className="card-title">Mouse Logitech | M337</h5>
              <p className="card-text">USe with any Bluetooth enabled computer, laptop or tablet, Mac, Windows.</p>
              <p style={{textdecoration: "underline"}}>$29</p>
              <a href="#" className="btn btn-outline-primary">Buy Now</a>
            </div>
          </div>
          <div className="card" style={{width: 18}}>
            <img className="col-4  small-container" src="/img/keyboard.jpeg" alt="keyboard"/>
            <div className="card-body">
              <h5 className="card-title">Keyboard Logitech</h5>
              <p className="card-text">it can use with window mac and device who support with smartkeyboard.</p>
              <p style={{textdecoration: "underline"}}>$129</p>
              <a href="#" className="btn btn-outline-primary">Buy Now</a>
            </div>
          </div>
          <div className="card" style={{width: 18}}>
            <img className="col-4  small-container" src="/img/ROG.png" alt="ROG"/>
            <div className="card-body">
              <h5 className="card-title">ROG Monitor</h5>
              <p className="card-text">HD monitor with oled display watch movies and play game smoothly even low internet.</p>
              <p style={{textdecoration: "underline"}}>$329</p>
              <a href="#" className="btn btn-outline-primary">Buy Now</a>
            </div>
          </div>
        </div>
        </div>
)
}
export default Prodetail;