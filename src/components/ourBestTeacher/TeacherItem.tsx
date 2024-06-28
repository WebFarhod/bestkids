import { Link } from "react-router-dom";
import "./TeacherItem.scss";
import { FC } from "react";

import { imagePath } from "../../utils/file-path";

import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ITeacher } from "../../types/teacherType";

const TeacherItem: FC<ITeacher> = ({ _id, image, name, rank, socials }) => {
  const selectIcon = (name: string, link: string) => {
    const selectedName = socialsArr.find((item) => item.name === name);
    return selectedName ? <Link to={link}>{selectedName.icon}</Link> : <></>;
  };

  const socialsArr = [
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
    },
    {
      name: "WhatsApp",
      icon: <IoLogoWhatsapp />,
    },
    {
      name: "Facebook",
      icon: <BsFacebook />,
    },
    { name: "Instagram", icon: <AiFillInstagram /> },
    { name: "YouTube", icon: <FaYoutube /> },
  ];
  return (
    <div className="bd-teacher teachers mb-40">
      <Link to={`/teachers-details/${_id || ""}`}>
        <div className="bd-teacher-thumb">
          <img
            alt="img not found"
            src={imagePath(image)}
            // width="636"
            // height="477"
          />
        </div>
      </Link>
      <div className="bd-teacher-content-wrapper">
        <div className="bd-teacher-content">
          <h4 className="bd-teacher-title">
            <Link to={`/teachers-details/${_id}`}>{name}</Link>
          </h4>
          <span className="bd-teacher-des">{rank}</span>
        </div>
        <div className="bd-teacher-social">
          <ul>
            {socials?.map((item) => (
              <li key={item.link}>{selectIcon(item.name, item.link)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeacherItem;
