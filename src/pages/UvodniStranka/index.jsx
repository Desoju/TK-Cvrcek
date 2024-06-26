import { Countdown } from "../Countdown";
import cricket from "./../../images/icons/cricket.png";
import calendar from "./../../images/icons/calendar.png";
import camping from "./../../images/icons/camping.png";
import camera from "./../../images/icons/camera.png";
import { Link } from "react-router-dom";
import "./style.scss";

export const UvodniStranka = () => {
  const targetDate = new Date("July 14, 2024");
  return (
    <div className="uvodni_stranka">
      {<Countdown targetDate={targetDate} />}
      <div className="uvodni_stranka__hlavni_menu">
        <ul>
          <li>
            <Link to="/onas">
              <img src={cricket} alt="stan" className="uvodni_stranka__icon" />O nás
            </Link>
          </li>
          <li>
            <Link to="/letnitabory">
              {" "}
              <img src={camping} alt="stan" className="uvodni_stranka__icon" />Letní tábory
            </Link>
          </li>
          <li>
            <Link to="/akcevroce">
              <img src={calendar} alt="kalendář" className="uvodni_stranka__icon" />Akce v průběhu roku
            </Link>
          </li>
          <li>
            <Link to="/kronika">
              <img src={camera} alt="kronika" className="uvodni_stranka__icon" />Kronika
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
