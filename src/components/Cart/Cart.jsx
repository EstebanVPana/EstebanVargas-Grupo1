import React from 'react';
import { Link } from 'react-router-dom';
import useProductStore from '../../store/store';

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useProductStore();

  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const total = calculateTotal(cart);

  return (
    <div className="container mx-auto max-w-[1170px] p-4">
      <h1 className="text-[30px] md:text-[45px] font-medium uppercase mb-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p className="text-[20px] my-[20px]">Tu carrito está vacío</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            {cart.map((item, index) => (
              <div key={index} className="border-b py-[10px] flex items-center space-x-4">
                <img src={item.img} alt={`${item.name}`} className="w-32 h-32 object-cover mr-4 rounded-lg" />
                <div className="flex-1">
                  <p className="text-[20px] font-medium">{item.name}</p>
                  <p className="text-[16px] md:text-[20px]">Precio: ${item.price}</p>
                  <div className="flex items-center space-x-2 my-2">
                    <button 
                      onClick={() => decrementQuantity(item.id)} 
                      className="rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[30px] md:w-[40px] border-[1px] text-[16px] md:text-[20px] flex justify-center"> - 
                    </button>
                    <p className="text-[16px] md:text-[20px] px-[10px]">{item.quantity}</p>
                    <button 
                      onClick={() => incrementQuantity(item.id)} 
                      className="rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[30px] md:w-[40px] border-[1px] text-[16px] md:text-[20px] flex justify-center"> + 
                    </button>
                  </div>
                  <div className="flex space-x-4">
                    <button 
                      className="text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <p className="text-[16px] md:text-[20px] font-bold">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="col-span-1 p-4 border rounded-lg shadow-lg">
            <h2 className="text-[20px] md:text-[30px] font-medium mb-4">Resumen del Pedido</h2>
            <p className="text-[16px] md:text-[20px]">Total: ${total}</p>
            <p className="text-[16px] md:text-[20px] my-2">Envío: $6,390</p>
            <p className="text-[16px] md:text-[20px] my-2 font-bold">Total Final: ${total + 6390}</p>
            <Link to="/products">
              <button 
                className="w-full bg-[#171e27] text-[#ffffff] text-[16px] md:text-[20px] px-[20px] py-[5px] hover:bg-[#172625] mt-4"
              >
                Continuar comprando
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;





