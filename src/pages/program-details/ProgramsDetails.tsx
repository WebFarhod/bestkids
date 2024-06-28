import { JoinOurNewSession, OurPrograms, PageHero } from "../../components";

import WayToLearn from "../class-details/components/WayToLearn";
import MoreInfo from "../class-details/components/MoreInfo";
import ProgramTimeTable from "./components/ProgramTimeTable";
import { useEffect } from "react";
import ProgramDetailItem from "./components/ProgramDetailItem";
import ProgramDataInfo from "./components/ProgramDataInfo";
import { useParams } from "react-router-dom";
import { useProgram } from "../../service/query/program/programQuery";

const ProgramsDetails = () => {
  const { id } = useParams();

  const dataQuery = useProgram(id || "");
  const data = dataQuery.data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <PageHero pageName="Programs Details" />
      <ProgramDetailItem data={data} />
      <ProgramDataInfo data={data} />
      <WayToLearn />
      <ProgramTimeTable />
      <MoreInfo />
      <JoinOurNewSession />
      <OurPrograms title={"Boshqa dasturlar"} bdGradient={"empty"} />
    </>
  );
};

export default ProgramsDetails;
