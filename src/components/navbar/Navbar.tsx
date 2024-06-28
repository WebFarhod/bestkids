import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaClock, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { useNavStore } from "../../store/NavbarStore";

// data
import { KidsData } from "../../data/kidsData";
import { logoImg } from "../../constant";

const Navbar = () => {
  const [navType, setNavType] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavType(true);
    } else {
      setNavType(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  const NavType = useNavStore((store) => store.setState);

  return (
    <header>
      <div className={`bd-header`}>
        <div className="bd-header-top d-none d-lg-block position-relative">
          {/* <div className="bd-header-top-bg"></div> */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-header-top-wrapper d-flex justify-content-between">
                  <div className="bd-header-top-right d-flex align-items-center">
                    <div className="bd-header-meta-items d-flex align-items-center">
                      <div className="bd-header-meta-item d-flex align-items-center">
                        <div className="bd-header-meta-icon">
                          <FaEnvelope />
                        </div>
                        <div className="bd-header-meta-text">
                          <p>
                            <Link to={KidsData[2].link}>
                              {KidsData[2].name}
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="bd-header-meta-item d-flex align-items-center">
                        <div className="bd-header-meta-icon">
                          <FaClock />
                        </div>
                        <div className="bd-header-meta-text">
                          <p>8.00-16.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-header-top-left">
                    <div className="bd-header-meta-items">
                      <div className="bd-header-meta-item d-flex align-items-center">
                        <div className="bd-header-meta-icon">
                          <FaLocationDot />
                        </div>
                        <div className="bd-header-meta-text">
                          <p>
                            <Link
                              to={KidsData[0].link}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {KidsData[0].name}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`bd-header-bottom ${navType ? "header-sticky" : ""}`}
        >
          <div className="container">
            <div className="mega-menu-wrapper position-relative">
              <div className="d-flex align-items-center justify-content-between">
                <div className="bd-header-logo sdf">
                  <Link to={"/"}>
                    <img alt="img not found" src={logoImg} height="51" />
                  </Link>
                </div>
                <div className="bd-main-menu d-none d-lg-flex align-items-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="   ">
                        <Link to="/about">Biz haqimizda</Link>
                      </li>
                      <li className="  has-dropdown has-mega-menu ">
                        <Link to="/classes">Sinflar</Link>
                      </li>
                      <li className="   has-dropdown">
                        <Link to="/teachers">Oʻqituvchilar</Link>
                      </li>

                      <li className="   ">
                        <Link to={"/contact"}>Aloqa</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="bd-search-btn-wrapper">
                    <button className="bd-search-open-btn">
                      <RiSearch2Line />
                    </button>
                  </div>
                </div>
                <div className="bd-header-bottom-right d-flex justify-content-end align-items-center">
                  <div className="bd-header-meta-item d-none bd-header-menu-meta d-lg-flex align-items-center">
                    <div className="bd-header-meta-icon">
                      <FiPhone />
                    </div>
                    <div className="bd-header-meta-text">
                      <p>
                        <Link to={KidsData[1].link}>{KidsData[1].name}</Link>
                      </p>
                    </div>
                  </div>

                  <div className="header-hamburger">
                    <button
                      type="button"
                      className="hamburger-btn offcanvas-open-btn"
                      onClick={() => {
                        NavType(true);
                      }}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



