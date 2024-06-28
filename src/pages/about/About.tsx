import {
  BestOfYourKids,
  HealthAndSafety,
  OurBestTeacher,
  PageHero,
  ParentSays,
  WhyKBest,
} from "../../components";
import { GiRibbonMedal } from "react-icons/gi";
import { TfiBlackboard } from "react-icons/tfi";
import img from "./1.webp";
import AboutSectionInfo from "./components/AboutSectionInfo";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <PageHero pageName="Biz haqimizda" />
      <BestOfYourKids counterAv={false} />
      <WhyKBest />
      <HealthAndSafety
        title={"Barcha bolalar uchun doʻstona muhit"}
        text1={`Soha mutaxassislari shuni takidlaydiki, doʻstona muhit va tengdoshlari orasida boʻlish, erkin fikrli boʻlib rivojlanishi va oʻziga isongan shaxs boʻlishi uchun zamindir.`}
        text2={"Biz bolalar bogʻchamizda xalqaro standartlariga javob beradigan muhit tashkil etilgan."}
        icon1={<GiRibbonMedal />}
        icon1Text={"Mutaxassislar nazorati"}
        icon2={<TfiBlackboard />}
        icon2Text={"Zamonaviy sinflar"}
        img={img}
      />
      <ParentSays />
      <OurBestTeacher />
      <AboutSectionInfo />
    </>
  );
};

export default About;
