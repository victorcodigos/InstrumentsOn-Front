import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Card } from "antd";
import "./Products.scss"
import { Link } from 'react-router-dom';

const Products = () => {
    const { getProducts, products, addCart } = useContext(ProductsContext)
    console.log(products)

    useEffect(() => {
        getProducts()
    }, []);
    return (
        <div className="products-container" >
            <div className="products-explain">
                <strong><h4>Explore the Melodic Realm: Musical Instruments Collection!</h4></strong>
                Welcome to our enchanting Musical Instruments Collection, where every note is a harmony and every instrument is a masterpiece.
                Here at Instruments Quality Solutions S.L by Victor Macedo, we're dedicated to igniting your passion for music and providing you with a symphony of options.
            </div>
            {products?.map((product) => {
                return <Card className="card-products"
                    style={{ width: 300, border: "1px solid black", margin: "1%" }}
                    key={product.id}
                    title={product.id}>
                    <p>NAME: {product.name}</p>
                    <p>TYPE: {product.type}</p>
                    <p>PRICE: {product.price} €</p>
                    <div style={{ flex: 1 }}>
                        <img
                            src={product.image}
                            style={{ width: "100%", height: "auto", image: "cover" }} />
                    </div>
                    <br /><button className="btn-details"><Link to={`/product/${product.id}`}> Details </Link></button>
                    <button className="btn-card" onClick={() => addCart(product)}>ADD TO CART </button>
                </Card>
            })} </div>
    )
}



export default Products
