import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
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

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App