import { FC } from "react";
import "./MaskImg.scss";
import { Shower } from "..";
import trippleLine from "./tripple-line.png";

interface IProps {
  img: string;
  name: string;
}

const MaskImg: FC<IProps> = ({ img, name }) => {
  return (
    <div className="col-xl-6 col-lg-6">
      <Shower name={`mask-${name}`} delay={0.2} aniX={50} aniY={0}>
        <div className="bd-promotion-thumb-wrapper mb-60">
          <div className="bd-promotion-thumb">
            <div
              className="bd-promotion-thumb-mask position-relative "
              style={{
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                display: "inline-flex",
              }}
            >
              <img src={img} alt="" />
            </div>
          </div>
          <div className="bd-promotion-shape d-none d-lg-block">
            <img
              alt="img not found"
              src={trippleLine}
              width="161"
              height="67"
            />
          </div>
        </div>
      </Shower>
    </div>
  );
};

export default MaskImg;
