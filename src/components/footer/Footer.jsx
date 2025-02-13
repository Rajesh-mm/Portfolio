import React from 'react';
import "./footer.css";
import Logo from "../../assets/Logo-2.png";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <img src={Logo} alt="Logo" className="nav__logo-icon"/>
            <h1 className="footer__title">Rajesh M Mysoremath</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualifications</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/rajeshmmysoremath/" className="footer__social-link">
                <i className='bx bxl-linkedin'></i>
                </a>

                <a href="https://github.com/Rajesh-mm/" className="footer__social-link">
                <i className='bx bxl-github' ></i>
                </a>
            </div>

            <span className="footer__copy">&#169; RajeshMMPortfolio. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer