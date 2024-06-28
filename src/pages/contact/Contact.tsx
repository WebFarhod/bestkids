import { useEffect } from "react";
import { PageHero } from "../../components";
import ContactForm from "./contact-info/ContactForm";
import Contactinfo from "./contact-info/Contactinfo";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <PageHero pageName="Biz bilan bogʻlanish" />
      <Contactinfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
