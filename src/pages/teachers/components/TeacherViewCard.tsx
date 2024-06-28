import { FC } from "react";
import { ITeacher } from "../../../types/teacherType";
import { Shower } from "../../../components";
import TeacherItem from "../../../components/ourBestTeacher/TeacherItem";

interface IProps {
  data: ITeacher;
  index: number;
}
const TeacherViewCard: FC<IProps> = ({ data, index }) => {
  return (
    <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
      <Shower
        name={`contact-form-${index}`}
        delay={0.3 + (index * 2) / 100}
        aniX={0}
        aniY={50}
      >
        <TeacherItem
          _id={data._id}
          image={data.image}
          name={`${data.name} ${data.surname}`}
          rank={data.rank}
          socials={data.socials}
        />
      </Shower>
    </div>
  );
};

export default TeacherViewCard;
