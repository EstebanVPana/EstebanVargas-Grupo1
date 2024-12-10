import React from "react";
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
