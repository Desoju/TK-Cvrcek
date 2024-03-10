import "./style.scss";
import { LeftSidebar } from "./../LeftSidebar";
import { Main } from "./../Main";
import logo from "./../../images/logos/logo.png";

export const Layout = () => {
  return (
    <div className="whole">
      <LeftSidebar className="left" />
      <Main className="right" />
      <img className="logoCTU" src={logo} alt="logo české tábornické unie" />
    </div>
  );
};
