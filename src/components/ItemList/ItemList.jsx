import React, { useState, useEffect } from "react"
import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import Loading from "../Loading/Loading"

const ItemList = ({ products: initialProducts }) => {
    const [products, setProducts] = useState(initialProducts || [])
    const [loading, setLoading] = useState(!initialProducts)
    const [genre, setGenre] = useState("todos")

    useEffect(() => {
        if (!initialProducts) {
            getProducts().then((data) => {
                setProducts(data)
                setLoading(false)
            });
        } else {
            setLoading(false)
        }
    }, [initialProducts])

    const handleFilterChange = (e) => {
        setGenre(e.target.value)
    }

    const filteredProducts = genre === "todos"
        ? products
        : products.filter((prod) => prod.category === genre)

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 p-4 rounded-lg">
                    <label htmlFor="genre" className="block mb-2 font-bold text-lg">Filtrar por género:</label>
                    <select 
                        id="genre" 
                        value={genre} 
                        onChange={handleFilterChange} 
                        className="w-full p-2 border-2 border-gray-300 rounded-lg cursor-pointer text-black bg-white" >
                        <option value="todos" className="text-black">Todos</option>
                        <option value="vinilo" className="text-black">Vinilo</option>
                        <option value="audífonos" className="text-black">audífonos</option>
                    </select>
                </div>
                <div className="w-full md:w-3/4 p-4">
                    {loading ? (
                        <div>
                            <Loading />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {filteredProducts.map((prod) => (
                                <Item {...prod} key={prod.id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ItemList



