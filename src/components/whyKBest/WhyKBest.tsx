import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Container, Shower, Title } from "..";
import "./WhyKBest.scss";
import bottomImg from "./wave-section-break.png";
import { GiRibbonMedal } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";

const WhyKBest = () => {
  return (
    <div className="bd-feature-area position-relative theme-bg pt-120 pb-120">
      <div className="bd-feature-bottom-shape">
        <img alt="img not found" src={bottomImg} />
      </div>
      <Container>
        <Shower name={"why-b-best-1"} delay={0.3} aniX={0} aniY={50}>
          <Title
            title={"Nima uchun BestKids"}
            text1={`Bestkids sizning barcha xohish va istaklarizga javob beradigan. Zamonaviy va oʻzining an'analarga ega `}
            text2={`maktabgacha ta'lim muassasasi!`}
            color={"var(--bd-common-white)"}
            colSize="col-lg-8"
          />
        </Shower>
        <Shower name={"why-b-best-2"} delay={0.4} aniX={0} aniY={50}>
          <div className="bd-feature-wrapper">
            <div className="row">
              <div className="col-12">
                <ul className="feature">
                  {arr.map((item, index) => (
                    <li key={index} className="feature-item">
                      <div className="bd-feature">
                        <div className="bd-feature-content">
                          <div className={`bd-feature-icon icon-${index + 1}`}>
                            {item.icon}
                          </div>
                          <h4 className="bd-feature-title">{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Shower>
      </Container>
    </div>
  );
};

export default WhyKBest;

const arr = [
  {
    icon: <GiRibbonMedal />,
    title: "Eksklyuziv",
    text: "Sinfxonalar zamonaviy texnologiya va jihozlar bilan jihozlangan.",
  },
  {
    icon: <MdOutlineHealthAndSafety />,
    title: "Eng yuqori xavfsizlik",
    text: "Farandingiz xavfsizligi mutaxassislar nazorati ostida.",
  },
  {
    icon: <AiOutlineLike />,
    title: "Muammosiz",
    text: "Bestkids tomonidan maxsus dasturlar va siniflar siz uchun.",
  },
  {
    icon: <TbTruckDelivery />,
    title: "Quvnoq muhit",
    text: "Farzandingiz uchun eng yaxshi oʻqituvchilar ta'lim beriladi.",
  },
];
