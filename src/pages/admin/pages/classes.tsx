import { Helmet } from "react-helmet-async";
import { ClassView } from "../../../sections/class/view";

export default function Classes() {
  return (
    <>
      <Helmet>
        <title> Sinflar | Bestkids </title>
      </Helmet>
      <ClassView />
    </>
  );
}
