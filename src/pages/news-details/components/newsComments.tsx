import { FC } from "react";
import { useComments } from "../../../service/query/comment/commentQuery";
import { fDateUz } from "../../../utils/format-time";

interface IProps {
  newsId: string;
}
const NewsComments: FC<IProps> = ({ newsId }) => {
  const dataQuery = useComments(newsId || "");
  const commants = dataQuery.data || [];

  return (
    <div className="bd-blog-comment">
      <h4 className="bd-blog-comment-title mb-30">Izohlar</h4>
      <ul>
        {commants?.map((comment) => (
          <li>
            <div className="bd-blog-comment-box">
              <div className="bd-blog-comment-info mb-20">
                <div className="bd-blog-comment-thumb-wrap">
                  {/* <div className="bd-blog-comment-thumb">
                    <img
                      alt="img not found"
                      src={commetImg}
                      width="138"
                      height="137"
                    />
                  </div> */}
                  <div className="bd-blog-comment-author">
                    <h5>{comment?.user}</h5>
                    {/* <span>2022 yil 27-oktabr, soat 14:09</span> */}
                    <span> {fDateUz(new Date(comment?.createdAt || 0))}</span>
                  </div>
                </div>
              </div>
              <div className="bd-blog-comment-text">
                <p>{comment?.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComments;
// Ta'lim sohasidagi tajribamga tayanib "bolaning rivojlanishida
//                   atrof muhit va u bilan birga boʻladigan insonlar muhim roʻl
//                   oʻynaydi" deb ayta olaman
