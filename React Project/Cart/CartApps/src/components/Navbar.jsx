import React from "react";

function Navbar({total}) {
  return (
    <nav className="navbar">
      <h1>My Shop</h1>
      <div className="total">
        <p>Total Price: {total} Rs</p>
      </div>
    </nav>
  );
}

export default Navbar;
