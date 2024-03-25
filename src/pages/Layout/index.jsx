import "./style.scss";
import { LeftSidebar } from "./../LeftSidebar";
import { Main } from "./../Main";
import logo from "./../../images/logos/logo.png";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <div className="whole">
      <div className="whole__components">
        <LeftSidebar />
        <Main />
      </div>
      <img
        className="whole__logoCTU"
        src={logo}
        alt="logo české tábornické unie"
      />
      <Footer />
    </div>
  );
};
