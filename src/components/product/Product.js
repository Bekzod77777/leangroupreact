import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
          <Tabs>
            <div className="products__btns">
              <TabList>
                <Tab>
                  <button>Ламинатные тубы</button>
                </Tab>
                <Tab>
                  <button>Экструзионные тубы</button>
                </Tab>
                <Tab>
                  <button>Другая упаковка</button>
                </Tab>
              </TabList>
            </div>
            <div className="product">
              <TabPanel>
                <img src={Pro1} alt="" />
                <img src={Pro2} alt="" />
                <img src={Pro3} alt="" />
                <img src={Pro4} alt="" />
                <img src={Pro5} alt="" />
              </TabPanel>
              <TabPanel>
                <img src={Pro3} alt="" />
                <img src={Pro4} alt="" />
                <img src={Pro5} alt="" />
              </TabPanel>
              <TabPanel>
                <img src={Pro1} alt="" />
                <img src={Pro2} alt="" />
              </TabPanel>
            </div>
          </Tabs>
          <div className="products-btn">
            <button>Перейти в каталог</button>
          </div>
        </div>
      </section>
    );
  }
}
