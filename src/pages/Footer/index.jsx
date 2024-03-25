import "./style.scss";
import { Links } from "../Links";
import logo from "./../../images/logos/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer__logoCTU"
        src={logo}
        alt="logo české tábornické unie"
      />
      <div className="footer__copyright">
        <p>&copy; Julie Desová</p>
      </div>
      <Links className="footer__links" />
    </footer>
  );
};
