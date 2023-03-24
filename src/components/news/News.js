import React, { Component } from "react";
import "../news/News.scss";
import News1 from "../../assets/images/news1.png";
import News2 from "../../assets/images/news2.png";
import News3 from "../../assets/images/news3.png";

export default class News extends Component {
  render() {
    return (
      <section>
        <div className="container news">
          <div className="news-title">
            <h2>Новости</h2>
          </div>
          <div className="news-cards">
            <div className="news-card">
              <img src={News1} alt="" />
              <p>28.01.2022</p>
              <h6>"ЛеанГрупп" серебряный призер EcoVadis!</h6>
            </div>
            <div className="news-card">
              <img src={News2} alt="" />
              <p>21.01.2022</p>
              <h6>"ЛеанГрупп" серебряный призер EcoVadis!</h6>
            </div>
            <div className="news-card">
              <img src={News3} alt="" />
              <p>16.12.2021</p>
              <h6>Туба, как вид упаковки</h6>
            </div>
          </div>
          <div className="news-btn">
            <button>Все новости</button>
          </div>
        </div>
      </section>
    );
  }
}
