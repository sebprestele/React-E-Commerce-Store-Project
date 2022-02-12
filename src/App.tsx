import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "Components/Home/Home";
import About from "Components/About/About";
import Shop from "Components/Shop/Shop";
import Contact from "Components/Contact/Contact";
import Cart from "Components/Cart/Cart";
import "App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
