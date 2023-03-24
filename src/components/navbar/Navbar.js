import React, { Component } from "react";
import "../navbar/Navbar.scss";
import NavLogo from "../../assets/images/logo.svg";
import Language from "../../assets/images/language.svg";
import Menunavbar from "../../assets/images/menu.svg";
import Closenavbar from "../../assets/images/close.svg";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="container navbar-container">
            <div className="nav-left">
              <a href="#">
                <img src={NavLogo} alt="" />
              </a>
            </div>
            <div className="nav-middle">
              <ul className="nav-middle__links">
                <li>
                  <a href="#">Продукция</a>
                </li>
                <div className="line"></div>
                <li>
                  <a href="#">Сертификаты</a>
                </li>
                <div className="line"></div>
                <li>
                  <a href="#">Наша команда</a>
                </li>
                <div className="line"></div>
                <li>
                  <a href="#">О нас</a>
                </li>
                <div className="line"></div>
                <li>
                  <a href="#">Новости</a>
                </li>
                <div className="line"></div>
                <li>
                  <a href="#">Вакансии</a>
                </li>
                <div className="line"></div>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <img src={Language} alt="" />
            </div>
            <button class="hamburger" onclick="openNavbar()">
              <img src={Menunavbar} alt="" />
            </button>
          </div>
          <div id="navbar-responsive">
            <ul className="nav-middle__links">
              <li>
                <a href="#">Продукция</a>
              </li>
              <div className="line"></div>
              <li>
                <a href="#">Сертификаты</a>
              </li>
              <div className="line"></div>
              <li>
                <a href="#">Наша команда</a>
              </li>
              <div className="line"></div>
              <li>
                <a href="#">О нас</a>
              </li>
              <div className="line"></div>
              <li>
                <a href="#">Новости</a>
              </li>
              <div className="line"></div>
              <li>
                <a href="#">Вакансии</a>
              </li>
              <div className="line"></div>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
            <button id="close-navbar" onclick="closeNavbar()">
              <img src={Closenavbar} alt="" />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}
