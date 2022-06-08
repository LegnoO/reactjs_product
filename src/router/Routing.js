import { Routes, Route } from "react-router-dom";

import FormLogin from "./../pages/FormLogin";
import Register from "./../pages/Register";
import HomePage from "./../pages/HomePage";
import Header from "./../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import Product from "./../pages/Product/Product";
import Detail from "../pages/detail/DetailProduct";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/Product" element={<Product />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/:slug/:product_id" element={<Detail />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/" element={<FormLogin />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routing;
