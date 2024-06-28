import { ReactNode } from "react";
import SvgColor from "../../components/admin/svg-color";

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);
interface Item {
  title: string;
  path: string;
  icon: ReactNode;
}
export interface INavConfig {
  item: Item;
}

const navConfig = [
  {
    title: "dashboard",
    path: "/admin",
    icon: icon("ic_analytics"),
  },
  {
    title: "xodimlar",
    path: "/admin/teachers",
    icon: icon("ic_user"),
  },
  {
    title: "dasturlar",
    path: "/admin/programs",
    icon: icon("ic_cart"),
  },
  {
    title: "sinflar",
    path: "/admin/classes",
    icon: icon("ic_blog"),
  },
  {
    title: "yangiliklar",
    path: "/admin/news",
    icon: icon("ic_news"),
  },
  {
    title: "Fikrlari",
    path: "/admin/opinions",
    icon: icon("ic_option"),
  },
  // {
  //   title: "Not found",
  //   path: "/admin/404",
  //   icon: icon("ic_disabled"),
  // },
];

export default navConfig;
