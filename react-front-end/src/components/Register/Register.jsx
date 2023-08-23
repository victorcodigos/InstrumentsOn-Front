import { Form, Input, Button } from "antd";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Register.scss";

const Register = () => {
    const { register, message } = useContext(UserContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        register(values);
        setTimeout(() => {
            navigate("/home");

        }, 3000)
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    }

    const [PhoneNumber, setPhoneNumber] = useState('')
    const [valid, setValid] = useState(true)

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    }

    const validatePhoneNumber = (PhoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(PhoneNumber)
    }

    return (
        <>
        <div className="container-mainX">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off" >
                <Form.Item className="register"
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please input your name!" }]} ><Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input your email!" }]}> <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}>
                    <Input.Password />
            <label>
                :
                <PhoneInput
                country={'es'}
                value={PhoneNumber}
                onChange={handleChange}
                inputProps={{required: true}}/>
            </label>
            {valid && <p> Please enter a valid number</p> }
                </Form.Item>
                <div className>
                    <span> Already have an account?</span> <Link to='/login'>Login</Link>
                </div>
                {message}
                <br />
                <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                    <Button type="primary" htmlType="submit"> Send</Button>
                </Form.Item>
            </Form>
        </div>
        
        </>
    )
}

export default Register