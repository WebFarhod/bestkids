import { useEffect } from "react";
import {
  BestOfYourKids,
  Faq,
  JoinOurNewSession,
  New,
  OurBestTeacher,
  OurPrograms,
  ParentSays,
} from "../../components";
import { HomeHero, OurOffer } from "./components";
import "./style.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <HomeHero />
      <OurOffer />
      <BestOfYourKids counterAv={true} />
      <OurPrograms title={"Bizning Dasturlarimiz"} bdGradient="noEmpty" />
      <Faq />
      <JoinOurNewSession />
      <OurBestTeacher />
      <ParentSays />
      <New positionText={false} />
    
    </>
  );
};

export default Home;
