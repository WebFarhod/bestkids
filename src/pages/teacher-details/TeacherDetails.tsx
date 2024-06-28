import { useEffect } from "react";
import { PageHero } from "../../components";
import "./TeacherDetails.scss";
import TeacherInfo from "./components/TeacherInfo";
import TeacherTable from "./components/TeacherTable";
import { useParams } from "react-router-dom";
import { useTeacher } from "../../service/query/teacher/teacherQuery";
import { ITeacher } from "../../types/teacherType";

const TeacherDetails = () => {
  const { id } = useParams();
  const dataQuery = useTeacher(id || "");
  const data: ITeacher = dataQuery.data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <PageHero pageName="Xodim tafsilotlari" />
      <TeacherInfo data={data} />
      <TeacherTable />
    </div>
  );
};

export default TeacherDetails;
