import React, { Component } from "react";
import Slider from "react-slick";
import "../certificate/Sertifikat.scss";
import Cert1 from "../../assets/images/1.png";
import Cert2 from "../../assets/images/2.png";
import Cert3 from "../../assets/images/3.png";
import Cert4 from "../../assets/images/4.png";
import Cert5 from "../../assets/images/5.png";

export default class Sertifikat extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <section>
        <div className="container certificate">
          <div className="certificate-title">
            <span>
              Качество продукции подтверждают{" "}
              <span className="certificate__span">сертификаты</span>
            </span>
          </div>
          <div className="certificate-items">
            <div className="certificate__item">
              <Slider {...settings}>
                <div className="cert-image">
                  <img src={Cert1} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert2} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert3} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert4} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert5} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert1} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert2} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert3} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert4} alt="" />
                </div>
                <div className="cert-image">
                  <img src={Cert5} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
