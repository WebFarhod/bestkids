import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Faq.scss";
import { useEffect, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { HiMiniMinusSmall } from "react-icons/hi2";
// import { useFaqStore } from "../../store/faq";

const AccordionFaq = () => {
  const [accordion, setAccordion] = useState(0);

  const show = (id: number) => {
    setAccordion(id);
  };
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, []);
  return (
    <Accordion
    //   allowZeroExpanded
    >
      {items.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            className="accordion__item accordion-head-active"
            dangerouslySetExpanded={
              index === accordion
              // [1]
            }
          >
            <AccordionItemHeading
              onClick={() => {
                show(index);
              }}
            >
              <AccordionItemButton
                className={`accordion__button ${
                  index === accordion && "accordion-head-active"
                }`}
                style={{ fontFamily: "Fredoka" }}
              >
                {item.title}
                {index === accordion ? (
                  <div className="faq-icon-btn div-minus">
                    <HiMiniMinusSmall className="icon-minus" />
                  </div>
                ) : (
                  <CiCirclePlus className="faq-icon-btn icon-minus" />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <div
              className={`aniscroll-height ${
                index === accordion ? "aniscroll-height-show" : ""
              }`}
              style={{
                height: `${index == accordion ? `${height}px` : "0"}`,
              }}
            >
              {index == accordion ? (
                <div className="acc-body-size" ref={ref}>
                  <AccordionItemPanel>
                    <p>{item.body}</p>
                  </AccordionItemPanel>
                </div>
              ) : (
                <div className="acc-body-size">
                  <AccordionItemPanel>
                    <p>{item.body}</p>
                  </AccordionItemPanel>
                </div>
              )}
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionFaq;
const items = [
  {
    title: "Farzandlarni necha yoshda bolalar bogʻchasiga bergan yaxshi?",
    body: "Bolaning tarbiyasiga qanchalik erta e'tibor berish, bu uning aqliy salohiyati va dunyoni boshqalarga qaraganda ertaroq anglashiga olib keladi. Bunday qoidalar asosida koʻplab maktabgacha ta'lim tashkil etiladi.",
  },
  {
    title: "Farzandlar uchun eng yaxshi ta'lim muassasasi qaysi?",
    body: "Bolaning individual rivojlanishida atrof muhit va u bilan muloqatda boʻladigan insonlar muhim roʻl oʻynaydi. Shu sababli muassani tashkil etishda va xodimlarni ishga olishda har bir tomoniga e'tibor qaratganmiz",
  },
  {
    title: "Toʻlovda qanday chegirmalar mavjud?",
    body: "Yangi tarbiyalanuvchilar uchun birinchi yil uchun 10% lik chegirmalar mavjud. Shu bilan bir qatorda 2 va undan ortiq farzandi bizning muassamizda tahsil olsa 15% gacha boʻlgan chegirmalar beramiz.",
  },
];
