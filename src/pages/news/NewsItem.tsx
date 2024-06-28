import { Container } from "../../components";
import NewItem from "../../components/new/NewItem";
import "./NewsItem.scss";

// import { NewData } from "../../data/newsData";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useNewsTypeStore } from "../../store/newsType";
import { useNews } from "../../service/query/new/newQuery";
import { INew } from "../../types/newType";
import { useNewsType } from "../../service/query/new/newTypeQuery";

const NewsItem = () => {
  const dataQuery = useNews();
  const NewData = dataQuery.data;

  const newTypedataQuery = useNewsType();
  const buttonArray = newTypedataQuery.data || [];

  const NewsType = useNewsTypeStore((store) => store.type);
  const [search, setSearch] = useState("");
  const [newsType, setNewSType] = useState("barchasi");

  let typeData;
  if (newsType === "barchasi") {
    typeData = NewData;
  } else {
    typeData = NewData?.filter((type) => type.type === newsType);
  }

  let nData;
  if (search === "") {
    nData = typeData;
  } else {
    const nndata: INew[] = [];
    typeData?.filter((item) => {
      const data = item.title.toLowerCase().includes(search);
      if (data) {
        const highlightedText = item.title.replace(
          new RegExp(search, "gi"),
          `<mark class="red">${search}</mark>`
        );
        nndata.push({ ...item, title: highlightedText });
      }
    });
    nData = nndata;
  }

  useEffect(() => {
    setNewSType(NewsType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="bd-blog-area pt-120 pb-120">
      <Container>
        <div className="bd-blog-menu-wrapper">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-5 col-lg-4">
              <div className="bd-blog-search mb-60 ">
                <form>
                  <label htmlFor="bd-blog-search-input-label">
                    Kalit soʻz boʻyicha qidiruv
                  </label>
                  <div className="bd-blog-search-input">
                    <input
                      type="text"
                      placeholder="bu yerga yozing..."
                      id="bd-blog-search-input-label"
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                    />
                    <div className="bd-blog-search-submit">
                      <button type="button">
                        <CiSearch />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="bd-blog-cat-menu-wrapper mb-60">
                <div className="bd-blog-cat-menu-wrapper-box">
                  <h5 className="bd-blog-cat-title">Kategoriya boʻyicha</h5>
                  <div className="bd-blog-cat-menu bd-filter-btn">
                    <nav>
                      <div className="nav" id="nav-tab" role="tablist">
                        <button
                          className={`nav-link ${
                            newsType === "barchasi" && "active"
                          } `}
                          onClick={() => {
                            setNewSType("barchasi");
                          }}
                        >
                          barchasi
                        </button>
                        {buttonArray?.map(
                          (item: { _id: string; title: string }) => (
                            <button
                              key={item?._id}
                              className={`nav-link ${
                                newsType === item?.title && "active"
                              } `}
                              onClick={() => {
                                setNewSType(item?.title);
                              }}
                            >
                              {item?.title}
                            </button>
                          )
                        )}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="row">
            {nData
              ?.sort((a, b) => {
                const createdAtA = a.createdAt
                  ? new Date(a.createdAt).getTime()
                  : 0;
                const createdAtB = b.createdAt
                  ? new Date(b.createdAt).getTime()
                  : 0;
                return createdAtB - createdAtA;
              })
              .map((item, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-6 col-md-6 grid-item c-1 c-3 c-4"
                >
                  <NewItem
                    _id={item?._id}
                    image={item.image}
                    createdAt={item.createdAt}
                    author={item?.author}
                    title={item.title}
                  />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsItem;

// const buttonArray = ["barchasi", "yoshlar", "sport", "san'at"];
