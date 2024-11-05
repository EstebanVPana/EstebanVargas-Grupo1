import React from "react";
import Banner from "../../assets/Imagenes-portada/footer.jpg"

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa"

const BannerImg ={
    backgroundImage :`url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"100%",
    width:"100%",
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "Vinilos",
        link: "/#about",
    },
    {
        title: "Productos",
        link: "/#contact",
    },
    {
        title: "Electronicos",
        link: "/blog",
    },
]
const FooterLinks1 = [
    {
        title: "Contactos",
        link: "/#",
    },
    {
        title: "Accesibilidad",
        link: "/#about",
    },
    {
        title: "Terminos y Condiciones",
        link: "/#contact",
    },
    {
        title: "Trabaja con Nosotros",
        link: "/blog",
    },
]

const Footer = () => {
    return (
        <div style={BannerImg} className="text-white ">
            <div className="container">
                <div data-aos="zomm-in" className="grid md:grid-cols-3 pb-44 pt-5">
                {/* comienzo de la pagina */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">Logo de musica
                    </h1>
                    <p>
                        una buena
                    </p>
                </div>
                {/* links del fotter y cuerpo*/}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Productos mas Buscados
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {
                                FooterLinks.map((link) => (
                                    <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3"> Informacion Sobre los
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {
                                FooterLinks1.map((link) => (
                                    <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        </div>
                    </div>

                    {/* grupos sociales como facebook etc*/}
                    <div>
                        <div className="flex">
                            <a href="#">
                                <FaInstagram className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl"/>
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>ULagos El mejor pais de chile</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>+ 56 9 2980 8070</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer