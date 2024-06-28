import { Container, MaskImg, Shower } from "..";

import "./HealthAndSafety.scss";
import { FC, ReactNode } from "react";

interface IProps {
  title: string;
  text1: string;
  text2: string;
  icon1: ReactNode;
  icon1Text: string;
  icon2: ReactNode;
  icon2Text: string;
  img: string;
}

const HealthAndSafety: FC<IProps> = ({
  title,
  text1,
  text2,
  icon1,
  icon1Text,
  icon2,
  icon2Text,
  img,
}) => {
  return (
    <section className="bd-promotion-area pt-120 pb-60 fix">
      <Container>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <Shower name={"Health-1"} delay={0.3} aniX={-50} aniY={0}>
              <div className="bd-promotion bd-promotion-2 mb-60 ">
                <div className="bd-section-title-wrapper mb-35">
                  <h2 className="bd-section-title mb-10">{title}</h2>
                  <span className="mb-10 d-inline-block">{text1}</span>
                  <p> {text2}</p>
                </div>
                <div className="bd-promotion-list-2">
                  <ul>
                    <li>
                      <div className="bd-promotion-icon icon-1">{icon1}</div>
                      <span className="mb-0">{icon1Text}</span>
                    </li>
                    <li>
                      <div className="bd-promotion-icon icon-2">{icon2}</div>
                      <span className="mb-0">{icon2Text}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Shower>
          </div>
          <MaskImg img={img} name="health-and-safety" />
        </div>
      </Container>
    </section>
  );
};

export default HealthAndSafety;
