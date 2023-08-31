import './Footer.scss'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="https://www.instagram.com/macedodedeus/"> <Icon icon="ion:logo-instagram" /></a>
                        <a href="https://www.linkedin.com/in/victor-macedo-4a8901210/"><Icon icon="ion:logo-snapchat" /></a>
                        <a href="https://www.linkedin.com/in/victor-macedo-4a8901210/"><Icon icon="ion:logo-twitter" /></a>
                        <a href="https://www.linkedin.com/in/victor-macedo-4a8901210/"><Icon icon="ion:logo-facebook" /></a>
                        <a href="https://www.linkedin.com/in/victor-macedo-4a8901210/"><Icon icon="ion:logo-linkedin" /></a>
                        <a href="https://github.com/victorcodigos/"><Icon icon="ion:logo-github" /></a></div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="http://localhost:5173/home">Home</a></li>
                        <li className="list-inline-item"><a href="http://localhost:5173/aboutus">About</a></li>
                        <li className="list-inline-item"><a href="http://localhost:5173/contact">Contact</a></li>
                        <li className="list-inline-item"><a href="http://localhost:5173/paypal">Payments</a></li>
                        <li className="list-inline-item"><a href="http://localhost:5173/chatbot">Complaints</a></li>
                    </ul>
                    <p className="copyright"> Created by Victor Macedo. Copyright © 2023 . All rights reserved.</p> 
                </footer>
            </div>
        </div>
    )
}

export default Footer