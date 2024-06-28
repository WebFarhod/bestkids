import { Container, CountNumber } from "../../../components";
import "./AboutSectionInfo.scss";
import { GoStar } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { GiRibbonMedal } from "react-icons/gi";

const AboutSectionInfo = () => {
  return (
    <div className="bd-counter-area-2 pb-90">
      <Container>
        <div className="row justify-content-center">
          {arr.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-10 col-sm-10">
              <div className="bd-counter-2 mb-30">
                <div className="bd-counter-2-icon">{item.icon}</div>
                <div className="bd-counter-2-content">
                  <div className="bd-counter-2-number">
                    <div className="bd-promotion-counter-number ">
                      <CountNumber num={item.number} tr={`${index}`} />
                      {/* <span className="counter">{item.number}</span> */}
                      <span>
                        <span className="counter-text">{item.numbereText}</span>
                      </span>
                    </div>
                  </div>
                  <div className="bd-counter-2-text">
                    <span>
                      {item.text1}
                      <br /> {item.text2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutSectionInfo;

const arr = [
  {
    icon: <GoStar />,
    number: 14,
    numbereText: "+",
    text1: "yillik",
    text2: " tajriba",
  },
  {
    icon: <PiStudent />,
    number: 7,
    numbereText: "K+",
    text1: "ortiq tahsil",
    text2: "oluvchi",
  },
  {
    icon: <GiRibbonMedal />,
    number: 15,
    numbereText: "+",
    text1: "ziyod",
    text2: "yutuqlar",
  },
];
