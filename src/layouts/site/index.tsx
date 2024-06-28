import { ReactNode } from "react";
import { Footer, Navbar, NewsLetter, RightNavbar } from "../../components";

interface IProps {
  children: ReactNode;
}
export default function SiteLayout({ children }: IProps) {
  return (
    <div className="App">
      <Navbar />
      <RightNavbar />
      {children}
      <NewsLetter />
      <Footer />
    </div>
  );
}
