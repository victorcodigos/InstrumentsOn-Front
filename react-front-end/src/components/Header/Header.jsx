import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { UserDeleteOutlined, ProfileOutlined, LoginOutlined } from "@ant-design/icons"
import "./Header.scss"

const Header = () => {
    const { token, logout } = useContext(UserContext)
    const navigate = useNavigate()
    const logoutUser = () => {
        logout()
        navigate("/login")
    }
    return (
        <div className="header">
            <Link to="/home"> Home </Link>
            {token ? (
                <>
                    <button><Link to="/profile"> Profile <ProfileOutlined /> </Link></button>
                    <button onClick={logoutUser}> Logout <UserDeleteOutlined /></button>
                </>
            ) : (
                <button> <Link to="/login"> Login <LoginOutlined /></Link></button>
            )}


        </div>
    )
}

export default Header
