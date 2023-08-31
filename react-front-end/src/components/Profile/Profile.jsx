import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Card, Spin } from 'antd';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Profile.scss';
register();

const data = [
  { id: "1", image: "https://cdn.shopify.com/s/files/1/0587/2605/files/050115_WorldwideShipping_BannerPageTop.jpg?16401904633586417602" },
  { id: "2", image: "https://www.coindesk.com/resizer/o0t_kK3oGviMsqktJQFbBsZhIzg=/811x250/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/5P5S2FRIONBZ3NM43CXV3VPWOI.png" },
  { id: "3", image: "https://cdn.vectorstock.com/i/preview-1x/45/71/payment-logo-set-vector-44894571.jpg" },
 
];

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  if (!user) {
    return <span><Spin size="large" /></span>;
  }

  return (
    <>
    <div className="profile">
        <h4>Profile Section:</h4>
        The website's profile section serves as a dedicated space where users can curate and share their identity,
        preferences, and interactions with the online platform. This personalized corner enhances user engagement and offers various benefits:
        We extend our heartfelt gratitude for shopping with us. Your support means the world to us. 
        We're excited to have you as a customer! Thank you for shopping with us. See you soon! 😁
      </div>
    <div className="containerSlider">
        <Swiper
          slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 3000 }} >
          {data.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <img className="image" src={item.image} alt="Slider" />
            </SwiperSlide>))}
        </Swiper>
      </div>
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
          <div className="totalX">Total:  € {calculateTotalPrice().toFixed(2)}</div>
        </Card>
      </div>
    </>
  );
};

export default Profile;