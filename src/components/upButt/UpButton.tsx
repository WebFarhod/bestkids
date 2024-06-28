import { Link } from "react-router-dom";
import "./UpButton.scss";

const UpButton = () => {
  return (
    <div className="cc">
      <Link className="bd-btn bd-btn-grey" to={"#"}>
        <span className="bd-btn-inner">
          <span className="bd-btn-normal">View Details</span>
          <span className="bd-btn-hover">View Details</span>
        </span>
      </Link>
    </div>
  );
};

export default UpButton;
