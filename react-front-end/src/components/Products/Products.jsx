import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Card } from "antd";

const Products = () => {
    const { getProducts, products } = useContext(ProductsContext)

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div> {products.map((product) => {
            return <Card
                style={{ width: 300, border: "1px solid black;"}}
                key={product.id}
                title={product.name}>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </Card>
        })} </div>
    )
}

export default Products
