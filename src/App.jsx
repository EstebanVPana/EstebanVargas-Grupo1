import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Vinilos from "./components/Vinilos/Vinilos";
import Contactos from "./components/Contactos/Contactos";
import Cart from "./components/Cart/Cart";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Carousel from "./components/Carousel/Carousel";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Vinilos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ItemDetail />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

