import { Link } from "react-router-dom";
import { Container, Shower } from "../../../components";
import "./WayToLearn.scss";
import wayImg from "./details-1.jpg";

const WayToLearn = () => {
  return (
    <section className="bd-program-details-widget pb-70">
      <Container>
        <div className="row">
          <div className="col-lg-6 mb-50">
            <Shower
              name={"program-detail-way-1"}
              delay={0.3}
              aniX={-50}
              aniY={0}
            >
              <div className="bd-program-details-widget-content theme-bg-6">
                <h3 className="bd-program-details-widget-title mb-20">
                  Oʻrganish usuli
                </h3>
                <p className="mb-25">{data.text1}</p>
                <p className="mb-25">{data.text2}</p>
                <div className="bd-program-details-btn">
                  <Link className="bd-btn" to="/about">
                    <span className="bd-btn-inner">
                      <span className="bd-btn-normal">Koʻproq Bilish</span>
                      <span className="bd-btn-hover">Koʻproq Bilish</span>
                    </span>
                  </Link>
                </div>
              </div>
            </Shower>
          </div>
          <div className="col-lg-6 mb-50">
            <Shower
              name={"program-detail-way-2"}
              delay={0.3}
              aniX={50}
              aniY={0}
            >
              <div className="bd-program-details-slider p-relative wow fadeInRight">
                <div className="bd-program-details-slider-thumb position-relative">
                  <img
                    alt="img not found"
                    src={data.img}
                    width="638"
                    height="478"
                  />
                  <div className="panel-2 wow"></div>
                </div>
              </div>
            </Shower>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WayToLearn;

const data = {
  text1: `Bola oʻzi xohlagan narsani qilish uchun etarli darajada erkinlikka ega boʻlishi kerak, shu bilan birga uning his-tuygʻularini ragʻbatlantiradigan va ijodkorligini amalga oshiradigan muhitga toʻliq singib ketishi kerak. Ularning sinfi tom ma'noda ularning dunyosi boʻlib, u koʻproq intellektual oʻsishga yordam beradigan materiallar va tajribalar bilan tanishishni ta'minlaydi.`,
  text2: `Ushbu ma'lumotlarni oʻqish uchun bir oz vaqt ajrating va ishonchimiz komilki, Bestkids sizning farzandizgiz uchun eng yaxshi joy ekanligini tushinasiz`,
  img: wayImg,
};
