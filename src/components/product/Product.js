import React, { Component } from "react";
import "../product/Product.scss";
import Pro1 from "../../assets/images/pro1.png";
import Pro2 from "../../assets/images/pro2.png";
import Pro3 from "../../assets/images/pro3.png";
import Pro4 from "../../assets/images/pro4.png";
import Pro5 from "../../assets/images/pro5.png";

export default class Product extends Component {
  render() {
    return (
      <section>
        <div className="container products">
          <div className="products-title">
            <span>
              Наша <span className="product-span">продукция</span>
            </span>
          </div>
          <div className="products__btns">
            <button>Ламинатные тубы</button>
            <button>Экструзионные тубы</button>
            <button>Другая упаковка</button>
          </div>
          <div className="product">
            <img src={Pro1} alt="" />
            <img src={Pro2} alt="" />
            <img src={Pro3} alt="" />
            <img src={Pro4} alt="" />
            <img src={Pro5} alt="" />
          </div>
          <div className="products-btn">
            <button>Перейти в каталог</button>
          </div>
        </div>
      </section>
    );
  }
}
