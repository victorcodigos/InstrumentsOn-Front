import React, { useContext } from "react";
import { Button, Form, Input } from "antd";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
    const { register } = useContext(UserContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        register(values);
        setTimeout(() => {
            navigate("/login");

        }, 3000)
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    }


    return (
        <div className="container-mainX">
            <Form
                name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }}
                onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                <Form.Item className="register"
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please insert your name!" },]}>
                    <Input placeholder="insert your name here"/>
                </Form.Item>
                <Form.Item
                    label="Last name"
                    name="lastname"
                    rules={[{ required: true, message: "Please insert your last name!" },]}>
                    <Input placeholder="insert your last name here"/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please put your email!" },
                    { type: "email", message: "Please insert a correct email!" },]}>
                    <Input placeholder="insert your email here" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please put your password!" },]}>
                    <Input.Password  placeholder="insert your password here"/>
                </Form.Item>
                <div>
                    <span> Already have an account?</span> <Link to='/login'>Login</Link>
                </div>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: "rgba(9, 95, 116, 0.807)", color: "white" }}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register