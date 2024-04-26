import { HamburgerMenu } from "../hamburgerMenu";
import "./style.scss";
import Logo_Cvrcek_Barev from "./../../images/logos/Logo_Cvrcek_Barev.png";
import { Link } from "react-router-dom";
import { Links } from "./../Links";
import { Kontakt } from "./../Kontakt";

export const LeftSidebar = () => {
  return (
    <div className="left_sidebar">
      <Link to="/">
        <img
          src={Logo_Cvrcek_Barev}
          alt="logo TK Cvrček"
          className="left_sidebar__logo_cvrcek"
        />
      </Link>
      <HamburgerMenu />
      <br />
      <Kontakt />
      <Links className="links" />
    </div>
  );
};
