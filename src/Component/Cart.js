import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import { Contex } from "../App";

const Cart = () => {
  const { cart, setopencart, setcart } = useContext(Contex);
  return ReactDOM.createPortal(
    <div
      className="cart-container"
      onClick={() => {
        setopencart(false);
      }}
    >
      <div className="cart">
        <center>
          <h1>Cart item</h1>
        </center>
        <div>
          <div>Name</div>
          <div>Description</div>
          <div>Price</div>
          <div>Quantity</div>
        </div>
        <br></br>
        {Object.keys(cart).map((m, i) => {
          return (
            <div key={i.toString()}>
              <div>{cart[m].name}</div>
              <div>{cart[m].des}</div>
              <div>{cart[m].price}</div>
              <div>{cart[m].quantity}</div>
            </div>
          );
        })}

        <footer
          className="footer"
          onClick={() => {
            console.log(cart);
            setcart({});
          }}
        >
          <div>Place order</div>
        </footer>
      </div>
    </div>,
    document.getElementById("root-cart")
  );
};

export default Cart;
