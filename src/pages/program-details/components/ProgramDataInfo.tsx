/* eslint-disable no-unsafe-optional-chaining */
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { HiChartBar } from "react-icons/hi2";

import { Container, Shower } from "../../../components";
import "./ProgramDataInfo.scss";
import { FC } from "react";
import { IProgram } from "../../../types/programType";

interface IProps {
  data: IProgram;
}

const ProgramDataInfo: FC<IProps> = ({ data }) => {
  return (
    <section className="bd-shop-cat-area pb-90">
      <Container>
        <div className="row justify-content-center">
          {data?.infos?.map(
            (item: { name: string; info: string }, index: number) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <Shower
                  name={`program-detail-info-${index}`}
                  delay={index / 10 + 0.2}
                  aniX={0}
                  aniY={50}
                >
                  <div className="bd-shop-cat-wrap mb-30">
                    <div className="bd-shop-cat">
                      <div className="bd-shop-cat-content">
                        <div className={`bd-shop-cat-title cat-${1 + index}`}>
                          <div className="bd-shop-cat-icon">{icons[index]}</div>
                        </div>
                        <h6>{item?.name}</h6>
                        <span>{item?.info}</span>
                      </div>
                    </div>
                  </div>
                </Shower>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProgramDataInfo;

const icons = [
  <HiChartBar />,
  <IoCalendarOutline />,
  <BsClockHistory />,
  <FaPeopleGroup />,
];
