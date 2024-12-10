import React, { useState } from "react"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, url: "https://http2.mlstatic.com/D_Q_NP_2X_622058-MLU69158501515_042023-V.webp" },
    { id: 2, url: "https://http2.mlstatic.com/D_Q_NP_2X_720559-MLU71926287948_092023-V.webp" },
    { id: 3, url: "https://http2.mlstatic.com/D_Q_NP_2X_649625-MLU77553103157_072024-V.webp" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  };

  return (
    <div className="relative overflow-hidden w-full h-[50vh] max-w-[50%] mx-auto">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-none">
            <img
              src={slide.url}
              alt={`Slide ${slide.id}`}
              className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
      >
        &#10094
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
      >
        &#10095;
      </button>
    </div>
  );
};

const AlbumDescription = () => {
  return (
    <div className="p-6 bg-white text-gray-900 shadow-lg rounded-lg max-w-[25%] ml-4 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Los Vinilos y Su Resurgimiento</h2>
      <p className="text-base mb-4">
        Los discos de vinilo han experimentado un notable resurgimiento en popularidad en los últimos años. A pesar de los avances en tecnología digital, muchos aficionados a la música prefieren la calidez y la riqueza del sonido que ofrecen los vinilos. El proceso de escuchar un vinilo, desde sacar el disco de su funda hasta colocarlo en el tocadiscos, proporciona una experiencia inmersiva y ritualística que los formatos digitales no pueden igualar.
      </p>
      <h3 className="text-xl font-semibold mt-4">Nirvana</h3>
      <p className="text-base mb-2">
        Uno de los vinilos más icónicos es "Nevermind" de Nirvana, conocido por su influyente impacto en la música grunge y su portada inolvidable.
      </p>
      <h3 className="text-xl font-semibold mt-4">Los Bunkers</h3>
      <p className="text-base mb-2">
        El álbum "La Velocidad de la Luz" de Los Bunkers es un ejemplo del valor nostálgico y la riqueza sonora que los vinilos ofrecen a sus fans.
      </p>
      <h3 className="text-xl font-semibold mt-4">Queen</h3>
      <p className="text-base">
        Clásicos como "A Night at the Opera" de Queen destacan por su producción elaborada y su importancia en la historia del rock, siendo buscados tanto por su música como por su arte visual.
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-8">
      <Carousel />
      <AlbumDescription />
    </div>
  )
}

export default App
