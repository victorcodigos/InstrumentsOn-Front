import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { UserDeleteOutlined, ProfileOutlined, LoginOutlined, ShoppingCartOutlined, HomeOutlined, SearchOutlined, FireOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss';

function NavBar() {
    const { token, logout } = useContext(UserContext);
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
            <Navbar className="navMain" style={{ backgroundColor: 'rgba(9, 95, 116, 0.887)' }} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Welcome to the store 😁 </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home"><HomeOutlined /></Nav.Link>
                        <Nav.Link as={Link} to="/products"> <FireOutlined/></Nav.Link>
                        {token ? (
                            <>
                                <Nav.Link as={Link} to="/search"><SearchOutlined /></Nav.Link> 
                                <Nav.Link as={Link} to="/audio"><PlayCircleOutlined /></Nav.Link>
                                <Nav.Link as={Link} to="/profile"><ProfileOutlined /></Nav.Link>
                                <Nav.Link as={Link} to="/cart"><Badge count={cart.length} shape="square" size="small" color="pink" style={{ marginLeft: '50px' }} > <ShoppingCartOutlined /></Badge>
                                </Nav.Link> <Nav.Link onClick={logoutUser}><UserDeleteOutlined /></Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login"><LoginOutlined /> </Nav.Link>
                                <Nav.Link as={Link} to="/register"> Register </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
