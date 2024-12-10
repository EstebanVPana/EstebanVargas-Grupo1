import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../data/asyncMock.jsx";
import Loading from "../Loading/Loading.jsx";
import useProductStore from "../../store/store";

const ItemDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);  // Inicia con null
    const [loading, setLoading] = useState(true);
    const { addToCart } = useProductStore();

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (product && quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const precioTotal = product ? product.price * quantity : 0;

    const handleAddToCart = () => {
        if (product) {
            addToCart({ ...product, quantity });
            navigate("/cart");
        }
    };

    if (loading) {
        return <div className="container mx-auto max-w-[1170px]"><Loading /></div>;
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="container mx-auto max-w-[1170px] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className="w-full rounded-[20px]" />
                </div>
                <div>
                    <h1 className="text-[30px] md:text-[45px] font-medium uppercase">{product.name}</h1>
                    <p className="text-[16px] md:text-[20px] my-[20px]">{product.despcription}</p>
                    <p className="text-[16px] md:text-[20px] my-[20px]">Stock: {product.stock}</p>

                    <div className="flex items-center space-x-2 my-4">
                        <button onClick={decrementQuantity} className="rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[40px] md:w-[50px] border-[1px] text-[16px] md:text-[20px] flex justify-center"> - </button>
                        <p className="text-[16px] md:text-[20px] px-[10px]">{quantity}</p>
                        <button onClick={incrementQuantity} className="rounded-[5px] hover:bg-slate-600 hover:text-[#ffffff] w-[40px] md:w-[50px] border-[1px] text-[16px] md:text-[20px] flex justify-center"> + </button>
                    </div>

                    <p className="text-[16px] md:text-[20px] my-[20px]">Precio: ${product.price} por unidad</p>
                    <p className="text-[16px] md:text-[20px] my-[20px]">Precio Total: ${precioTotal}</p>
                    <button onClick={handleAddToCart} className="bg-[#171e27] text-[#ffffff] text-[16px] md:text-[20px] px-[20px] py-[5px] hover:bg-[#172625]">Añadir al Carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;


