import { Container, Shower } from "../../../components";
import { homeHeroImg } from "../../../constant";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

import { hero_3 } from "../../../constant/home";
import "./homeHero.scss";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { shape1img, shape2img, shape3img, lineshape } from ".";

const homeHero = () => {
  return (
    <section className="home-hero">
      <div className="bd-home-gradient" />
      <div className="bd-hero-social-wrapper">
        <div className="bd-hero-social">
          <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF />
            facebook
          </Link>
        </div>
        <div className="bd-hero-social">
          <Link to="https://twitter.com/" target="_blank" rel="noreferrer">
            <BsTwitterX />
            twitter
          </Link>
        </div>
        <div className="bd-hero-social">
          <Link to="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube />
            youtube
          </Link>
        </div>
      </div>
      <Container>
        <div className="bd-hero-inner-3">
          <div className="bd-hero-shape-wrapper d-none d-lg-block">
            <div className="bd-hero-3-shape-2">
              <img alt="img not found" src={lineshape} />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="bd-hero-content">
                <Shower name="home-hero1" delay={0.3} aniX={0} aniY={50}>
                  <span
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                    // style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s;"
                  >
                    Bolalar bogʻchasi dasturi
                  </span>
                </Shower>
                <Shower name="home-hero2" delay={0.5} aniX={0} aniY={50}>
                  <h1
                    className="bd-hero-title wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                    // style="visibility: visible; animation-duration: 1s; animation-delay: 0.5s;"
                  >
                    Eng yaxshi bolalar ta'limi
                  </h1>
                </Shower>
                <Shower name="home-hero3" delay={0.7} aniX={0} aniY={50}>
                  <div className="bd-hero-btn wow fadeInUp">
                    {" "}
                    <Link to={"/classes"} className="bd-btn">
                      <span className="bd-btn-inner">
                        <span className="bd-btn-normal">Bizning takliflar</span>
                        <span className="bd-btn-hover">Bizning takliflar</span>
                      </span>
                    </Link>
                  </div>
                </Shower>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div id="scene">
                <div className="bd-hero-thumb-3-wrapper position-relative z-index-1">
                  <div className="bd-hero-thumb-3 position-relative">
                    <div className="bd-hero-thumb-3-mask">
                      <img
                        alt="img not found"
                        src={hero_3}
                        width="338"
                        height="299"
                      />
                    </div>
                  </div>
                  <div className="bd-hero-thumb-3-shape d-none d-md-block">
                    <div className="bd-hero-thumb-3-shape-1 position-absolute">
                      <img alt="img not found" src={shape1img} />
                    </div>
                    <div className="bd-hero-thumb-3-shape-2 position-absolute">
                      <img alt="img not found" src={shape2img} />
                    </div>
                    <div className="bd-hero-thumb-3-shape-3 position-absolute">
                      <img alt="img not found" src={shape3img} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bd-home-shape d-none d-lg-block">
        <img src={homeHeroImg} alt="" />
      </div>
    </section>
  );
};

export default homeHero;
