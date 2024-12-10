import React from "react";
<<<<<<< HEAD
import Banner from "../../Img/footer.jpg";
import logo from "../../Img/1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "Vinilos", link: "/#about" },
    { title: "Productos", link: "/#contact" },
    { title: "Electrónicos", link: "/blog" },
];

const FooterLinks1 = [
    { title: "Contactos", link: "/#" },
    { title: "Accesibilidad", link: "/#about" },
    { title: "Términos y Condiciones", link: "/#contact" },
    { title: "Trabaja con Nosotros", link: "/blog" },
];

const Footer = () => {
    return (
        <div style={BannerImg} className="text-white">
            <div className="container mx-auto py-8 px-4">
                <div className="grid md:grid-cols-3 pb-12 pt-5">
                    {/* Logo y descripción */}
                    <div className="py-8 px-4 text-center md:text-left">
                        <img src={logo} className="w-24 mb-4 mx-auto md:mx-0" alt="Logo" />
                        <h2 className="text-lg font-bold text-blue-400">Elige cómo pagar</h2>
                        <p className="text-sm">
                            Con Mercado Pago, paga con tus tarjetas de débito y crédito o hazlo con efectivo en puntos de pago. Paga siempre desde Mercado Libre para que podamos asegurar tu dinero.
                        </p>
                        <p className="text-sm">Cómo pagar con Mercado Pago</p>
                    </div>
                    {/* Enlaces del footer */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 col-span-2 gap-8">
                        <div className="py-8 px-4">
                            <h2 className="sm:text-2xl text-xl font-bold text-blue-400 mb-3">Productos más Buscados</h2>
                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                                        <a href={link.link}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="py-8 px-4">
                            <h2 className="sm:text-2xl text-blue-400 text-xl font-bold mb-3">Información</h2>
                            <ul className="flex flex-col gap-3">
                                {FooterLinks1.map((link) => (
                                    <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                                        <a href={link.link}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Redes sociales y contacto */}
                    <div className="py-8 px-4">
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="text-3xl hover:text-primary duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-3xl hover:text-primary duration-300">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-3xl hover:text-primary duration-300">
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <FaLocationArrow />
                                <p>ULagos, El mejor país de Chile</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMobileAlt />
                                <p>+56 9 2980 8070</p>
=======
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
>>>>>>> 9f0a2bcc723becd9a28894aef414449d021cde4a
                            </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
            </div>
        </div>
    );
};

export default Footer;
=======
                </div>
            </div>
        </div>
    )
}

export default Footer
>>>>>>> 9f0a2bcc723becd9a28894aef414449d021cde4a
