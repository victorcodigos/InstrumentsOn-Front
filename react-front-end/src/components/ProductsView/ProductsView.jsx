import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "antd";

const ProductsView = () => {
    const [product, setItemId] = useState([])
    const {id} = useParams

    const getItemId = async () => {
        const res = await axios.get("http://localhost:3000/products/id/"+`${id}`)
        const response = await res.json();
        setItemId(response);

    }

    useEffect(() =>{
        getItemId()
    });

    return (
            <div className="products-container" >
                {product?.map((product) => {
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

export default ProductsView
