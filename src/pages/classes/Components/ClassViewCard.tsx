import { FC } from "react";
import { Shower } from "../../../components";
import { Link } from "react-router-dom";
import { IClass, IClassTeacher } from "../../../types/classType";
import { imagePath } from "../../../utils/file-path";
import "./ClassItem.scss";

interface IProps {
  data: IClass;
  index: number;
}
const ClassViewCard: FC<IProps> = ({ data, index }) => {
  return (
    <div key={data?._id} className="col-xl-4 col-lg-6 col-md-6">
      <Shower
        name={`classItem-${data?._id}`}
        delay={index / 10}
        aniX={0}
        aniY={50}
      >
        <div className="class-item mb-50">
          <div className="bd-class-thumb">
            <img
              alt="img not found"
              src={imagePath(data?.image)}
              width="639"
              height="478"
            />
          </div>
          <div className="bd-class-content-3 theme-bg-6 ">
            <Link to={`/class-details/${data?._id}`}>
              <h3 className="bd-class-title-3">{data?.name}</h3>
            </Link>
            <p className="mb-20">{data?.description}</p>
            <div className="bd-class-meta-wrapper d-flex justify-content-between align-items-center flex-wrap">
              <div className="bd-class-meta d-flex align-items-center flex-wrap">
                <div className="bd-class-meta-thumb">
                  <Link
                    to={
                      (data.teacher as IClassTeacher)._id
                        ? `/teachers-details/${
                            (data.teacher as IClassTeacher)._id
                          }`
                        : ""
                    }
                  >
                    <img
                      alt="img not found"
                      src={imagePath((data.teacher as IClassTeacher).image)}
                      width="96"
                      height="96"
                    />
                  </Link>
                </div>
                <span>
                  <Link
                    to={
                      (data.teacher as IClassTeacher)._id
                        ? `/teachers-details/${
                            (data.teacher as IClassTeacher)._id
                          }`
                        : ""
                    }
                  >
                    {`${(data.teacher as IClassTeacher).name} ${
                      (data.teacher as IClassTeacher).surname
                    }`}
                  </Link>
                </span>
              </div>
              <div className="bd-class-meta">
                <div className="bd-class-meta-price">
                  <span>{data?.price}soʻm/</span>oyiga
                </div>
              </div>
            </div>
          </div>
          <div className="bd-class-btn-3 theme-bg-2 text-center">
            <Link to={`/class-details/${data?._id}`}>Hoziroq Qoʻshilish</Link>
          </div>
        </div>
      </Shower>
    </div>
  );
};
export default ClassViewCard;
