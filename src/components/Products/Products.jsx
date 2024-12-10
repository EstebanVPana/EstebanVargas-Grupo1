import React from "react";
import Img1 from "../../assets/Imagenes-portada/audifonos.jpg"
import Img2 from "../../assets/Imagenes-portada/audifonos1.png"
import Img3 from "../../assets/Imagenes-portada/audifonos2.png"
import Img4 from "../../assets/Imagenes-portada/audifonos3.png"
import Img5 from "../../assets/Imagenes-portada/audifonos4.png"
import { FaStar } from "react-icons/fa6"
import { Link } from "react-router-dom"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Auriculares Inalámbricos Jbl Tune 720bt Bluetooth Amv Color ",
        rating: 5.0,
        aosDelay:"0",
    },
    {
        id: 2,
        img: Img2,
        title: "Audífonos Inalámbricos Con Noise Cancelling Wh-ch720",
        rating: 4.7,
        aosDelay:"0",
    },
    {
        id: 3,
        img: Img3,
        title: "Audifonos Gamer Razer Blackshark V2 X Blanco 7.1 Sorround",
        rating: 4.2,
        aosDelay:"0",
    },
    {
        id: 4,
        img: Img4,
        title: "Audífonos Sony ZX Series MDR-ZX110AP Color Negro",
        rating:4.5,
        aosDelay:"0",
    },
    {
        id: 5,
        img: Img5,
        title: "Audifonos Inalambricos Bluetooth Sleve Evo Blue Color Azul",
        rating: 4.0,
        aosDelay:"0",
    },
]

const Products = () => {
    return (
    <div className="mt-14 mb-12">
        <div className="container">
            {/* cabeza de los productos de la pagina escritos*/}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-sm text-primary">Productos de audifonos</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Productos</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">exclusivos con mejores garantia por 1 año   </p>
            </div>
                {/* cuerpo de los productos y parecido a la carta */}
                <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {/* ejercisio para la carta */}
                    {ProductsData.map((data) => (
                            <div
                            data-aos= "fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id} 
                            className="space-y-3">
                                <Link><img 
                                src={data.img} 
                                alt="" 
                                className="h-[220px] w-[150px] object-cover rounded-md"/>
                                </Link>
                                <div>
                                    <h3 className="font-semibold">{data.title} </h3>
                                    <p className="text-sm text-gray-600">{data.color}</p>
                                    <div className="flex items-center ga`-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Products