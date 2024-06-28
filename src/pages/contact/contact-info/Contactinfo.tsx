import { Container, Shower } from "../../../components";
import { Link } from "react-router-dom";
// data
import { KidsData } from "../../../data/kidsData";
import { contactIconArray } from "../../../data/Icondata";

import "./Contactinfo.scss";
const Contactinfo = () => {
  return (
    <section className="bd-contact-info-area pt-120 pb-90">
      <Container>
        <div className="row justify-content-center">
          {KidsData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-30 ">
              <Shower
                name={`contact-info-${index + 1}`}
                delay={0.3}
                aniX={0}
                aniY={50}
              >
                <div className="bd-contact-info">
                  <div className="bd-contact-info-content">
                    <div className={`bd-contact-info-icon cat-${index + 1}`}>
                      <Link to={item.link}>{contactIconArray[index]}</Link>
                    </div>
                    <h6>
                      <Link to={item.link}>{item.name}</Link>
                    </h6>
                  </div>
                </div>
              </Shower>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Contactinfo;

// const arr = [
//   {
//     icon: <FiPhone />,
//     link: "tel:998901234567",
//     text: "+998901234567",
//   },
//   {
//     icon: <SlLocationPin />,
//     link: "#",
//     text: "Jizzax shahar, Sharof Rashidov koʻchasi",
//   },
//   {
//     icon: <GoMail />,
//     link: "bestkids@gmail.com",
//     text: "support@Bestkids.com",
//   },
// ];
