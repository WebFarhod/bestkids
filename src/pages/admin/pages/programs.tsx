import { Helmet } from "react-helmet-async";
import { ProgramView } from "../../../sections/program/view/";

export default function Programs() {
  return (
    <>
      <Helmet>
        <title> Dasturlar | Bestkids </title>
      </Helmet>
      <ProgramView />
    </>
  );
}
