/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */

import { Container, MaskImg, Modal_Best, PlayButton, Shower } from "..";
import { BestOfYourKidsImg } from "../../constant/bestForYourKids";
import "./bestOfYourKids.scss";
import { CountNumber } from "..";

import styled from "styled-components";
import { FC } from "react";
import { useModalStore } from "../../store/Modal";

const MyComponent = styled.div`
  &::before {
    content: "";
    background: none !important;z
  }
`;
const MyList = styled.li`
  &::before {
    // content: ">";
  }
`;

interface IProps {
  counterAv: boolean;
}
const bestOfYourKids: FC<IProps> = ({ counterAv }) => {
  const setModal = useModalStore((store) => store.setModal);
  const modal = useModalStore((store) => store.modal);
  return (
    <>
      <section className="bd-promotion-area pt-120 pb-60">
        <Container>
          <div className="row align-items-center">
            <MaskImg img={BestOfYourKidsImg} name={"bestof"} />
            <div className="col-xl-6 col-lg-6">
              <Shower name={"bestOfYourKids-2"} delay={0.2} aniX={50} aniY={0}>
                <div className="bd-promotion mb-60 wow fadeInRight">
                  <div className="bd-section-title-wrapper mb-30">
                    <h2 className="bd-section-title mb-10">
                      Farzandlaringiz uchun eng yaxshisi
                    </h2>
                    <p>
                      Jasur boʻlish har doim katta harakat emas, ba'zida bu
                      faqatgina oddiy savolga javob qilish va darsda yangi narsa
                      sinab koʻrish demakdir.
                    </p>
                  </div>
                  {counterAv == true && (
                    <div className="bd-promotion-counter-wrapper mb-40">
                      {counter.map((item, index) =>
                        index !== counter.length - 1 ? (
                          <div className="bd-promotion-counter" key={index}>
                            <div className="bd-promotion-counter-number ">
                              {/* <span id="counter" /> */}
                              <CountNumber num={item.count} tr={`${index}`} />
                              <span>
                                <span className="counter-text">
                                  {item.conutText}
                                </span>
                              </span>
                            </div>
                            <div className="bd-promotion-counter-text">
                              <span>{item.text1}</span>
                              <span>{item.text2}</span>
                            </div>
                          </div>
                        ) : (
                          <MyComponent
                            className="bd-promotion-counter"
                            key={index}
                          >
                            <div className="bd-promotion-counter-number ">
                              {/* <span id="counter" /> */}
                              <CountNumber num={item.count} tr={`${index}`} />
                              <span>
                                <span className="counter-text">
                                  {item.conutText}
                                </span>
                              </span>
                            </div>
                            <div className="bd-promotion-counter-text">
                              <span>{item.text1}</span>
                              <span>{item.text2}</span>
                            </div>
                          </MyComponent>
                        )
                      )}
                    </div>
                  )}

                  <div className="bd-promotion-list mb-50">
                    <ul>
                      {listtext.map((item, index) => (
                        <MyList key={index} style={{}}>
                          {item.text}
                        </MyList>
                      ))}
                    </ul>
                  </div>

                  <div className="bd-promotion-btn-wrapper flex-wrap">
                    <div className="bd-promotion-btn"></div>
                    <div className="bd-promotion-btn-2 bd-pulse-btn btn-2">
                      <button
                        onClick={() => {
                          setModal(true);
                        }}
                        type="button"
                        className="popup-video"
                      >
                        <PlayButton
                          color={"var(--bd-theme-2)"}
                          backgroundColor={"#fff4e7"}
                        />
                        {""} Hozir tommosha qiling
                      </button>
                    </div>
                  </div>
                </div>
              </Shower>
            </div>
          </div>
        </Container>
      </section>
      {modal && <Modal_Best setModal={(item) => setModal(item)} />}
    </>
  );
};

export default bestOfYourKids;

const counter = [
  {
    count: 14,
    conutText: "+",
    text1: "yillik",
    text2: "tajriba",
  },
  {
    count: 7,
    conutText: "K+",
    text1: "ortiq tahsil",
    text2: "oluvchi",
  },
  {
    count: 15,
    conutText: "+",
    text1: "ziyod",
    text2: "yutuqlar",
  },
];
const listtext = [
  {
    text: "Har bir bola aqlli ekanligiga ishonamiz, shuning uchun unga gʻamxoʻrlik qilamiz.",
  },
  { text: "Oʻqituvchilar bolangizni buyuk inson boʻlishini xohlashadi." },
];
