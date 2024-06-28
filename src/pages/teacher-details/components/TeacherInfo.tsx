import { Container, Shower } from "../../../components";
import "./TeacherInfo.scss";
import { Link } from "react-router-dom";
import { Line } from "rc-progress";

// import { teacherData } from "../../../data/teacherData";
import { cosialIconArray } from "../../../data/Icondata";
import { ITeacher } from "../../../types/teacherType";
import { imagePath } from "../../../utils/file-path";
import { FC } from "react";

interface IProps {
  data: ITeacher;
}

const TeacherInfo: FC<IProps> = ({ data }) => {
  return (
    <section className="bd-teacher-widget-area pb-70 pt-120">
      <Container>
        <div className="row">
          <div className="col-lg-6 mb-50">
            <Shower name={`teacher-info-1`} delay={0.3} aniX={-50} aniY={0}>
              <div className="bd-teacher-widget ">
                <div className="bd-teacher-widget-thumb position-relative">
                  <img
                    alt="img not found"
                    src={imagePath(data?.image)}
                    width="636"
                    height="478"
                  />
                  <div className="panel wow"></div>
                </div>
              </div>
            </Shower>
          </div>
          <div className="col-lg-6 mb-50">
            <Shower name={`teacher-info-2`} delay={0.3} aniX={50} aniY={0}>
              <div className="bd-teacher-widget theme-bg-6">
                <div className="bd-teacher-widget-content">
                  <h3 className="bd-teacher-widget-title">{`${data?.name} ${data?.surname}`}</h3>
                  <span className="bd-teacher-widget-tag">{data?.rank}</span>
                  {/* <p>{data?.data_items.text1}</p>
                  <p>{data?.data_items.text2}</p> */}
                  {
                    <div
                      className="search-p"
                      dangerouslySetInnerHTML={{
                        __html: data?.description || "",
                      }}
                    ></div>
                  }
                  <div className="bd-teacher-widget-social">
                    <span>Meni kuzatish:</span>
                    <ul>
                      {data?.socials.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link} rel="noreferrer" target="_blank">
                            {cosialIconArray[index]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Shower>
          </div>
          <div className="col-lg-6 mb-50">
            <Shower name={`teacher-info-3`} delay={0.4} aniX={-50} aniY={0}>
              <div className="bd-teacher-widget theme-bg-6">
                <div className="bd-teacher-widget-content">
                  <h4 className="bd-teacher-widget-title-2 mb-25">
                    Mening mahoratim:
                  </h4>
                  <div className="bd-teacher-skill-wrap">
                    {data?.skills?.map((item, index) => (
                      <div key={index} className="bd-teacher-skill mb-30">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>{item.name}</span>
                          <span>{item.percent}%</span>
                        </div>
                        <Line
                          percent={Number(item.percent)}
                          strokeWidth={1.5}
                          strokeColor="#ff9b24"
                          trailWidth={1.5}
                          trailColor="#ffecd6"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Shower>
          </div>
          <div className="col-lg-6 mb-50">
            <Shower name={`teacher-info-4`} delay={0.4} aniX={50} aniY={0}>
              <div className="bd-teacher-widget theme-bg-6">
                <div className="bd-teacher-widget-content">
                  <h4 className="bd-teacher-widget-title-2 mb-15">
                    Shaxsiy ma'lumotlar:
                  </h4>
                  <div className="bd-teacher-widget-info-wrap">
                    {data?.infos?.map((item, index) => (
                      <div key={index} className="bd-teacher-widget-info">
                        <p>{item.name}</p>
                        {/* {item.link ? (
                          <p>
                            <Link to={item.link}>{item.info}</Link>
                          </p>
                        ) : 
                        (
                          <p>{item.info}</p>
                        )
                        } */}
                        <p>{item.info}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Shower>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeacherInfo;
