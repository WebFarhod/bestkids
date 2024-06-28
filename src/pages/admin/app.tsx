import { Helmet } from "react-helmet-async";
import { AppView } from "../../sections/overview/view";
// import { AppView } from "../sections/overview/view";

export default function app() {
  return (
    <>
      <Helmet>
        <title> Dashboar | Bestkids </title>
      </Helmet>
      <AppView />
    </>
  );
}
