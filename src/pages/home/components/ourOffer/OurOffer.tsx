import { Container, Shower, Title } from "../../../../components";
import "./OurOffer.scss";
import Slider from "./ourOfferSlider";

const Offer = () => {
  return (
    <section className='bd-class-area pt-110 pb-120'>
      <Container>
        <Shower name={"offer-1"} delay={0.2} aniX={0} aniY={50}>
          <Title
            title={title.title}
            text1={title.text1}
            text2={title.text2}
            color={null}
            colSize='col-lg-8'
          />
        </Shower>
        <Shower name={"offer-2"} delay={0.4} aniX={0} aniY={50}>
          <div className='row'>
            <div className='col-12'>
              <Slider />
            </div>
          </div>
        </Shower>
      </Container>
    </section>
  );
};

export default Offer;

const title = {
  title: "Bizning takliflarimiz",
  text1: `Bizning koʻp bosqichli bogʻchamizdagi 2 yoshdan 7 yoshgacha boʻlgan`,
  text2: "bolalarga qaratilgan oʻquv dasturiga ega.",
};
