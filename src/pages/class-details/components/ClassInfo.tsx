import { Container, Shower } from "../../../components";
import { Link } from "react-router-dom";
import "./ClassInfo.scss";
import { IClass, IClassTeacher } from "../../../types/classType";
import { imagePath } from "../../../utils/file-path";
import { FC } from "react";
interface IProps {
  data: IClass;
}

const ClassInfo: FC<IProps> = ({ data }) => {
  return (
    <section className="bd-class-details-widget pt-120 pb-70">
      <Container>
        <div className="row">
          <div className="col-xl-6 col-lg-12 mb-50">
            <Shower name={"class-detail-1"} delay={0.2} aniX={-50} aniY={0}>
              <div className="bd-class-details-thumb potision-relative wow fadeInLeft">
                <img
                  alt="img not found"
                  src={imagePath(data?.image)}
                  width="639"
                  height="478"
                />
                <div className="panel wow"></div>
              </div>
            </Shower>
          </div>
          <div className="col-xl-6 col-lg-12 mb-50">
            <Shower name={"class-detail-2"} delay={0.2} aniX={50} aniY={0}>
              <div className="bd-class-details-widget-content theme-bg-6 wow fadeInRight">
                <h3 className="bd-class-details-widget-title mb-20">
                  {data?.name}
                </h3>
                {/* <p className="mb-25">{data?.text1}</p>
                <p className="mb-25">{data?.text2}</p> */}
                {
                  <div
                    className="search-p"
                    dangerouslySetInnerHTML={{ __html: data?.about || "" }}
                  ></div>
                }
                <div className="bd-class-details-author-wrapper mt-35">
                  <div className="bd-class-details-author">
                    <div className="bd-class-details-author-thumb">
                      <img
                        alt="img not found"
                        src={
                          (data.teacher as IClassTeacher)?.image
                            ? imagePath((data.teacher as IClassTeacher)?.image)
                            : ""
                        }
                        width="96"
                        height="96"
                      />
                    </div>
                    <div className="bd-class-details-author-name">
                      <span>Sinf oʻqituvchisi</span>
                      <h5>
                        <Link
                          to={
                            (data.teacher as IClassTeacher)?._id
                              ? `/teachers-details/${
                                  (data.teacher as IClassTeacher)?._id
                                }`
                              : ""
                          }
                        >
                          {`${(data.teacher as IClassTeacher)?.name} ${
                            (data.teacher as IClassTeacher)?.surname
                          }`}
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="bd-class-details-cat">
                    <span>Kategoriya</span>
                    <h5>{data?.type}</h5>
                  </div>
                  <div className="bd-class-details-cat">
                    <span>Oyiga</span>
                    <h5>{data?.price}</h5>
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

export default ClassInfo;
