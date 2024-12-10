import React from "react"
import image1 from "../../Img/sale.png"
import { Link } from "react-router-dom"
import Carousel from "../Carousel/Carousel"


const Home = () => {
    return ( 
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>

            <div className="container pb-8 sm:pb-0" >
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">

                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                        Chiloé Melodico
                                    </h1> 
                                    <p className="text-sm">
                                    Todos los audifonos de baja a mediana y alta gamma, para una maxima experiencia sonora
                                    </p>
                                        <div>
                                            <button
                                            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                            <Link>Ordena Ya</Link>
                                            </button>
                                            </div>
                                        </div>
                                    <div>
                                    <div className="relative z-10">
                                        <img src={image1} alt="" className=" sm:h[450px] sm:w-[450px] sm:scale-125 objet-contain mx-auto
                                        "/>
                                    </div>
                                </div>
                            </div>         
                        </div>
                        <Carousel />
            </div>     
    </div>  
    )
}

export default Home