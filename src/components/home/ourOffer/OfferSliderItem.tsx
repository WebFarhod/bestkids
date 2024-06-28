import { FC } from "react";
import "./OfferSliderItem.scss";
import { Link } from "react-router-dom";
import { offerItemBgImg } from "../../../constant/home";

interface IProps {
  icon: JSX.Element;
  name: string;
  description: string;
  link: string;
}

const OfferSliderItem: FC<IProps> = ({ icon, name, description, link }) => {
  return (
    <div className="bd-class-wrapper text-center">
      <div className="bd-class-bg">
        <img
          alt="img not found"
          // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-shape.41fcdcb2.jpg&amp;w=828&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-shape.41fcdcb2.jpg&amp;w=1920&amp;q=75 2x"
          src={offerItemBgImg}
          width="777"
          height="695"
          decoding="async"
          data-nimg="1"
          loading="lazy"
          // style="color: transparent; width: 100%; height: 100%;"
        />
      </div>
      <div className="bd-class">
        <div className="bd-class-icon">
          <div className="icon">{icon}</div>
        </div>
        <div className="bd-class-content">
          <Link to={link}>
            <h3 className="bd-class-title">{name} </h3>
          </Link>
          <p>{description}</p>
          <div className="bd-class-btn">
            <Link to={link} className="bd-btn">
              <span className="bd-btn-inner">
                <span className="bd-btn-normal">Tafsilotlarni koʻrish</span>
                <span className="bd-btn-hover">Tafsilotlarni koʻrish</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSliderItem;
