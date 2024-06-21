import { useState } from "react";
import "./App.css";

function Cart() {
  const [products] = useState([
    { id: 1, name: "product-1", price: 100 },
    { id: 2, name: "product-2", price: 150 },
    { id: 3, name: "product-3", price: 200 }
  ]);

  const [cart, setCart] = useState([]);

  const handleIncrement = (id) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const product = products.find((product) => product.id === id);
      return [...prevCart, { id, quantity: 1, price: product.price }];
    });
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          return prevCart.filter((item) => item.id !== id);
        }
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart;
    });
  };

  const getQuantity = (id) => {
    const product = cart.find((item) => item.id === id);
    return product ? product.quantity : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="container">
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="item">
              <div className="name">{product.name}</div>
              <div className="price">
                <p>{product.price}</p>
              </div>
              <div className="btn">
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <p>{getQuantity(product.id)}</p>
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart">
        <h1>Cart</h1>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <li key={item.id}>
                    {product.name} - : {item.quantity} x {item.price * item.quantity}
                  </li>
                );
              })}
            </ul>
            <h2>Total Price: {getTotalPrice()}</h2>
          </>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
