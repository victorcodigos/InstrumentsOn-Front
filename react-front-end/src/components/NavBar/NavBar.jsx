import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { UserDeleteOutlined, LoginOutlined, ShoppingCartOutlined, HomeOutlined, SearchOutlined, FireOutlined, YoutubeOutlined, SketchOutlined, WhatsAppOutlined, UserAddOutlined, WechatOutlined  } from '@ant-design/icons';
import { Badge } from 'antd';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';

function NavBar() {
    const { token, logout, user } = useContext(UserContext);
    const { cart, clearCart } = useContext(ProductsContext);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const logoutUser = () => {
        logout();
        clearCart();
        navigate('/login');
    };

    return (
        <>
            <Navbar className="navMain" style={{ backgroundColor: 'rgba(5, 111, 135, 0.887)' }} data-bs-theme="dark">
                <Container className="nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home"><HomeOutlined /></Nav.Link>
                        <Nav.Link as={Link} to="/products"> <FireOutlined /></Nav.Link> 
                        <Nav.Link as={Link} to="/contact"> <WhatsAppOutlined /></Nav.Link>
                        {token ? (
                            <>
                                <Nav.Link as={Link} to="/cart"><Badge count={cart.length} shape="square" size="small" color="blue" style={{ margin: '1px' }} > <ShoppingCartOutlined /></Badge></Nav.Link>
                                <Nav.Link as={Link} to="/search"><SearchOutlined /></Nav.Link>
                                <Nav.Link as={Link} to="/audio"><YoutubeOutlined /></Nav.Link>
                                <Nav.Link onClick={logoutUser}><UserDeleteOutlined /></Nav.Link>
                                <Nav.Link as={Link} to="/chatbot"><WechatOutlined /></Nav.Link>
                                <Nav.Link as={Link} to="/profile">  {user && user.name ? `Hello  ${user.name}` : ""} <SketchOutlined /></Nav.Link> 
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login"><LoginOutlined /> </Nav.Link>
                                <Nav.Link as={Link} to="/register"> <UserAddOutlined /></Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );

}

export default NavBar;
