import { useEffect } from "react";
import { JoinOurNewSession, OurPrograms, PageHero } from "../../components";
import "./ClassDetails.scss";
import ClassDateInfo from "./components/ClassDateInfo";
import ClassInfo from "./components/ClassInfo";
import MoreInfo from "./components/MoreInfo";
import TimeTable from "./components/TimeTable";
import WayToLearn from "./components/WayToLearn";
import { useClass } from "../../service/query/class/classQuery";
import { IClass } from "../../types/classType";
import { useParams } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";

const ClassDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const dataQuery = useClass(id || "");
  const data: IClass = dataQuery.data;

  if (dataQuery.isPending) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (dataQuery.isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <PageHero pageName="Sinf tafsilotlari" />
      <ClassInfo data={data} />
      <ClassDateInfo data={data} />
      <WayToLearn />
      <TimeTable />
      <MoreInfo />
      <JoinOurNewSession />
      <OurPrograms title={"Boshqa dasturlar"} bdGradient={"noEmpty"} />
    </>
  );
};

export default ClassDetails;
