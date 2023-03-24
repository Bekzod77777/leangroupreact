import React, { Component } from "react";
import Slider from "react-slick";
import "../home/Home.scss";
import Homeimg from "../../assets/images/home.png";

export default class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section id="home">
        <Slider {...settings}>
          <div className="home-image">
            <img src={Homeimg} alt="" />
            <div className="container">
              <div className="home-title">
                <h6>LEANGROUP - тубы и этикетки</h6>
                <h2>Ламинатные тубы</h2>
                <p>
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <button>Каталог</button>
              </div>
            </div>
          </div>
          <div className="home-image">
            <img src={Homeimg} alt="" />
            <div className="container home-content">
              <div className="home-title">
                <h4>LEANGROUP - тубы и этикетки</h4>
                <h2>Ламинатные тубы</h2>
                <p>
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <button>Каталог</button>
              </div>
            </div>
          </div>
          <div className="home-image">
            <img src={Homeimg} alt="" />
            <div className="container home-content">
              <div className="home-title">
                <h4>LEANGROUP - тубы и этикетки</h4>
                <h2>Ламинатные тубы</h2>
                <p>
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <button>Каталог</button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}
