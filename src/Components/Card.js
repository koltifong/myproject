import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import payment from "./Privacy";
import {Link} from 'react-router-dom';


const Card = ({ cards,deleteCard }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
  
  
  return (
    <div className="d-flex justify-content-md-center justify-content-end">
      <div className="d-grid text-center p-2 position-relative">
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleShowModal}
        >
          Cart <i className="fas fa-shopping-cart"></i>
          <span className="total-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cards.length}
          </span>
        </button>
      </div>
      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton style={{backgroundColor: 'rgb(74, 8, 8)'} }>
          <Modal.Title style={{color:'white'}}>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="show-cart table">
            <tbody>
              {cards.map((item,key) => (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td style={{minWidth:"50px"}}>
                    <div className="input-group">
                      {/* <button className="minus-item input-group-addon btn btn-primary">
                        -
                      </button> */}
                      <input
                        type="number"
                        className="item-count form-control pr-0 pl-1 text-center"
                        disabled
                        value={item.qty}
                      />
                      {/* <button className="plus-item btn btn-primary input-group-addon" >
                      +
                      </button> */}
                    </div>
                  </td>
                  <td>
                    <button className="delete-item btn btn-danger" onClick={()=>(deleteCard(item.id))}>X</button>
                  </td>
                  <td> {item.price * item.qty}$</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleHideModal} >
          <Link to="/src/Components/payment.js">CheckOut </Link>
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Card;
