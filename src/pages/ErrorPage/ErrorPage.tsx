import { useEffect } from "react";
import { PageHero } from "../../components";
import "./ErrorPage.scss";
import ErrorImg from "./components/ErrorImg";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <PageHero pageName="404" />
      <ErrorImg />
    </>
  );
};

export default ErrorPage;
