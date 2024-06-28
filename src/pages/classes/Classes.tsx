import { HealthAndSafety, PageHero, ParentSays } from "../../components";
import "./Classes.scss";
import ClassItem from "./Components/ClassItem";
import img from "./3.jpg";

import { WiStars } from "react-icons/wi";
import { MdOutlineWash } from "react-icons/md";
import { useEffect } from "react";

const Classes = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <PageHero pageName="Sinflar" />
      <ClassItem />
      <ParentSays />
      <HealthAndSafety
        title={"Salomatlik va tozalik"}
        text1={`Soha mutaxassislari shuni takidlaydiki, doʻstona muhit va tengdoshlari orasida boʻlish, erkin fikrli boʻlib rivojlanishi va oʻziga isongan shaxs boʻlishi uchun zamindir.`}
        text2={
          "Biz bolalar bogʻchamizda xalqaro standartlariga javob beradigan muhit tashkil etilgan."
        }
        icon1={<WiStars />}
        icon1Text={"Tungi tozalash"}
        icon2={<MdOutlineWash />}
        icon2Text="Qoʻlni yuvish"
        img={img}
      />
    </>
  );
};

export default Classes;
