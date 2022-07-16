// import { Modal } from "@material-ui/core";
import { useState } from "react";
import { Button, Nav } from 'react-bootstrap';
// import { Modal } from 'react-bootstrap';
import Body from './Components/Body'
import detail from './Components/detail.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Prodetail from "./Components/Prodetail";
import Payment from "./Components/Payment";
import Privacy from "./Components/Privacy";
// import {logTechstore} from "../public/manifest.json";
//import { images } from "/src/images"
function App(){
  
  return (
   <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Body/>}/>
        <Route exact path="/privacy" element={<Privacy/>}/>
        {/* <Route exact path="/productDetail" name="todo.edit" element={<productDetail/>}/> */}
        <Route  exact path="prodetail" element={<Prodetail />} />
        <Route  exact path="payment" element={<Payment />} />
     </Routes>
   </BrowserRouter>
  );
};

export default App;
