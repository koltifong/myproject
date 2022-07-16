import React from "react"

import { useState } from "react";
import Header1 from "./Header1";
import Input from "./Input";
import Footer from "./Footer";

const Payment =()=>{


  const[Nameoncard, setNameoncard]=useState("");
  const[Cardnumber, setCardnumber]=useState("");
  const[expmonth, setexpmonth]=useState("");
  const[expyear, setexpyear]=useState("");
  const[CVV, setcvv]=useState("");
  const[message, setmessage]=useState("");
   


 const onChangeCardnumber = (Event)=>{
      setCardnumber(Event.target.value);
 }

 const onChangeNameoncard = (Event)=>{
  setNameoncard(Event.target.value);
}

const onChangeexpmonth = (Event)=>{
  setexpmonth(Event.target.value);
}
const onChangeexyear = (Event)=>{
  setexpyear(Event.target.value);
}
const onChangeCVV = (Event)=>{
  setcvv(Event.target.value);
}
    const onClick=()=>{
      setmessage("");
      if(Nameoncard === "" || Nameoncard===null){
        setmessage("Please fill Name-On-card first !!!");
      }else if(Cardnumber === "" || Cardnumber===null){
        setmessage("Cardnumber cannot be blank!!!");
      
      }else if(expmonth === "" || expmonth===null){
        setmessage("Exp Month cannot be blank!!");
      
      }else if(expyear === "" || expyear===null){
        setmessage("Exp Year cannot be blank!!");
      
      }else if(CVV === "" || CVV===null){
        setmessage("CVV must not be blank!!");
      
      }
    }
  
    return(
      <body>
<Header1/>
    
           <div class="row din">
                  <div class="col-75">
                    <div class="contain">
           
                            <div class="row">
                          <div class="col-50 ">
                            <h1 className="pay" style={{color:"black"}}>Payment</h1>
                            <h4 for="fname" className="l" style={{color:"black"}}>Accepted Nameoncards</h4>
                            <div class="icon-container">
                              <i class="fab fa-cc-visa"  ></i>                                             
                              <i class="fab fa-cc-masterNameoncard" ></i>                  
                            </div>
                            <div className="lol">
                            <label for="cname" style={{color:"black"}}>Name on Nameoncard</label>
                            <Input type="text" id="cname" name="cname"
                                  value={Nameoncard}
                                  onChange={onChangeNameoncard} /> 
                                
                               
                            <label for="ccnum" style={{color:"black"}}>Credit Nameoncard number</label>
                            <Input  type="text" id="ccnum" name="ccnum" 
                                    value={Cardnumber}
                                    onChange={onChangeCardnumber}/>
                                 
                            <label for="expmonth" style={{color:"black"}}>Exp Month</label>
                            <Input type="text" id="expmonth" name="expmonth"
                                  value={expmonth}
                                  onChange={onChangeexpmonth} /> 
                           
                            <div class="row">
                              <div class="col-50">
                                <label for="expyear" style={{color:"black"}}>Exp Year</label>
                                <Input type="text" id="expyear" name="expyear"
                                  value={expyear}
                                  onChange={onChangeexyear} /> 
                              </div>
                              <div class="col-50">
                                <label for="cvv" style={{color:"black"}}>CVV</label>
                                <Input type="text" id="expyear" name="expyear"
                                  value={CVV}
                                  onChange={onChangeCVV} /> 
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                     
    
                        <label style={{color:"blue"}}>
                          <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                        </label>
                        
                        <br/>
                        <br/>
                        {message !== "" && <div style={{color:"red",paddingBottom:12 ,fontSize:20}}>{message}</div>}
                        <button onClick={onClick} type="submit" class="btn">Continue to checkout</button>
                      
                    </div>
                  </div>
                
                </div>
              <Footer/>
      </body>);



};
export default Payment;