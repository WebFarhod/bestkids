import { Link } from "react-router-dom";
import { Container } from "../../components";
import "./AuthForm.scss";
import { RiUser3Line } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { LuLock } from "react-icons/lu";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { FC, useState } from "react";

interface IProps {
  type: string;
}
const AuthForm: FC<IProps> = ({ type }) => {
  const [check, setCheck] = useState(false);
  const [passportShow1, setPassportShow1] = useState(false);
  const [passportShow2, setPassportShow2] = useState(false);

  return (
    <section className="auth__area pt-110 pb-110">
      <Container>
        <div className="auth__inner position-relative z-index-1">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="auth__wrapper">
                <div className="auth__top mb-30 text-center">
                  {type == "login" ? (
                    <>
                      <h3 className="auth__title">Yana bir bor salom</h3>
                      <p>
                        Hisobingizga kirish uchun hisob ma'lumotlaringizni
                        kiriting.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="auth__title">Hozir roʻyxatdan oʻting!</h3>
                      <p>Bu yerda roʻyxatdan oʻtishingiz mumkin</p>
                    </>
                  )}
                </div>
                <div className="auth__form">
                  <form>
                    <div className="auth__input-wrapper">
                      {type !== "login" && (
                        <div className="auth__input-item">
                          <div className="auth__input">
                            <input
                              name="name"
                              type="text"
                              placeholder="Ismingizni kiriting"
                              id="name"
                              // required=""
                              value=""
                            />
                            <span>
                              <RiUser3Line />
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="auth__input-item">
                        <div className="auth__input">
                          <input
                            name="email"
                            type="email"
                            placeholder="Elektron pochtangizni kiriting"
                            id="email"
                            // required=""
                            value=""
                          />
                          <span>
                            <IoMailOutline />
                          </span>
                        </div>
                      </div>
                      <div className="auth__input-item">
                        <div className="auth__input-item-inner p-relative">
                          <div className="auth__input">
                            <input
                              name="password"
                              type={passportShow1 == true ? "text" : "password"}
                              placeholder="Parol"
                              id="password"
                              // required=""
                              // value=""
                            />
                            <span>
                              <LuLock />
                            </span>
                          </div>
                          <span
                            className="auth-input-eye"
                            onClick={() => {
                              setPassportShow1(!passportShow1);
                            }}
                          >
                            {passportShow1 == true ? (
                              <PiEyeSlash />
                            ) : (
                              <PiEyeLight />
                            )}
                          </span>
                        </div>
                      </div>
                      {type !== "login" && (
                        <div className="auth__input-item">
                          <div className="auth__input-item-inner p-relative">
                            <div className="auth__input">
                              <input
                                name="Parolni tasdiqlash"
                                type={
                                  passportShow2 == true ? "text" : "password"
                                }
                                placeholder="Confirm Password"
                                id="passwordConfirmation"
                                // required=""
                                // value=""
                              />
                              <span>
                                <LuLock />
                              </span>
                            </div>
                            <span
                              className="auth-input-eye"
                              onClick={() => {
                                setPassportShow2(!passportShow2);
                              }}
                            >
                              {passportShow2 == true ? (
                                <PiEyeSlash />
                              ) : (
                                <PiEyeLight />
                              )}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="auth__option mb-25 d-sm-flex justify-content-between">
                      <div
                        className="auth__remember"
                        onClick={() => {
                          setCheck(!check);
                        }}
                      >
                        <input type="checkbox" id="tp-remember" />
                        <div className="check-div">
                          {check == true && <div></div>}
                        </div>
                        <label htmlFor="tp-remember">
                          Ma`lumotlarni eslab qolish
                        </label>
                      </div>
                    </div>
                    <div className="auth__btn text-center">
                      {type == "login" ? (
                        <button type="submit" className="bd-btn border-none">
                          <span className="bd-btn-inner">
                            <span className="bd-btn-normal">
                              Tizimga kirish
                            </span>
                            <span className="bd-btn-hover">Tizimga kirish</span>
                          </span>
                        </button>
                      ) : (
                        <button type="submit" className="bd-btn border-none">
                          <span className="bd-btn-inner">
                            <span className="bd-btn-normal">
                              Roʻyxatdan oʻtish
                            </span>
                            <span className="bd-btn-hover">
                              Roʻyxatdan oʻtish
                            </span>
                          </span>
                        </button>
                      )}
                    </div>
                  </form>
                  <div className="auth-type">
                    {type == "login" ? (
                      <p>
                        Hisobingiz yoʻqmi?
                        <Link to="/register"> Hozir roʻyxatdan oʻting</Link>
                      </p>
                    ) : (
                      <p>
                        Hisobingiz bormi?{" "}
                        <Link to="/login">Tizimga kirish</Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AuthForm;
