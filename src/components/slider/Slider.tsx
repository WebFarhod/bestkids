import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.scss";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { FC } from "react";
import NewItem from "../new/NewItem";
import { INew } from "../../types/newType";
import { ITeacher } from "../../types/teacherType";
import TeacherItem from "../ourBestTeacher/TeacherItem";
import ParentsItem from "../parentsSays/ParentsItem";
import { IOption } from "../../types/optionType";

interface SwiperButton {
  navigationPrevRef: string;
  navigationNextRef: string;
}

interface IProps {
  arr: (ITeacher | IOption | INew)[];
  pageName: string | undefined;
  numberitem: number;
  type: "news" | "teachers" | "parents";
  navigationItem: SwiperButton | boolean;
}

const Slider: FC<IProps> = ({
  arr,
  pageName,
  numberitem,
  type,
  navigationItem,
}) => {
  const navigation = (item: SwiperButton | boolean) => {
    if (
      typeof item === "object" &&
      "navigationPrevRef" in item &&
      "navigationNextRef" in item
    ) {
      return {
        prevEl: item.navigationPrevRef,
        nextEl: item.navigationNextRef,
      };
    } else {
      return false;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={24}
        navigation={navigation(navigationItem)}
        breakpoints={
          numberitem == 4
            ? {
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }
            : numberitem == 3
            ? {
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }
            : {
                0: {
                  slidesPerView: 1,
                },
              }
        }
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          waitForTransition: true,
          pauseOnMouseEnter: true,
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          el: `${pageName !== undefined && `.${pageName}`}`,
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {type == "teachers" &&
          arr?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <TeacherItem
                  _id={(item as ITeacher)?._id}
                  image={(item as ITeacher)?.image}
                  name={`${(item as ITeacher)?.name} ${
                    (item as ITeacher)?.surname
                  }`}
                  rank={(item as ITeacher).rank}
                  socials={(item as ITeacher).socials}
                />
              </SwiperSlide>
            );
          })}
        {type == "news" &&
          arr?.slice(0, 10).map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <NewItem
                  _id={(item as INew)._id}
                  image={(item as INew)?.image}
                  createdAt={(item as INew).createdAt}
                  author={(item as INew).author}
                  title={(item as INew).title}
                />
              </SwiperSlide>
            );
          })}
        {type == "parents" &&
          arr?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ParentsItem
                  rating={(item as IOption).rating}
                  body={(item as IOption).body}
                  image={(item as IOption).image}
                  user={(item as IOption).user}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      {pageName !== undefined && (
        <div className={`swiper-pagination ${pageName}`}></div>
      )}
    </>
  );
};

export default Slider;

// {arr?.map((item, index) => (
//   <SwiperSlide key={index}>{checkSlide(item)}</SwiperSlide>
// ))}
//  const checkSlide = (item: IParentSay | ITeacherProp | INews) => {
//     if (
//       "stars" in item &&
//       "description" in item &&
//       "img" in item &&
//       "name" in item
//     ) {
//       return (
//         <ParentsItem
//           stars={item.stars}
//           description={item.description}
//           img={item.img}
//           name={item.name}
//         />
//       );
//     } else if (
//       "type" in item &&
//       "_id" in item &&
//       "img" in item &&
//       "date" in item &&
//       "create" in item &&
//       "commetMunber" in item &&
//       "text" in item
//     ) {
//       return (
//         <NewItem
//           _id={item._id}
//           img={item.img}
//           date={item.date}
//           createBy={item.create}
//           commentCount={item.commetMunber}
//           title={item.text}
//         />
//       );
//     } else {
//       return (
//         <TeacherItem
//           _id={item._id}
//           img={item.img}
//           name={item.name}
//           job={item.job}
//           socialArr={item.socialArr}
//         />
//       );
//     }
//   };
