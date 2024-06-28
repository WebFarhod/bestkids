/* eslint-disable no-unsafe-optional-chaining */
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { HiChartBar } from "react-icons/hi2";

import { Container, Shower } from "../../../components";
import "./ClassDateInfo.scss";
import { IClass } from "../../../types/classType";
import { FC } from "react";
interface IProps {
  data: IClass;
}
const ClassDateInfo: FC<IProps> = ({ data }) => {
  return (
    <section className="bd-shop-cat-area pb-90">
      <Container>
        <div className="row justify-content-center">
          {data.infos?.map(
            (item: { name: string; info: string }, index: number) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <Shower
                  name={`class-detail-info-${index}`}
                  delay={(2 * index) / 10 + 0.2}
                  aniX={0}
                  aniY={50}
                >
                  <div className="bd-shop-cat-wrap mb-30 wow fadeInUp">
                    <div className="bd-shop-cat">
                      <div className="bd-shop-cat-content">
                        <div className={`bd-shop-cat-title cat-${index + 1}`}>
                          <div className="bd-shop-cat-icon">{icons[index]}</div>
                        </div>
                        <h6>{item.name}</h6>
                        <span>{item.info}</span>
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

export default ClassDateInfo;
const icons = [
  <HiChartBar />,
  <IoCalendarOutline />,
  <BsClockHistory />,
  <FaPeopleGroup />,
];
