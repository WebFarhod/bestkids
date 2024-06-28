import { Helmet } from "react-helmet-async";
import { NewsView } from "../../../sections/news/view";

export default function News() {
  return (
    <>
      <Helmet>
        <title> Yangiliklar | Bestkids </title>
      </Helmet>
      <NewsView />
    </>
  );
}
