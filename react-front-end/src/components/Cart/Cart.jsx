import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Divider, List } from 'antd';
import { OrdersContext } from '../../context/OrdersContext/OrdersContext';
import "./Cart.scss";



const Cart = () => {
    const {cart, clearCart} = useContext(ProductsContext);
    const { createOrder} = useContext(OrdersContext) 
    const data = cart.map(product => product.name)
    return (
        <div className="cart-container">
            <Divider className="divider" orientation="center"> Here are your list of products! </Divider>
            <List className="list"
            size="small"
            header={<div className="products">Products : </div>}
            footer={<div className="btn"><button className="btn-in" onClick={() =>{createOrder(cart), clearCart()}}> Buy it ✅ </button><button className="btn-in-in" onClick={clearCart}>Clear your cart 🚫</button></div>}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item className="item">{item}</List.Item>}
            />
        </div>
    );
}

export default Cart
