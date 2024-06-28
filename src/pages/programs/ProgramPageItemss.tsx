import { Container } from "../../components";
import { usePrograms } from "../../service/query/program/programQuery";
import ProgramViewCard from "./ProgramViewCard";

// import { ProgramsData } from "../../data/programs";

const ProgramPageItemss = () => {
  const dataQuery = usePrograms();
  const programsData = dataQuery.data;
  return (
    <section className="bd-program-area pt-120 pb-80">
      <Container>
        <div className="row">
          {programsData?.map((item, index) => (
            <ProgramViewCard key={item._id} data={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProgramPageItemss;
