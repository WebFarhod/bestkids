import { FC } from "react";
import "./PageHero.scss";
import img from "./breadcrumb-bg.ccffde11.jpg";
import shape1 from "./shape1.png";
import shape2 from "./shape2.png";
import { Container } from "..";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";

interface IProps {
  pageName: string;
}

const PageHero: FC<IProps> = ({ pageName }) => {
  return (
    <section className="page-hero">
      <div
        className="bd-breadcrumb-bg"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="bd-breadcrumb-wrapper mb-60 p-relative">
        <Container>
          <div className="bd-breadcrumb-shape d-none d-sm-block position-relative">
            <div className="bd-breadcrumb-shape-1">
              <img alt="img not found" src={shape1} width="80" height="35" />
            </div>
            <div className="bd-breadcrumb-shape-2">
              <img alt="img not found" src={shape2} width="54" height="36" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="bd-breadcrumb d-flex align-items-center justify-content-center">
                <div className="bd-breadcrumb-content text-center">
                  <h1 className="bd-breadcrumb-title">{pageName}</h1>
                  <div className="bd-breadcrumb-list">
                    <span>
                      <Link to="/">
                        <GrHomeRounded />
                        Bestkids
                      </Link>
                    </span>
                    <span>
                      <strong className="fs-5 fw-bold">-</strong>
                    </span>
                    <span>{pageName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bd-wave-wrapper bd-wave-wrapper-3">
        <div className="bd-wave bd-wave-3"></div>
        <div className="bd-wave bd-wave-3"></div>
      </div>
    </section>
  );
};

export default PageHero;
