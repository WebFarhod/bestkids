import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProgramItem } from "..";
import { usePrograms } from "../../service/query/program/programQuery";

const OurProgramsSlider = () => {
  const dataQuery = usePrograms();
  const programsData = dataQuery.data;

  return (
    <>
      <Swiper
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        //   centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          el: ".our-programs-slider",
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
          {programsData?.map((item, index) => (
            <SwiperSlide key={index}>
              <ProgramItem color={colors[index]} data={item } />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="swiper-pagination our-programs-slider"></div>
    </>
  );
};

export default OurProgramsSlider;

const colors = [
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
  "var(--bd-theme-1)",
  "var(--bd-theme-2)",
  "var(--bd-theme-3)",
  "var(--bd-theme-9)",
  "var(--bd-theme-11)",
  "var(--bd-theme-10)",
];
