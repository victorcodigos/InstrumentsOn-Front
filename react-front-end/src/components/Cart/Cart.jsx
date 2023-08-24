import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Divider, List, Button  } from 'antd';
import { OrdersContext } from '../../context/OrdersContext/OrdersContext';
import { RestOutlined , DeleteFilled } from '@ant-design/icons';
import "./Cart.scss";

const Cart = () => {
    const { cart, clearCart, removeProduct, removeOneProduct } = useContext(ProductsContext);
    const { createOrder } = useContext(OrdersContext)


    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    const data = cart.map(product => product.name); 
    return (
        <>
            <div className="cart-container">
                <Divider className="divider" orientation="center"> Here are your list of products! </Divider>
                <List className="list"
                    size="small"
                    header={<div className="products">Products : </div>}
                    footer={<div className="btn">
                        <button className="btn-in" onClick={() => { createOrder(cart), clearCart() }}> Buy it ✅ </button>
                        <button className="btn-in-in" onClick={clearCart}>Clear your cart 🚫</button></div>}
                    bordered
                    dataSource={data}
                    renderItem={(item, index) => <List.Item className="item">{item}
                    <Button onClick={() => removeProduct(cart[index])} className="remove-button"><DeleteFilled /></Button>
                    <Button onClick={() => removeOneProduct(index)} className="remove-buttonX"><RestOutlined /></Button></List.Item>}
                />
            </div>
            <div className="total">Total:  € {calculateTotalPrice().toFixed(2)}</div>
        </>
    );
}

export default Cart
