import { useEffect } from "react";
import { PageHero } from "../../components";
import "./Teachers.scss";
import TeachersSec from "./components/TeachersSec";
const Teachers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <PageHero pageName="Oʻqituvchilar" />
      <TeachersSec />
    </div>
  );
};

export default Teachers;
