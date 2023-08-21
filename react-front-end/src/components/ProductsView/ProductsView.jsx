import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import React, { useState, useEffect, useContext }from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductsView.scss"
import { Card } from "antd";
import axios from "axios";

const API_URL = "http://localhost:3000";

function ProductsView() {
    const { productId } = useParams();
    const { addCart } = useContext(ProductsContext);
    const [product, setProduct] = useState({});

    const getItemId = async () => {
        const res = await axios.get(API_URL + `/products/id/${productId}`);
        setProduct(res.data);
    };

    useEffect(() => {
        getItemId();
    }, []);

    return (
        <div className="products-containerX">
            <Card className="card-productsX"
                style={{ width: 300, border: "1px solid black" }}
                key={product.id}
                title={product.id}>
                <p>NAME: {product.name}</p>
                <p>TYPE: {product.type}</p>
                <p>PRICE: {product.price} $</p>
                <button className="btn-cardX" onClick={() => addCart(product)}> ADD TO CART </button>
                <button className="btn-products"><Link to="/products"> All Products </Link></button>

            </Card>
        </div>
    );
}

export default ProductsView;