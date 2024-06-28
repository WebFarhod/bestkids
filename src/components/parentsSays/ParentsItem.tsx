import "./ParentsItem.scss";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BsChatLeftQuote } from "react-icons/bs";
import { FC } from "react";
import { IOption } from "../../types/optionType";
import { imagePath } from "../../utils/file-path";

const ParentsItem: FC<IOption> = ({ rating, body, image, user }) => {
  const starElement = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starElement.push(<FaStar key={i} />);
    } else {
      starElement.push(<FaRegStar key={i} />);
    }
  }
  return (
    <div className="bd-testimonial">
      <div className="bd-testimonial-rating mb-30">
        <div className="star">{starElement}</div>
      </div>
      <div className="bd-testimonial-content mb-55">
        <p>{body}</p>
      </div>
      <div className="bd-testimonial-avatar d-flex align-items-center">
        <div className="bd-testimonial-avatar-thumb">
          <img
            alt="img not found"
            // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.349c3cf3.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.349c3cf3.png&amp;w=256&amp;q=75 2x"
            src={imagePath(image || "")}
            // style="color: transparent; width: 100%; height: 100%;"
          />
        </div>
        <h6 className="bd-testimonial-avatar-title mb-0">{user}</h6>
        <div className="bd-testimonial-quote">
          <BsChatLeftQuote />
        </div>
      </div>
    </div>
  );
};

export default ParentsItem;
