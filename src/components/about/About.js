import React, { Component } from "react";
import "../about/About.scss";
import Aboutimg from "../../assets/images/video.png";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="about-title">
            <span>
              О компании <span className="about-title__span">LEANGROUP</span>
            </span>
          </div>
          <div className="abouts">
            <div className="about-left">
              <img src={Aboutimg} alt="" />
            </div>
            <div className="about-right">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб. <br /> <br /> Имея две технологии – для
                производства ламинатных и экструзионных туб, мы предлагаем вам
                широкий спектр возможностей. Большим преимуществом является
                собственный печатный цех в ламинате и in-line печать в экструзии
                с возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции. <br /> <br /> С января 2018
                года компания стала членом Европейской Ассоциации производителей
                туб (ETMA), что подтверждает сильную позицию бренда и на рынке
                Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
