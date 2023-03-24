import React, { Component } from "react";
import "../information/Information.scss";
import User from "../../assets/images/user.svg";
import Phone from "../../assets/images/tel.svg";

export default class Information extends Component {
  render() {
    return (
      <section id="information">
        <div className="container information">
          <div className="information-content">
            <span>
              Получить подробную{" "}
              <span className="information__span">информацию</span>
            </span>
            <p>
              Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
              время
            </p>
            <form>
              <div className="information-forms">
                <div className="information__name">
                  <input className="empty-item" type="text" disabled />
                  <img className="information__img1" src={User} alt="" />
                  <input
                    className="information__input"
                    type="text"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="information__phone">
                  <input type="tel" className="empty-item" disabled />
                  <img className="information__img2" src={Phone} alt="" />
                  <input
                    className="information__input"
                    type="text"
                    placeholder="+375 (29) 0000000"
                  />
                </div>
              </div>
              <div className="information__description">
                <textarea placeholder="Комментарий"></textarea>
              </div>
            </form>
            <div className="information__btn">
              <button>Получить информацию</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
