import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Card, Spin } from 'antd';
import "./Profile.scss"


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
            <Card className='card-box'  title={user.id}
             style={{ width: 300 }}>
                <p>NAME:   {user.name}</p>
                <p>EMAIL:  {user.email}</p>
                <p>ROLE:   {user.role}</p>
                <p>{console.log(user.password)}</p>
            </Card>
        </div>
    )
}

export default Profile
