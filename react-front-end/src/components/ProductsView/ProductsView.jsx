import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductsView.scss"
import { Card } from "antd";
import { StarOutlined, StarFilled, CreditCardOutlined } from "@ant-design/icons";
import axios from "axios";

const API_URL = "http://localhost:3000";

function ProductsView() {
    const { productId } = useParams();
    const { addCart } = useContext(ProductsContext);
    const [product, setProduct] = useState({});
    const [rating, setRating] = useState(0);
    const [number, setNumber] = useState(0);

    const getItemId = async () => {
        const res = await axios.get(API_URL + `/products/id/${productId}`);
        setProduct(res.data);
    };

    useEffect(() => {
        getItemId();
    }, []);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        setNumber(newRating);
    };

    const handleText = () => {
        switch (number) {
            case 0:
                return "Evaluate";
            case 1:
                return "Poor";
            case 2:
                return "Unsatisfied";
            case 3:
                return "Normal";
            case 4:
                return "Satisfied";
            case 5:
                return "Excelent";
            default:
                return "Evaluate";
        }
    }

    return (
        <div className="products-containerX">
            <Card className="card-productsX"
                style={{ width: 300, border: "1px solid black" }}
                key={product.id}
                title={product.id}>
                <p>NAME: {product.name}</p>
                <p>TYPE: {product.type}</p>
                <p>PRICE: {product.price} $</p>
                <button className="btn-pay"><Link to="/paypal"><CreditCardOutlined /></Link></button>
                <br /><button className="btn-products"><Link to="/products"> All Products </Link></button>
                <button className="btn-cardX" onClick={() => addCart(product)}> ADD TO CART </button>
                <div>
                    <h1>{handleText()}</h1>
                    {Array(5)
                        .fill()
                        .map((_, index) => (
                            index < rating ? (
                                <StarFilled key={index} className="star-icon filled" onClick={() => handleRatingChange(index + 1)} />
                            ) : (
                                <StarOutlined key={index} className="star-icon" onClick={() => handleRatingChange(index + 1)} />
                            )
                        ))}
                </div>
            </Card>
        </div>
    );
}

export default ProductsView;