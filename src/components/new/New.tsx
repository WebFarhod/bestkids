import { Container, Shower, Slider } from "..";
// import { parentImg } from "../../constant/parentsSays";
import "./New.scss";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import { NewData } from "../../data/newsData";
import { FC } from "react";
import { useNews } from "../../service/query/new/newQuery";
// import { INew } from "../../types/newType";

interface IProps {
  positionText: boolean;
}
const New: FC<IProps> = ({ positionText }) => {
  const dataQuery = useNews();
  const NewData = dataQuery.data;
  return (
    <section className="bd-blog-area pt-120 pb-120">
      <Container>
        <div className="bd-blog-section-title mb-40">
          <div
            className={`row ${
              positionText ? "justify-content-center" : "align-items-end "
            }  `}
          >
            <div className={`${positionText ? "col-lg-8" : "col-lg-6"}`}>
              <Shower name={"kindBest-1"} delay={0.3} aniX={-50} aniY={0}>
                <div
                  className={`bd-section-title-wrapper mb-0 ${
                    positionText && "text-center"
                  }`}
                >
                  <h2 className="bd-section-title mb-0">
                    Bestkids yangiliklari
                  </h2>
                  <p>
                    Bizning maqsadimiz Bestkids boʻyicha mashoʻulotlarga
                    kiritilgan har bir bolaga yoshiga mos imkoniyat yaratishdir.
                  </p>
                </div>
              </Shower>
            </div>
            <div className="col-lg-6">
              <Shower name={"kindBest-2"} delay={0.3} aniX={50} aniY={0}>
                {!positionText && (
                  <div className="news-navigation mb-15 wow fadeInRight">
                    <button className="new-bd-blog-prev">
                      <FaChevronLeft />
                    </button>
                    <button className="new-bd-blog-next">
                      <FaChevronRight />
                    </button>
                  </div>
                )}
              </Shower>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Shower name={"kindBest-3"} delay={0.3} aniX={0} aniY={50}>
              <Slider
                arr={NewData || []}
                type="news"
                pageName={undefined}
                numberitem={3}
                navigationItem={
                  positionText
                    ? false
                    : {
                        navigationPrevRef: ".new-bd-blog-prev",
                        navigationNextRef: ".new-bd-blog-next",
                      }
                }
              />
            </Shower>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default New;
