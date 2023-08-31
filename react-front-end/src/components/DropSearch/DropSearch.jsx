import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "./DropSearch.scss"
import {
    HomeOutlined,
    YoutubeOutlined,
    WhatsAppOutlined,
    CreditCardOutlined,
    UserOutlined,
    SearchOutlined,
    FireOutlined,
    ShoppingCartOutlined,
    GlobalOutlined,
    InstagramFilled,
    LinkedinFilled,
    GithubFilled,
    TwitterCircleFilled,
    WechatOutlined
} from '@ant-design/icons';

export default function DropSearch() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundImage:
         'linear-gradient(rgba(0, 100, 125, 200), rgba(0, 0, 10, 0.4)), url("https://gifdb.com/images/high/color-gradient-rainbow-spectrum-3t96bik0yf38hhvp.gif")',
          backgroundSize: 'cover' }}>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                Welcome to the store 😁
                            </a>
                            <ul class="dropdown-menu">
                            <li><hr class="dropdown-divider"/><strong>• Pages / Services •</strong></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/home"><HomeOutlined /> • Home</a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/cart"><ShoppingCartOutlined /> • Cart</a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/profile"><UserOutlined /> • Profile </a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/audio"><YoutubeOutlined /> • Music</a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/search"><SearchOutlined /> • Search </a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/contact"><WhatsAppOutlined /> • Contact</a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/products"><FireOutlined /> • Products </a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/aboutus"><GlobalOutlined /> • About us </a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/paypal"> <CreditCardOutlined /> • Payments </a></li>
                                <li><a class="dropdown-item" href="http://localhost:5173/chatbot"> <WechatOutlined /> • Chat with us </a></li>
                                <li><hr class="dropdown-divider"/><strong>••  Social Networks •• </strong></li>
                                <li><a class="dropdown-item" href="https://www.linkedin.com/in/victor-macedo-4a8901210/"><LinkedinFilled /> • Linkedin </a></li>
                                <li><a class="dropdown-item" href="https://www.instagram.com/macedodedeus/"><InstagramFilled /> • Instagram </a></li>
                                <li><a class="dropdown-item" href="https://github.com/victorcodigos/"> <GithubFilled /> • GitHub </a></li>
                                <li><a class="dropdown-item" href="https://www.linkedin.com/in/victor-macedo-4a8901210/"> <TwitterCircleFilled /> • Twitter </a></li>
                            </ul> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


