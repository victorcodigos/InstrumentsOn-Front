import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Card } from "antd";
import "./Products.scss"

const Products = () => {
    const { getProducts, products, addCart } = useContext(ProductsContext)

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div className="products-container" >
            {products?.map((product) => {
                return <Card
                    style={{ width: 300, border: "1px solid black" }}
                    key={product.id}
                    title={product.id}>
                    <p>NAME: {product.name}</p>
                    <p>TYPE: {product.type}</p>
                    <p>PRICE: {product.price} $</p>
                    <button onClick={() => addCart(product)}> ADD CART </button>
                </Card>
            })} </div>
    )
}



export default Products
