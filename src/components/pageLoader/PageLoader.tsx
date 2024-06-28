import { logoImg } from "../../constant";
import "./PageLoader.scss";

const PageLoader = () => {
  return (
    <div className="loader">
      <div className="preloader-thumb-wrap">
        <div className="preloader-thumb">
          <div className="preloader-border"></div>
          <img alt="loader img" src={logoImg} width="200" height="56" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
