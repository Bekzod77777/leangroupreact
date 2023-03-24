import React, { Component } from "react";
import "../team/Team.scss";
import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";
import Team4 from "../../assets/images/team4.png";
import Team5 from "../../assets/images/team5.png";

export default class Team extends Component {
  render() {
    return (
      <section>
        <div className="container team">
          <div className="team-title">
            <span>
              Наша <span className="team__span">команда</span>
            </span>
          </div>
          <div className="team-cards">
            <div className="team-card">
              <img src={Team1} alt="" />
              <h5>Войнич Дарья</h5>
              <p>Заместитель директора по продажам</p>
              <span className="team-card__phone">
                +375 (17) 270-53-77 (317)
              </span>
            </div>
            <div className="team-card">
              <img src={Team2} alt="" />
              <h5>Мисько Екатерина</h5>
              <p>Начальник отдела сопровождения</p>
              <span className="team-card__phone">
                +375 (17) 270-53-77 (115)
              </span>{" "}
              <br />
              <span className="team-card__tel"> +375 29 112-73-48</span> <br />
              <span className="team-card__email">k.melnichenko@leangroup.by</span>
            </div>
            <div className="team-card">
              <img src={Team3} alt="" />
              <h5>Дмитроченко Дмитрий</h5>
              <p>Начальник отдела допечатной подготовки</p>
              <span className="team-card__phone">
                +375 (17) 270-53-77 (333)
              </span>{" "}
              <br />
              <span className="team-card__tel"> +375 29 360-32-26</span> <br />
              <span className="team-card__email">dmitrochenko@leangroup.by</span>
            </div>
            <div className="team-card">
              <img src={Team4} alt="" />
              <h5>Антух Евгений</h5>
              <p>Начальник отдела снабжения</p>
              <span className="team-card__phone">
                +375 (17) 270-53-77 (148)
              </span>{" "}
              <br />
              <span className="team-card__tel"> +375 44 764-16-28</span> <br />
              <span className="team-card__email">j.antuh@leangroup.by</span>
            </div>
            <div className="team-card">
              <img src={Team5} alt="" />
              <h5>Мисник Елена</h5>
              <p>Специалист по работе с клиентами</p>
              <span className="team-card__phone">
                +375 (17) 270-53-77 (317)
              </span>{" "}
              <br />
              <span className="team-card__tel"> +375 29 329-34-03</span>
              <br />
              <span className="team-card__email">e.misnik@leangroup.by</span>
            </div>
          </div>
          <div className="team-btn">
            <button>Наша команда</button>
          </div>
        </div>
      </section>
    );
  }
}
