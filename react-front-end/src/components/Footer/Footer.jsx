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
                        <a href="https://www.linkedin.com/in/victor-macedo-4a8901210/"><Icon icon="ion:logo-linkedin" /></a></div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><a href="#">Services</a></li>
                        <li className="list-inline-item"><a href="#">About</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Privacy policy</a></li>
                    </ul>
                    <p className="copyright"> Created by Victor Macedo. Copyright © 2023 . All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer