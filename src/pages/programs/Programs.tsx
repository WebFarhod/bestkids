import { WiStars } from "react-icons/wi";
import { HealthAndSafety, PageHero, ParentSays } from "../../components";
import { MdOutlineWash } from "react-icons/md";
import img from "./3.jpg";
import ProgramPageItemss from "./ProgramPageItemss";
import { useEffect } from "react";

const Programs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <PageHero pageName="Dasturlar" />
      <ProgramPageItemss />
      <ParentSays />
      <HealthAndSafety
        title={"Salomatlik va xavfsizlik"}
        text1={`Soha mutaxassislari shuni takidlaydiki, doʻstona muhit va tengdoshlari orasida boʻlish, erkin fikrli boʻlib rivojlanishi va oʻziga isongan shaxs boʻlishi uchun zamindir.`}
        text2={
          "Biz bolalar bogʻchamizda xalqaro standartlariga javob beradigan muhit tashkil etilgan."
        }
        icon1={<WiStars />}
        icon1Text={"Tungi tozalik"}
        icon2={<MdOutlineWash />}
        icon2Text={"Qoʻlni yuvish"}
        img={img}
      />
    </>
  );
};

export default Programs;
