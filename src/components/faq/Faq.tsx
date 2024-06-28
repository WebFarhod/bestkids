import { Container, MaskImg, Shower } from "..";
import { faqImg } from "../../constant/home";
import AccordionFaq from "./AccordionFaq";

import "./Faq.scss";

const Faq = () => {
  return (
    <section className="bd-faq-area pt-120 pb-60 overflow-hidden ">
      <Container>
        <div className="row  align-items-center">
          <div className="col-xl-6 col-lg-6">
            <Shower name={"faq-1"} delay={0.2} aniX={-50} aniY={0}>
              <div className="bd-faq-content mb-60">
                <div className="bd-section-title-wrapper mb-25">
                  <h2 className="bd-section-title mb-0">
                    Bestkids haqida koʻproq <br />
                    ma'lumot oling
                  </h2>
                </div>

                <AccordionFaq />
              </div>
            </Shower>
          </div>

          <MaskImg img={faqImg} name="faq-2" />
        </div>
      </Container>
    </section>
  );
};

export default Faq;
