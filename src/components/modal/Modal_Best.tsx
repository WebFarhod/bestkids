import { FC } from "react";
import ReactPlayer from "react-player";

interface IProps {
  setModal: (item: boolean) => void;
}

const Modal_Best: FC<IProps> = ({ setModal }) => {
  return (
    <div className="modal-video" role="dialog">
      <div
        className="modal-video-body"
        onClick={() => {
          setModal(false);
        }}
      >
        <div className="modal-video-inner">
          <div className="modal-video-movie-wrap">
            <button
              className="modal-video-close-btn"
              aria-label="Close the modal by clicking here"
            ></button>

            <ReactPlayer
              playing={true}
              url="https://youtu.be/NIk1-ck4c6Q?si=4Wh98HYKhwBPrLyQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_Best;
