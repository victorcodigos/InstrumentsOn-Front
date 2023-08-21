import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Card } from "antd";
import "./Products.scss"
import { Link } from 'react-router-dom';

const Products = () => {
    const { getProducts, products, addCart} = useContext(ProductsContext)
    console.log( products)

    useEffect(() => {
        getProducts()
    }, []);
    return (
        <div className="products-container" >
            {products?.map((product) => {
                return <Card className="card-products"
                    style={{ width: 300, border: "1px solid black", margin: "1%"}}
                    key={product.id}
                    title={product.id}>
                    <p>NAME: {product.name}</p>
                    <p>TYPE: {product.type}</p>
                    <p>PRICE: {product.price} $</p>
                    <br /><button className="btn-details"><Link to={`/product/${product.id}`}> Details </Link></button>
                    <button className="btn-card" onClick={() => addCart(product)}>ADD TO CART </button>
                </Card>
            })} </div>
    )
}



export default Products
