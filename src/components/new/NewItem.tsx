import { Link } from "react-router-dom";
import "./NewItem.scss";
import { FC } from "react";
import { FaUser } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { INew } from "../../types/newType";
import { imagePath } from "../../utils/file-path";
import { fDateUzMonth } from "../../utils/format-time";
import { useComments } from "../../service/query/comment/commentQuery";

const NewItem: FC<INew> = ({
  _id,
  image,
  createdAt,
  author,
  title,
  // comment,
}) => {
  const commentQuery = useComments(_id || "");
  const comment = commentQuery.data || [];
  return (
    <div className="bd-blog mb-40">
      <Link to={`/news-details/${_id}`}>
        <div className="bd-blog-thumb">
          <img
            alt="img not found"
            src={imagePath(image)}
            width="856"
            height="558"
          />
        </div>
      </Link>
      <div className="bd-blog-content ">
        <div className="bd-blog-date">
          <span>
            {createdAt ? fDateUzMonth(new Date(createdAt)) : "Invalid Date"}
          </span>
        </div>
        <div className="bd-blog-meta">
          <span>
            <FaUser className="comment-icon" />

            <Link to={`/news-details/${_id}`}>{author}</Link>
          </span>
          <span>
            <FaCommentDots className="comment-icon" />
            <Link to={`/news-details/${_id}`}>
              {(comment && comment?.length) || 0} Izoh
            </Link>
          </span>
        </div>
        <h4 className="bd-blog-title">
          <Link to={`/news-details/${_id}`}>
            {
              <div
                className="search-p"
                dangerouslySetInnerHTML={{ __html: title || "" }}
              ></div>
            }
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default NewItem;
