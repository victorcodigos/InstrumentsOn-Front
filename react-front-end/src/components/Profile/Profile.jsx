import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Card, Spin } from 'antd';
import './Profile.scss';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span><Spin size="large" /></span>;
  }

  return (
    <div className="container">
      <Card className="card-box" title={user.id} style={{ width: 500, height: "170vh" }}>
        <div>
          <p>NAME: {user.name}</p>
          <p>EMAIL:{user.email}</p>
          <p>ROLE: {user.role}</p>
          {cart.length > 0 && (
            <div className="products-in-cart">
              <h5 className="shopping">Shopping:</h5>
              {cart.map(product => (
                <li key={product.id}> <ul> {product.name} {product.price}€ </ul> </li>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>

  );
};

export default Profile;