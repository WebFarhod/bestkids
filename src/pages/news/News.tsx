import { useEffect } from "react";
import { PageHero } from "../../components";
import NewsItem from "./NewsItem";

const News = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <PageHero pageName="Yangiliklar" />
      <NewsItem />
    </>
  );
};

export default News;
