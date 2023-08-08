import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Card, Spin } from 'antd';
import "./Profile.scss"
import products from '../../context/ProductsContext/ProductsReducer';

const Profile = () => {
    const { user, getUserInfo } = useContext(UserContext)

    useEffect(() => {
        getUserInfo()
    }, []);
    if (!user) {
        return <span>< Spin size="Large" /></span>
    }
    return (
        <div className="card">
            <Card  title={user.id}
             style={{ width: 300 }}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{console.log(user.productId)}</p>
            </Card>
        </div>
    )
}

export default Profile
