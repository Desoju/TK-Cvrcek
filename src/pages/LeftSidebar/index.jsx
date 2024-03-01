import { HamburgerMenu } from "./hamburgerMenu";
import './style.scss';
import Logo_Cvrcek_Barev from "./../../images/logos/Logo_Cvrcek_Barev.png";
import { Link } from "react-router-dom";

export const LeftSidebar = () => {
  return (
  <div className="left_sidebar">
    <Link to="/">
      <img src={Logo_Cvrcek_Barev} alt="logo TK Cvrček" className="logo_cvrcek" />
    </Link>
    <HamburgerMenu />
    <div className="text_adresa">
      <p className="text_adresa--bold">Česká tábornická unie -</p>
      <p className="text_adresa--bold">T. K. Cvrček Brno, p. s.</p>
      <p>Březina 385,</p>
      <p>Zbraslav 664 84</p>
      <p>IČ: XXXXXXXXXXXXX</p>
      <p>E-mail: tkcvrcek@gmail.com</p>
      <p></p>
      <p className="text_adresa--bold">Máte otázku? Napište nám!</p>
    </div>
    <form>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Vaše e-mailová adresa..."
        autoComplete="email"
      />
      <br />
      <input 
        type="text"
        id="otazka"
        name="otazka"
        placeholder="Otázka..."
      />
    </form>
  </div>
  )
};