import { Container, Shower } from "../../../components";
import "./NewsDetailsinfo.scss";
import "./newsDetail.scss";

// import { NewData } from "../../../data/newsData";
import {
  Link,
  // useNavigate,
  // useParams
} from "react-router-dom";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCalendarAlt,
  FaCommentDots,
  FaFacebookF,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
// import { BsChatLeftQuote } from "react-icons/bs";

// import vedioBgImg from "./video-bg.jpg";
// import { PiPlayCircleThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import NewsItemRight from "./Right";
// import { useEffect } from "react";

// import commetImg from "./comment-1.png";
import { INewData } from "../../../types/newType";
import { FC } from "react";
import { imagePath } from "../../../utils/file-path";
import { fDate } from "../../../utils/format-time";
import NewsComments from "./newsComments";
import NewCommentInput from "./newComment";
interface IProps {
  newData: INewData;
}
const NewsDetailsinfo: FC<IProps> = ({ newData }) => {
  const { data } = newData;
  // const navigate = useNavigate();
  // const { id } = useParams();
  // const data = NewData[Number(id) - 1];

  // const othersNews = (item: string) => {
  //   item === "next"
  //     ? NewData.length < Number(id) + 1
  //       ? navigate(`/news-details/${1}`)
  //       : navigate(`/news-details/${Number(id) + 1}`)
  //     : 1 > Number(id) - 1
  //     ? navigate(`/news-details/${NewData.length}`)
  //     : navigate(`/news-details/${Number(id) - 1}`);
  // };
  return (
    <section className="news-details pt-120 pb-60">
      <Container>
        <div className="row">
          <div className="col-lg-8">
            <div className="bd-blog-details-wrapper mb-60">
              <div className="row">
                <div className="col-12">
                  <div className="bd-blog-details mb-50">
                    <div className="bd-blog-details-thumb">
                      <img
                        alt="img not found"
                        src={imagePath(data?.image)}
                        width="856"
                        height="558"
                      />
                    </div>
                    <Shower
                      name={"news-details-2"}
                      delay={0.3}
                      aniX={0}
                      aniY={50}
                    >
                      <div className="bd-blog-details-meta">
                        <span>
                          <FaUser />
                          {data?.author}
                          {/* <Link to="/news">{data?.author}</Link> */}
                        </span>
                        <span>
                          <FaCalendarAlt />{" "}
                          {data?.createdAt ? fDate(data?.createdAt) : ""}
                        </span>
                        <span>
                          <FaCommentDots />
                          Izoh
                        </span>
                      </div>
                    </Shower>
                    <Shower
                      name={"news-details-3"}
                      delay={0.3}
                      aniX={0}
                      aniY={50}
                    >
                      <div className="bd-blog-details-content">
                        <h3 className="bd-blog-details-title mt-5 mb-15">
                          {data?.title}
                        </h3>
                      </div>
                    </Shower>
                    <Shower
                      name={"news-details-4"}
                      delay={0.3}
                      aniX={0}
                      aniY={50}
                    >
                      <div
                        className="new-body"
                        dangerouslySetInnerHTML={{ __html: data?.body || "" }}
                      ></div>
                    </Shower>

                    <Shower
                      name={"news-details-7"}
                      delay={0.3}
                      aniX={0}
                      aniY={50}
                    >
                      <div className="bd-blog-share d-flex justify-content-between align-items-center flex-wrap ">
                        <div className="bd-blog-social">
                          <ul>
                            <li>
                              <Link
                                target="_blank"
                                to="https://www.facebook.com/"
                                rel="noreferrer"
                              >
                                <FaFacebookF />
                              </Link>
                            </li>
                            <li>
                              <Link
                                target="_blank"
                                to="https://twitter.com/"
                                rel="noreferrer"
                              >
                                <FaXTwitter />
                              </Link>
                            </li>
                            <li>
                              <Link
                                target="_blank"
                                to="https://www.youtube.com/"
                                rel="noreferrer"
                              >
                                <FaYoutube />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Shower>
                    <Shower
                      name={"news-details-8"}
                      delay={0.3}
                      aniX={0}
                      aniY={50}
                    >
                      <div className="bd-blog-details-nav">
                        <div className="bd-blog-details-nav-prev">
                          <button
                            onClick={() => {
                              // othersNews("previous");
                            }}
                          >
                            <FaAngleLeft />
                          </button>
                        </div>
                        <span className="d-none d-md-block">
                          <Link to="/news">
                            <CgMenuGridO />
                          </Link>
                        </span>
                        <div className="bd-blog-details-nav-next">
                          <button
                            onClick={() => {
                              // othersNews("next");
                            }}
                          >
                            <FaAngleRight />
                          </button>
                        </div>
                      </div>
                    </Shower>
                  </div>
                  <div className="bd-blog-comment-wrap theme-bg-6 ">
                    <NewsComments newsId={data?._id || ""} />
                    <NewCommentInput newsId={data?._id || ""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <NewsItemRight />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsDetailsinfo;
