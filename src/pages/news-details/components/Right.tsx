// import { RiSearch2Line } from "react-icons/ri";
import { Shower } from "../../../components";
import "./Right.scss";
import { FaCalendarAlt } from "react-icons/fa";

// import { NewData } from "../../../data/newsData";
import { Link } from "react-router-dom";
import { useNewsTypeStore } from "../../../store/newsType";
import { useNews } from "../../../service/query/new/newQuery";
import { imagePath } from "../../../utils/file-path";
import { fDateUzMonth } from "../../../utils/format-time";
import { useNewsType } from "../../../service/query/new/newTypeQuery";
// const items = NewData.from({ length: 3 });

const Right = () => {
  const allDataQuery = useNews();
  const NewData = allDataQuery.data;

  const dataTypeQuery = useNewsType();
  const newType = dataTypeQuery.data || [];
  const NewsType = useNewsTypeStore((store) => store.setType);
  return (
    <div className="bd-blog-sidebar-wrapper mb-60">
      {/* <Shower name={"news-details-right-1"} delay={0.3} aniX={50} aniY={0}>
        <div className="bd-blog-sidebar mb-50 ">
          <h5 className="bd-blog-sidebar-title">Qirishsh</h5>
          <div className="bd-blog-sidebar-content">
            <div className="bd-blog-search">
              <form>
                <div className="bd-blog-search-input-2">
                  <input
                    type="text"
                    placeholder="Bu yerga yozing..."
                    id="bd-blog-search-input-label"
                  />
                  <div className="bd-blog-search-submit">
                    <button type="button">
                      <RiSearch2Line />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Shower> */}
      <Shower name={"news-details-right-2"} delay={0.3} aniX={50} aniY={0}>
        <div className="bd-blog-sidebar mb-50 ">
          <h5 className="bd-blog-sidebar-title">Eng soʻnggi yangiliklar</h5>
          <div className="bd-blog-latest">
            <ul>
              {NewData?.sort((a, b) => {
                const createdAtA = a.createdAt
                  ? new Date(a.createdAt).getTime()
                  : 0;
                const createdAtB = b.createdAt
                  ? new Date(b.createdAt).getTime()
                  : 0;
                return createdAtB - createdAtA;
              })?.map(
                (item, index) =>
                  index < 3 && (
                    <li key={index}>
                      <div className="bd-blog-latest-content">
                        <div className="bd-blog-latest-thumb">
                          <img
                            alt="img not found"
                            src={imagePath(item?.image)}
                            width="856"
                            height="558"
                          />
                        </div>
                        <div className="bd-blog-latest-title">
                          <h6>
                            <Link to={`/news-details/${item._id}`}>
                              {item?.title}
                            </Link>
                            {/* <a href="/news-details/1">{item?.title}</a> */}
                          </h6>
                          <div className="bd-blog-latest-meta">
                            <FaCalendarAlt />

                            <span>
                              {item?.createdAt
                                ? fDateUzMonth(item?.createdAt)
                                : "Invalid Date"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </Shower>
      <Shower name={"news-details-right-3"} delay={0.3} aniX={50} aniY={0}>
        <div className="bd-blog-sidebar mb-50 ">
          <h5 className="bd-blog-sidebar-title">Kategoriyalar</h5>
          <div className="bd-blog-sidebar-cat">
            <ul>
              {newType?.map((item: { _id: string; title: string }) => (
                <li
                  key={item._id}
                  onClick={() => {
                    NewsType(item.title);
                  }}
                >
                  <Link to={"/news"}>
                    <span>{item.title}</span>
                    <span>
                      {
                        NewData?.filter((type) => type.type === item.title)
                          .length
                      }
                    </span>
                  </Link>
                </li>
              ))}

              {/* <li
                onClick={() => {
                  NewsType("sport");
                }}
              >
                <Link to={"/news"}>
                  <span>Sport</span>
                  <span>
                    {"0"}
                    {NewData?.filter((type) => type.type === "sport").length}
                  </span>
                </Link>
              </li>
              <li
                onClick={() => {
                  NewsType("sanat");
                }}
              >
                <Link to={"/news"}>
                  <span>San`at</span>
                  <span>
                    {"0"}
                    {NewData?.filter((type) => type.type === "san'at").length}
                  </span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </Shower>
    </div>
  );
};

export default Right;
