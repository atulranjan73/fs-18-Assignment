import React from "react";

function Cart({ img, title, price, quantity, inc, dec, rm }) {
  return (
    <div className="cart-item">
      <div className="Cardimg">
        <img src={img} alt={title} />
      </div>
      <div className="Cardtitle">
        <h2>{title}</h2>
      </div>
      <div className="Cardprice">
        <p>{price}Rs</p>
      </div>
      <div className="quantity">
        <button onClick={inc}>+</button>
        <p>{quantity}</p>
        <button onClick={dec}>-</button>
      </div>
      <div className="rm">
        <button onClick={rm}>remove</button>
      </div>
    </div>
  );
}

export default Cart;
