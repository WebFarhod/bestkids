/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import { Container } from "..";
import "./Footer.scss";
import lineImg from "./wave.png";
import { logoImg } from "../../constant";

// data
import { ProgramsData } from "../../data/programs";
import { KidsData, KidscosialData } from "../../data/kidsData";
import { contactIconArray, cosialIconArray } from "../../data/Icondata";

const Footer = () => {
  return (
    <footer>
      <div className="bd-footer-area pt-200">
        <div className="bd-gradient-bg"></div>
        <div className="bd-footer pt-90 pb-25">
          <Container>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="bd-footer-widget bd-footer-widget-1 mb-50">
                  <div className="bd-footer-logo mb-35">
                    <Link to="/">
                      <img alt="logo" src={logoImg} height="51" />
                    </Link>
                  </div>
                  <div className="bd-footer-widget-content mb-40">
                    <p>
                      Bizning bitiruvchilar uchun Bestkids tomonidan maxsus
                      taklif ya'na bizning BestSchool da oʻqish imkoniyati.
                    </p>
                  </div>
                  <div className="bd-footer-bottom-social pb-20">
                    <ul>
                      {KidscosialData.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link} rel="noreferrer" target="_blank">
                            {cosialIconArray[index]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="bd-footer-widget bd-footer-widget-2 mb-50">
                  <div className="bd-footer-widget-content">
                    <h4 className="bd-footer-widget-title mb-30">Havolalar</h4>
                    <div className="bd-footer-list">
                      <ul>
                        <li>
                          <Link to={"/about"}>Biz haqimizda</Link>
                        </li>
                        <li>
                          <Link to={"/programs"}>Dasturlar</Link>
                        </li>
                        <li>
                          <Link to={"/classes"}>Sinflar</Link>
                        </li>
                        <li>
                          <Link to={"/news"}>Yangiliklar</Link>
                        </li>
                        <li>
                          <Link to={"/contact"}>Aloqa</Link>
                        </li>
                        <li>
                          <Link to={"/teachers"}>Oʻqituvchilar</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="bd-footer-widget bd-footer-widget-3 mb-50">
                  <div className="bd-footer-widget-content">
                    <h4 className="bd-footer-widget-title mb-30">
                      Dasturlarimiz
                    </h4>
                    <div className="bd-footer-list">
                      <ul>
                        {ProgramsData.map((item, index) => (
                          <li key={index}>
                            <Link to={`/program-details/${item._id}`}>
                              {item.data.typeTeach}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="bd-footer-widget bd-footer-widget-4">
                  <div className="bd-footer-widget-content">
                    <h4 className="bd-footer-widget-title mb-30">
                      Biz bilan boʻgʻlanish
                    </h4>
                    <div className="bd-footer-contact">
                      <ul>
                        {KidsData.map((item, index) => (
                          <li key={index}>
                            {contactIconArray[index]}
                            <Link
                              to={item.link}
                              rel={index == 0 ? "noreferrer" : undefined}
                              target={index == 0 ? "_blank" : undefined}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="bd-footer-copyright ">
          <div className="bd-footer-copyright-line pb-20">
            <img alt="img not found" src={lineImg} width="1920" height="9" />
          </div>
          <Container>
            <div className="bd-footer-copyright-wrap d-flex align-items-md-center justify-content-center">
              <div className="bd-footer-copyright-text pb-20">
                <p>
                  Sayt{" "}
                  <Link
                    to="https://codevision.uz/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    CODEVISION
                  </Link>{" "}
                  tomonidan yaratildi
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
