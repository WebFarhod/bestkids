import { Container, Shower } from "../../../components";
import "./ProgramDetailItem.scss";
import { IProgram } from "../../../types/programType";
import { imagePath } from "../../../utils/file-path";
import { FC } from "react";

interface IProps {
  data: IProgram;
}

const ProgramDetailItem: FC<IProps> = ({ data }) => {
  return (
    <section className="bd-class-details-widget pt-120 pb-70">
      <Container>
        <div className="row">
          <div className="col-xl-6 col-lg-12 mb-50">
            <Shower name={"program-detail-1"} delay={0.2} aniX={-50} aniY={0}>
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
            <Shower name={"program-detail-2"} delay={0.2} aniX={50} aniY={0}>
              <div className="bd-class-details-widget-content theme-bg-6 wow fadeInRight">
                <h3 className="bd-class-details-widget-title mb-20">
                  {data?.name}
                </h3>
                {/* <p className="mb-25">{data.text1}</p>
                <p className="mb-25">{data.text2}</p> */}
                {
                  <div
                    className="search-p"
                    dangerouslySetInnerHTML={{
                      __html: data?.description || "",
                    }}
                  ></div>
                }
                <div className="bd-class-details-author-wrapper mt-35">
                  {/* <div className="bd-class-details-author">
                    <div className="bd-class-details-author-thumb">
                      <img
                        alt="img not found"
                        src={data.teacherImg}
                        width="96"
                        height="96"
                      />
                    </div>
                    <div className="bd-class-details-author-name">
                      <span>Sinf oʻqituvchisi</span>
                      <h5>
                        <Link to="/teachers">{data.teacher}</Link>
                      </h5>
                    </div>
                  </div> */}
                  <div className="bd-class-details-cat">
                    <span>Kategoriya</span>
                    <h5>{data?.type}</h5>
                  </div>
                  <div className="bd-class-details-cat class-detail-cat-line"></div>
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

export default ProgramDetailItem;
