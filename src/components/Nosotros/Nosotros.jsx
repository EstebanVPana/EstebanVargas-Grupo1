import React from 'react'
import claudioImg from '../../Img/claudio.png'
import estebanImg from '../../Img/esteban.png'
import felipeImg from '../../Img/felipe.jpg'
import luisImg from '../../Img/luis.png'

const Nosotros = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Nosotros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-lg mb-4">
            Bienvenido a <strong>Vinilos Vintage</strong>, tu tienda especializada en vinilos de todas las épocas y géneros. Somos un equipo apasionado por la música y dedicados a ofrecer una experiencia única a nuestros clientes.
          </p>
          <p className="text-lg mb-4">
            Nuestra misión es revivir la magia de la música en vinilo, proporcionando una amplia selección de discos de alta calidad y un servicio excepcional. Ya seas un coleccionista experimentado o un amante de la música que explora el mundo de los vinilos por primera vez, tenemos algo para ti.
          </p>
          <p className="text-lg mb-4">
            En Vinilos Vintage, creemos en el poder de la música para conectar personas y crear recuerdos duraderos. Visítanos en nuestra tienda física o explora nuestra colección en línea. ¡Nos encantaría ayudarte a encontrar el vinilo perfecto para tu colección!
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
        <p className="text-lg mb-4">
          Nuestro equipo está compuesto por expertos en música y vinilos, todos ellos con una profunda pasión por el formato. Estamos aquí para asesorarte y ayudarte a descubrir nuevos tesoros musicales.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <img src={claudioImg} alt="Claudio" className="w-32 h-32 object-cover rounded-full shadow-lg mb-2" />
            <p className="text-lg font-medium">Claudio</p>
            <p className="text-sm text-gray-500">Fundador & CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={estebanImg} alt="Esteban" className="w-32 h-32 object-cover rounded-full shadow-lg mb-2" />
            <p className="text-lg font-medium">Esteban</p>
            <p className="text-sm text-gray-500">Gerente de Ventas</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={felipeImg} alt="Felipe" className="w-32 h-32 object-cover rounded-full shadow-lg mb-2" />
            <p className="text-lg font-medium">Felipe</p>
            <p className="text-sm text-gray-500">Especialista en Vinilos</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={luisImg} alt="Luis" className="w-32 h-32 object-cover rounded-full shadow-lg mb-2" />
            <p className="text-lg font-medium">Luis</p>
            <p className="text-sm text-gray-500">Asesor de Música</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros

