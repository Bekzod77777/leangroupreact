import React, { Component } from "react";
import "../footer/Footer.scss";
import ScrollToTop from "react-scroll-to-top";
import Logo2 from "../../assets/images/logo2.svg";
import link1 from "../../assets/images/vk.svg";
import link2 from "../../assets/images/fb.svg";
import link3 from "../../assets/images/li.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <ScrollToTop smooth top="600" width="20" height="20" color="white"/>;
        <div className="container footer">
          <div className="footer-top">
            <div className="footer-top__img">
              <img src={Logo2} alt="" />
            </div>
            <div className="footer-top__links">
              <img src={link1} alt="" />
              <img src={link2} alt="" />
              <img src={link3} alt="" />
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="footer-middle">
            <div className="footer__product">
              <h4>Продукция</h4>
              <span>Ламинатные тубы</span> <br />
              <span>Экструзионные тубы</span> <br />
              <span>Другая упаковка</span>
            </div>
            <div className="footer__product">
              <h4>Компания</h4>
              <span>О нас</span> <br />
              <span>Наша команда</span> <br />
              <span>Сертификаты</span>
            </div>
            <div className="footer__product">
              <h4>Разделы</h4>
              <span>Контакты</span> <br />
              <span>Новости</span> <br />
              <span>Вакансии</span>
            </div>
            <div className="footer__tel">
              <div className="footer__tel-top">
                <h6>Беларусь</h6>
                <span>+375 (17) 270 53 77</span> <br />
                <span>+375 (17) 270 53 78</span>
              </div>
              <div className="footer__tel-bottom">
                <h6>Москва</h6>
                <span>+7 (495) 280 73 44</span> <br />
                <span>+7 (495) 280 73 44</span>
              </div>
            </div>
            <div className="footer__phone">
              <div className="footer__phone-top">
                <h6>Европа</h6>
                <span>+48 73 1111 044</span>
              </div>
              <div className="footer__phone-bottom">
                <h6>Екатеринбург</h6>
                <span>+7 (343) 346 82 06</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © 2022 Leangroup. All Rights Reserved. <br /> Разработка и
              продвижение сайтов SkyWeb.by
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
