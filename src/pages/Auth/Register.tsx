import { useEffect } from "react";
import { PageHero } from "../../components";
import AuthForm from "./AuthForm";

const Register = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <PageHero pageName="Register" />
      <AuthForm type={"register"} />
    </>
  );
};

export default Register;
