import { FC } from "react";
import "./PlayButton.scss";
import { PiPlayCircleLight } from "react-icons/pi";

interface IProps {
  color: string;
  backgroundColor: string;
}

const PlayButton: FC<IProps> = ({ color, backgroundColor }) => {
  return (
    <i style={{ color: color, backgroundColor: backgroundColor }}>
      <PiPlayCircleLight />
    </i>
  );
};

export default PlayButton;
