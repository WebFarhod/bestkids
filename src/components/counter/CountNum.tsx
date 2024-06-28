import { FC } from "react";
import { useCountUp } from "react-countup";

interface IProps {
  num: number;
  tr: string;
}

const CountNum: FC<IProps> = ({ num, tr }) => {
  useCountUp({
    ref: "counter" + tr,
    end: num,
    enableScrollSpy: true,
    // scrollSpyDelay: 0,
    // plugin: Odometer,
  });
  return <span id={`counter${tr}`} />;
};

export default CountNum;
