// import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { Container } from "../../../components";
import "./TeachersSec.scss";
import { useTeaches } from "../../../service/query/teacher/teacherQuery";
import { ITeacher } from "../../../types/teacherType";
import TeacherViewCard from "./TeacherViewCard";

const TeachersSec = () => {
  const dataQuery = useTeaches();
  const teacherData = dataQuery.data;
  return (
    <section className="bd-teacher-area pt-120 pb-80">
      <Container>
        <div className="row">
          {teacherData?.map((item: ITeacher, index) => (
            <TeacherViewCard key={item._id} data={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeachersSec;
