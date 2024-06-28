/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { New, PageHero } from "../../components";
import NewsDetailsinfo from "./components/NewsDetailsinfo";
import { useParams } from "react-router-dom";
import { useNew } from "../../service/query/new/newQuery";
import { INewData } from "../../types/newType";
import { useViewNew } from "../../service/query/new/newMutations";

const NewsDetails = () => {
  const { id } = useParams();
  const dataQuery = useNew(id || "");
  const data: INewData = dataQuery.data || [];
  const viewNew = useViewNew();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    viewNew.mutate(id || "");
  }, [id]);
  return (
    <>
      <PageHero pageName="Yangilik tafsilotlari" />
      <NewsDetailsinfo newData={data} />
      <New positionText={true} />
    </>
  );
};

export default NewsDetails;
