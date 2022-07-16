import React, { useState } from "react";
// import Product from './Product';
import data from "../data/products.json";
import App from "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router-dom';
import Prodetail from "./Prodetail";


function Body(props) {
  const [cards, setCards] = useState(
    localStorage.getItem("cards")
      ? JSON.parse(localStorage.getItem("cards"))
      : []
  );
  const cardClickAdd = (event, data) => {
    event.preventDefault();
    let cardStorage = localStorage.getItem("cards");
    let cards = cardStorage ? JSON.parse(cardStorage) : [];
    let exist = cards.find((item) => item.id == data.id);

    let currentCard = data;
    if (exist) {
      let findIndex = cards.findIndex((item) => item.id == data.id);
      cards[findIndex].qty = ++exist.qty;
    } else {
      currentCard.qty = 1;
      cards.push(currentCard);
    }
    localStorage.setItem("cards", JSON.stringify(cards));
    toast.success("Product add successful to card.");
    setCards(cards);
  };
  const deleteCard = (id) => {
    console.log(id);
    let cardStorage = localStorage.getItem("cards");
    let cards = cardStorage ? JSON.parse(cardStorage) : [];
    let findIndex = cards.findIndex((item) => item.id == id);
    cards.pop(findIndex);
    localStorage.setItem("cards", JSON.stringify(cards));
    toast.error("Product remove successful.");
    setCards(cards);
  };
  return (
    <div>
      <Header cards={cards} deleteCard={deleteCard} />
      <Nav />
      <main className="block">
        <div className="container">
          <div className="row">
            {/* <!--HeadPhone product list--> */}
            {data.categories.map((item) => (
              <div className="col-md-12" key={item.id + "-categories"}>
                <h3
                  className="title"
                  style={{
                    color: "black",
                    borderBottom: "2px solid black; margin: 2rem 0 0 0",
                  }}
                >
                  {/* <i className="fas fa-headphones-alt"></i> */}
                  {item.category_name}
                </h3>
                <div className="row">
                  {item.products.map((subItem, index) => (
                    <div className="col-md-3" key={subItem.id + "-sub" + index}>
                      <div className="card">
                      <a>
                        <img className="card-img-top" src={subItem.image} />
                        <Link to="/src/Components/productDetail.js">productDetail</Link>
                        </a>
                        <div className="card-block">
                          <h4 className="card-title text-dark">
                            {subItem.name}
                          </h4>
                          <div className="product-rating">
                            {Array(Math.floor(subItem.rate))
                              .fill()
                              .map((itemRate, index) => (
                                <i
                                  className="fas fa-star text-warning"
                                  key={subItem.id + "-" + item.id + "-" + index}
                                ></i>
                              ))}
                            <span className="text-dark">
                              {subItem.rate}({subItem.reviews} reviews)
                            </span>
                          </div>
                          <p className="card-text">Price: ${subItem.price}</p>
                          <p className="card-text">description:{subItem.description}</p>
                          <a
                            href="#"
                            data-name="BlackBeatsSolo3Wireless"
                            data-price="199.95"
                            className="add-to-cart btn btn-danger"
                            onClick={(e) => cardClickAdd(e, subItem)}
                          >
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
      {/* <Product/> */}
    </div>
  );
}

export default Body;
