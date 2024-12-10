import { Link } from "react-router-dom"

export default function Item({ id, name, price, img }) {
    return (
        <div className="flex flex-col items-center my-4 mx-4 border border-gray-200 rounded-lg p-4 shadow-md">
            <Link to={`/products/${id}`}>
                <img 
                    src={img} 
                    alt="Imagen Productos" 
                    className="w-full h-auto rounded-md mb-4"
                />
            </Link>
            <Link 
                to={`/products/${id}`} 
                className="text-sm font-bold my-2 tracking-wide uppercase hover:text-yellow-500"
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}
            >
                {name}
            </Link>
            <div>
                <h4 className="text-lg font-extrabold mb-1 text-left">${price}</h4>
            </div>
            <p className="text-sm text-green-600 mt-2">En 12 cuotas de ${Math.round(price / 12)} sin interés</p>
            <p className="text-xs">Envío gratis por ser tu primera compra</p>
        </div>
    )
}


