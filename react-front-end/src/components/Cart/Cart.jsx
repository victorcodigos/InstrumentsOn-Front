import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Divider, List } from 'antd';



const Cart = () => {
    const {cart, clearCart} = useContext(ProductsContext);
    const data = cart.map(product => product.name)
    return (
        <div>
            <Divider orientation="center"> Here are your list of products </Divider>
            <List
            size="small"
            header={<div>Products</div>}
            footer={<div><button>Buy</button><button onClick={clearCart}>Clear cart</button></div>}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </div>
    );
}

export default Cart
