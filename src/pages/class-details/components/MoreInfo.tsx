import { LiaAngleRightSolid } from "react-icons/lia";
import { Container, Shower } from "../../../components";
import "./MoreInfo.scss";
import wayImg from "./details-2.jpg";

const MoreInfo = () => {
  return (
    <section className="bd-class-details-widget pb-70">
      <Container>
        <div className="row">
          <div className="col-lg-6 mb-50">
            <Shower
              name={"class-detail-more-info-1"}
              delay={0.3}
              aniX={-50}
              aniY={0}
            >
              <div className="bd-program-details-slider p-relative">
                <div className="bd-program-details-slider-thumb position-relative">
                  <img
                    alt="img not found"
                    src={data.img}
                    width="638"
                    height="478"
                  />
                  <div
                    className="panel-2 wow"
                    // style="visibility: visible;"
                  ></div>
                </div>
              </div>
            </Shower>
          </div>
          <div className="col-lg-6 mb-50">
            <Shower
              name={"class-detail-more-info-2"}
              delay={0.3}
              aniX={50}
              aniY={0}
            >
              <div className="bd-class-details-widget-content theme-bg-6">
                <h3 className="bd-class-details-widget-title mb-20">
                  Batafsil ma'lumot
                </h3>
                <p className="mb-25">{data.description}</p>
                <div className="bd-class-details-list">
                  <ul>
                    {data.list.map((item, index) => (
                      <li key={index}>
                        <LiaAngleRightSolid className="icon-right" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Shower>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MoreInfo;

const data = {
  img: wayImg,
  description: `Oʻtgan oʻn uch yil davomida bolalar uchun qilgan harakatlarimiz unutilmas boʻldi. Shu vaqtga qadar ishda shaxsiy va jamoaviy oʻshishga erishdik.`,
  list: [
    "Semestr boshlanish va tugash sanalarida tadbirlar",
    "3 yoshdan kichik bollar uchun maxshus guruhlar",
    "Bitiruv boʻlimi",
    "Bizning maktabimizda uchun tadqiqotlar",
    "Darsliklar 'Bestkids nashri' tomonidan",
  ],
};
