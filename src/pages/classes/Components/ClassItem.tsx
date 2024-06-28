import { Container } from "../../../components";
import "./ClassItem.scss";
import { useClasses } from "../../../service/query/class/classQuery";
import ClassViewCard from "./ClassViewCard";
import { IClass } from "../../../types/classType";

const ClassItem = () => {
  const dataQuery = useClasses();
  const classesData = dataQuery.data;
  return (
    <section className="bd-class-area pt-110 pb-70">
      <Container>
        <div className="row">
          {classesData?.map((item: IClass, index) => (
            <ClassViewCard key={item._id} data={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ClassItem;
