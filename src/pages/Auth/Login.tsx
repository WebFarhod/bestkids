import { useEffect } from "react";
import { PageHero } from "../../components";
import AuthForm from "./AuthForm";

const Login = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <PageHero pageName="Tizimga kirish" />
      <AuthForm type={"login"} />
    </>
  );
};

export default Login;
