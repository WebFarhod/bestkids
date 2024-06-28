import "./ShapeMove.scss";

interface ContainerProps {
  shape: string;
}
const ShapeMove = ({ shape }: ContainerProps) => {
  return (
    <img
      alt="img not found"
      // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-curved-line.fbaae01c.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-curved-line.fbaae01c.png&amp;w=128&amp;q=75 2x"
      src={shape}
      width="54"
      height="36"
      decoding="async"
      data-nimg="1"
      loading="lazy"
    />
  );
};

export default ShapeMove;
