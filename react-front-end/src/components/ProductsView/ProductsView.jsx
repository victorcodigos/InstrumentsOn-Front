import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        <div>

            <h2> {product.id}</h2>
            <h2> {product.name}</h2>
            <h2> {product.type}</h2>
            <h2> {product.price}</h2>
            
        </div>
    )
}

export default ProductsView
