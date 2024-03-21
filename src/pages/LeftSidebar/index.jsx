import { HamburgerMenu } from "./hamburgerMenu";
import "./style.scss";
import Logo_Cvrcek_Barev from "./../../images/logos/Logo_Cvrcek_Barev.png";
import { Link } from "react-router-dom";
import { Links } from "./../Links";

export const LeftSidebar = () => {
  return (
    <div className="left_sidebar">
      <Link to="/">
        <img
          src={Logo_Cvrcek_Barev}
          alt="logo TK Cvrček"
          className="logo_cvrcek"
        />
      </Link>
      <HamburgerMenu />
      <br />
      <div className="text_adresa">
        <p className="text_adresa--bold">Česká tábornická unie -</p>
        <p className="text_adresa--bold">T. K. Cvrček Brno, p. s.</p>
        <br />
        <p>Březina 385,</p>
        <p>Zbraslav 664 84</p>
        <p>IČ: XXXXXXXXXXXXX</p>
        <p>E-mail: tkcvrcek@gmail.com</p>
        <p></p>
        <br />
        <p className="text_adresa--bold">Máte otázku? Napište nám!</p>
        <br />
      </div>
      <Links />
      {/*
      <form >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Vaše e-mailová adresa..."
          autoComplete="email"
          className="otazka"
        />
        <br />
        <input type="text" id="otazka" name="otazka" placeholder="Otázka..." className="otazka"/>
      </form>
       */}
  </div>
  );
};
