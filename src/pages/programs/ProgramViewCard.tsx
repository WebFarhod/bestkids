import { FC } from "react";
import { ProgramItem, Shower } from "../../components";
import { IProgram } from "../../types/programType";

interface IProps {
  data: IProgram;
  index: number;
}
const ProgramViewCard: FC<IProps> = ({ data, index }) => {
  return (
    <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-40">
      <Shower
        name={`bestOfYourKids-${index}`}
        delay={Number(`0.${2 * index + 2}`)}
        aniX={0}
        aniY={50}
      >
        <ProgramItem
          data={data}
          color={colors[index]}
          bgColor={bgColors[index]}
        />
      </Shower>
    </div>
  );
};

export default ProgramViewCard;

const colors = [
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
];
const bgColors = [
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
  "var(--bd-theme-7)",
  "var(--bd-theme-6)",
  "#ffebef",
  "#ffebeb",
  "#ebfaff",
  "#ebebff",
];
