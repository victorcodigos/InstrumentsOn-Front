import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Card, Spin } from 'antd';

const Profile = () => {
    const { user, getUserInfo } = useContext(UserContext)

    useEffect(() => {
        getUserInfo()
    }, []);
    if (!user) {
        return <span>< Spin size="Large" /></span>
    }
    return (
        <div>
            <Card title={user.name}
             style={{ width: 300 }}>
                <p>{user.name}</p>
            </Card>
        </div>
    )
}

export default Profile
