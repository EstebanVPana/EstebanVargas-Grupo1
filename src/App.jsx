import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
<<<<<<< HEAD
import Footer from "./components/Footer/Footer"
import Vinilos from "./components/Vinilos/Vinilos"
import Contactos from "./components/Contactos/Contactos"
import Cart from "./components/Cart/Cart"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import Carousel from "./components/Carousel/Carousel"
import Nosotros from "./components/Nosotros/Nosotros"

function App() {
=======
import Products from './components/Products/Products'
import Footer from "./components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"


function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])

>>>>>>> 9f0a2bcc723becd9a28894aef414449d021cde4a
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/products" element={<Vinilos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ItemDetail />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/nosotros" element={<Nosotros />} />
=======
          <Route path="/products" element={<Products />} />
>>>>>>> 9f0a2bcc723becd9a28894aef414449d021cde4a
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
<<<<<<< HEAD
  );
}

export default App






=======
  )
}

export default App
>>>>>>> 9f0a2bcc723becd9a28894aef414449d021cde4a
