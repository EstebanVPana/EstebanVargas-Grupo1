import React from 'react';
import img1 from "../../Img/claudio.png";
import img2 from "../../Img/felipe.jpg"; 
import img3 from "../../Img/esteban.png"; 
import img4 from "../../Img/luis.png"; 

const Contactos = () => {
  const contacts = [
    {
      name: 'Kaio-sama',
      email: 'Kaio-sama@gmail.com',
      phoneNumber: '+0 0000 0000',
      imageUrl: img1
    },
    {
      name: 'Ninja',
      email: 'Ninja@gmail.com',
      phoneNumber: '+12 3456 7890',
      imageUrl: img2
    },
    {
      name: 'Pana',
      email: 'Pana@gmail.com',
      phoneNumber: '+pana de pana',
      imageUrl: img3
    },
    {
      name: 'Zeno-sama',
      email: 'zeno-sama@gmail.com',
      phoneNumber: '+99 9999 9999',
      imageUrl: img4
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center border border-gray-300 p-4 m-4 w-11/12 md:w-3/4 lg:w-1/2 shadow-lg">
          <img src={contact.imageUrl} alt={`${contact.name}'s avatar`} className="w-32 h-32 object-cover mr-4 rounded-lg" />
          <div className="flex-1">
            <h2 className="text-xl font-bold">{contact.name}</h2>
            <p>Email: <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a></p>
            <p>Teléfono: <a href={`tel:${contact.phoneNumber}`} className="text-blue-500">{contact.phoneNumber}</a></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contactos;


