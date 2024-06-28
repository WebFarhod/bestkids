import { PiPlayCircleLight } from "react-icons/pi";
import { Container, Modal_Best, Shower, Slider } from "..";
import { offerItemBgImg } from "../../constant/home";
import { parentImg } from "../../constant/parentsSays";
import "./ParentSays.scss";
import { useModalStore } from "../../store/Modal";
// import { ParentData } from "../../data/parentSays";
import { useOptions } from "../../service/query/option/optionQuery";
const ParentSays = () => {
  const setModal = useModalStore((store) => store.setModal);
  const modal = useModalStore((store) => store.modal);

  const dataQuery = useOptions();
  const ParentData = dataQuery.data || [];
  return (
    <>
      <section className="bd-testimonial-area theme-bg">
        <div
          className="bd-testimonial-video"
          style={{ backgroundImage: `url(${parentImg})` }}
        >
          <div className="bd-testimonial-video-btn bd-pulse-btn">
            <button
              onClick={() => {
                setModal(true);
              }}
              type="button"
              className="popup-video"
            >
              <PiPlayCircleLight />
            </button>
          </div>
        </div>
        <div
          className="bd-testimonial-bg d-none d-lg-block"
          style={{ backgroundImage: `url(${offerItemBgImg})` }}
        ></div>
        <Container>
          <div className="row justify-content-end align-items-center">
            <div className="col-lg-6">
              <div className="bd-testimonial-wrapper pt-120 pb-120">
                <div className="bd-section-title-wrapper is-white mb-20 ">
                  <Shower name={"parentSays-1"} delay={0.3} aniX={0} aniY={50}>
                    <h2 className="bd-section-title mb-0">
                      Ota-onalar fikrlari
                    </h2>
                  </Shower>
                </div>
                <Shower name={"parentSays-2"} delay={0.5} aniX={0} aniY={50}>
                  <Slider
                    arr={ParentData}
                    pageName={"parents-says"}
                    numberitem={1}
                    type="parents"
                    navigationItem={false}
                  />
                </Shower>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {modal && <Modal_Best setModal={(item) => setModal(item)} />}
    </>
  );
};

export default ParentSays;
