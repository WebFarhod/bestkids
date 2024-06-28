import { FC, ReactNode, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IProps {
  children: ReactNode;
  name: string;
  delay: number;
  aniX: number;
  aniY: number;
}

const Shower: FC<IProps> = ({ children, name, delay, aniX, aniY }) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      `.${name}`,
      {
        opacity: 0,
        x: aniX,
        y: aniY,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        delay: delay,
        duration: 1,
        scrollTrigger: {
          trigger: `.${name}`,
          start: "top bottom", // animation starts when the top of the element hits the bottom of the viewport
          end: "top top", // animation ends when the top of the element hits the top of the viewport
          // scrub: true, // animation will follow the scroll
        },
      }
    );

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill(); // Clean up the animation and scrollTrigger
    };
  }, [name, delay, aniX, aniY]);

  return (
    <div className={name} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default Shower;
