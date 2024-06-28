import { FC } from "react";
import { BdGradientBg, Container, Shower, Title } from "..";
import "./OurPrograms.scss";
import OurProgramsSlider from "./OurProgramsSlider";

interface IProps {
  title: string;
  bdGradient: string;
}

const OurPrograms: FC<IProps> = ({ title, bdGradient }) => {
  return (
    <section className="bd-class-area pt-110 pb-120">
      <Container>
        {bdGradient !== "empty" && <BdGradientBg />}
        <Shower name={"ourPrograms-1"} delay={0.2} aniX={0} aniY={50}>
          <Title
            title={title}
            text1={`Bestkids oʻz eshiklarini xxxx-yilda tarbiyalanuvchilarga eng`}
            text2={` yaxshi maktabgacha ta'limni berish uchun ochildi.`}
            color={null}
            colSize="col-lg-8"
          />
        </Shower>
        <Shower name={"ourPrograms-2"} delay={0.4} aniX={0} aniY={50}>
          <OurProgramsSlider />
        </Shower>
      </Container>
    </section>
  );
};

export default OurPrograms;
