import { Helmet } from "react-helmet-async";
import { TeacherView } from "../../../sections/teacher/view";

export default function Teachers() {
  return (
    <>
      <Helmet>
        <title> Xodimlar | Bestkids </title>
      </Helmet>
      {/* <p>Teachers</p> */}
      <TeacherView />
    </>
  );
}
