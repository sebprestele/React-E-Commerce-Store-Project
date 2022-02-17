import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "Components/Home/Home";
import About from "Components/About/About";
import Shop from "Components/Shop/Shop";
import Contact from "Components/Contact/Contact";
import Cart from "Components/Cart/Cart";
import "App.css";
import ProductDetailsPage from "Components/Products/ProductDetailsPage";
import Wishlist from "Components/Wishlist/Wishlist";
import Account from "Components/Account/Account";
import Checkout from "Components/Checkout/Checkout";
import Confirmation from "Components/Checkout/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/checkout/success" element={<Confirmation />}></Route>
        <Route path="/products/:name" element={<ProductDetailsPage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
