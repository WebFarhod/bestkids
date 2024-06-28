import { FC } from "react";
import "./Title.scss";
interface IProps {
  title: string;
  text1: string;
  text2?: string;
  color: string | null;
  colSize: string;
}

const Title: FC<IProps> = (props) => {
  return (
    <div className="row justify-content-center">
      <div className={props.colSize}>
        <div className="bd-section-title-wrapper text-center mb-55">
          <h2
            style={{ color: `${props.color}` }}
            className="bd-section-title mb-0"
          >
            {props.title}
          </h2>
          <p style={{ color: `${props.color}` }}>
            {props.text1}
            <br /> {props.text2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
