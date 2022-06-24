import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Cart from "./components/Cart";
import {CartProvider} from 'react-use-cart'

function App() {
  return (
    <div>
      <CartProvider>
      <Home/>
      <Cart/>
      </CartProvider>
    </div>
  );
}

export default App;
