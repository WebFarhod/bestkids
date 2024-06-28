import "./RightNavbar.scss";
import { logoImg } from "../../constant";
import { TfiClose } from "react-icons/tfi";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavStore } from "../../store/NavbarStore";

// data
import { KidsData, KidscosialData } from "../../data/kidsData";
import { contactIconArray, cosialIconArray } from "../../data/Icondata";

const RightNavbar = () => {
  const NavType = useNavStore((store) => store.setState);
  const NavItem = useNavStore((store) => store.state);

  return (
    <>
      <div className={`offcanvas__area ${NavItem ? "offcanvas-opened" : ""} `}>
        <div className="offcanvas__bg"></div>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link to={"/"}>
                  <img
                    alt="img not found"
                    src={logoImg}
                    height="51"
                    onClick={() => {
                      NavType(false);
                    }}
                  />
                </Link>
              </div>
              <div className="offcanvas__close">
                <button
                  className="offcanvas__close-btn"
                  type="button"
                  onClick={() => NavType(false)}
                >
                  <TfiClose />
                </button>
              </div>
            </div>
            <div className="offcanvas__search mb-40">
              <form>
                <button type="button">
                  <RiSearch2Line />
                </button>
                <input type="text" placeholder="qidirish ..." />
              </form>
            </div>
            <div className="mobile-menu fix mb-40 menu-counter d-lg-none">
              <div className="mean-bar">
                <nav className="mean-nav">
                  <ul>
                    <li
                      className="   "
                      onClick={() => {
                        NavType(false);
                      }}
                    >
                      <Link to="/about">Biz haqimizda</Link>
                    </li>
                    <li
                      className=""
                      onClick={() => {
                        NavType(false);
                      }}
                    >
                      <Link to="/classes">Sinflar</Link>
                    </li>
                    <li
                      className=""
                      onClick={() => {
                        NavType(false);
                      }}
                    >
                      <Link to="/teachers">Oʻqituvchilar</Link>
                    </li>
                    <li
                      className=""
                      onClick={() => {
                        NavType(false);
                      }}
                    >
                      <Link to="/contact">Aloqa</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="offcanvas__about d-none d-lg-block mb-30">
              <h4>Bestkids haqida</h4>
              <p>
                Koʻp yillik tabribaga ega xodimlar jamoamiz sizning 2 yoshdan 7
                yoshgacha boʻlgan farzandlarizga bilim va tarbiya ulashamiz.
              </p>
            </div>
            <div className="offcanvas__contact mb-30">
              <h4>Aloqa ma'lumotlari</h4>
              <ul>
                {KidsData.map((item, index) => (
                  <li key={index} className="d-flex align-items-center gap-2">
                    <div className="offcanvas__contact-icon">
                      <Link
                        to={item.link}
                        rel={index == 0 ? "noreferrer" : undefined}
                        target={index == 0 ? "_blank" : undefined}
                      >
                        {contactIconArray[index]}
                      </Link>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link
                        to={item.link}
                        rel={index == 0 ? "noreferrer" : undefined}
                        target={index == 0 ? "_blank" : undefined}
                      >
                        {item.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="offcanvas__social">
              <ul>
                {KidscosialData.map((item, index) => (
                  <li key={index}>
                    <Link
                      onClick={() => {
                        NavType(false);
                      }}
                      to={item.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {cosialIconArray[index]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${NavItem ? "opened" : ""} `}></div>
    </>
  );
};

export default RightNavbar;
