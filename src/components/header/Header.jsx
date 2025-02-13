import React, { useState } from 'react';
import "./header.css";
import Logo from "../../assets/Logo-2.png"


const Header = () => {
  // Change Background Header 
  window.addEventListener("scroll",function() {
    const header = document.querySelector(".header");
    if (this.scrollY >=80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* Toggling the menu */
  const[Toggle, showMenu] = useState(false);
  const[activNav, setActiveNav] = useState("#home");
  
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" className="nav__logo-icon"/>Rajesh M Mysoremath</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav("#home")} className={activNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav("#about")} className={activNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav("#skills")} className={activNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" onClick={() => setActiveNav("#qualifications")} className={activNav === "#qualifications" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i> Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" onClick={() => setActiveNav("#projects")} className={activNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav("#contact")} className={activNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
            

          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>

        </div>

        <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header