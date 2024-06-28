import { BiLogoTelegram } from "react-icons/bi";
import { Container } from "..";
import "./NewsLetter.scss";
import bgImg from "./newsletter-bg.jpg";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <section className="bd-newsletter-area">
      <Container>
        <div className="bd-newsletter pt-100 pb-100 theme-bg">
          <div
            className="bd-newsletter-bg"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="bd-newsletter-content">
                <div className="bd-section-title-wrapper text-center is-white mb-45">
                  <h2 className="bd-section-title mb-0">
                    Bizning xabarnomamizga qoʻshiling
                  </h2>
                  <p>
                    Bizning eng soʻnggi yangiliklarimiz va yangiliklarimizni
                    olish uchun axborot byulletenimizga obuna boʻling.
                  </p>
                </div>
                <div className="bd-newsletter-form">
                  <form>
                    <div className="bd-newsletter-input">
                      <input
                        type="email"
                        placeholder="sizning elektron manzilingiz"
                      />
                      <Link to="/contact">
                        <button type="button" className="bd-btn">
                          <span className="bd-btn-inner">
                            <span className="bd-btn-normal">
                              <BiLogoTelegram />
                              Obuna boʻling
                            </span>
                            <span className="bd-btn-hover">
                              <BiLogoTelegram />
                              Obuna boʻling
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
