import React, { useContext } from 'react'
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';
import "./Login.scss";

const Login = () => {
    const { login } = useContext(UserContext)
    const navigate = useNavigate()
    const onFinish = (values) => {
        login(values)
        notification.success
            ({
                message: 'Successfully Logged',
                description:
                    'Congrats! Welcome to the store 😁'
            });

        setTimeout(() => {
            navigate("/profile")
        }, 3000);
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="container-main">
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item className="login"
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: "email",
                            message: "Please input your correctly email!"
                        }
                    ]}
                >
                    <Input placeholder="Enter your email"/> 
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Enter your password"/>
                </Form.Item>

                <Form.Item 
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                   
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: "rgba(9, 95, 116, 0.807)", color: "white" }}>
                        Submit
                    </Button>
                    
                </Form.Item>
            </Form>
        </div>
    )

}

export default Login
