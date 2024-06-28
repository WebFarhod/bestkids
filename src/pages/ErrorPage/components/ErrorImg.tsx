import { Link } from "react-router-dom";
import { Container } from "../../../components";
import "./ErrorImg.scss";
import img from "./error-404.c07abdab.svg";
import { GrHomeRounded } from "react-icons/gr";

const ErrorImg = () => {
  return (
    <section className="error-page pt-120 pb-120">
      <Container>
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="bd-section-title-wrapper mb-45">
              <h2 className="bd-section-title mb-0">OOPS! SAHIFA TOPILMADI!</h2>
              <p>
                Mijozning ehtiyojlarini inobatga olamiz va eng yaxshisi boʻlshga intilamiz.
                Bestkids bolalar aqlli boʻlishi uchun doimo harakatda.
              </p>
            </div>
            <div className="bd-error-btn">
              <Link className="bd-btn" to="/">
                <span className="bd-btn-inner">
                  <span className="bd-btn-normal d-flex align-items-center">
                    <GrHomeRounded />
                    {" -  "}Uyga qaytish
                  </span>
                  <span className="bd-btn-hover d-flex align-items-center">
                    <GrHomeRounded />
                    {" -  "}Uyga qaytish
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="bd-error-thumb-wrapper">
              <div className="bd-error-thumb">
                <img alt="img not found" src={img} width="636" height="607" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ErrorImg;
