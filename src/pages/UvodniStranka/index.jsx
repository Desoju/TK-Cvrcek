import { Countdown } from "../Countdown";
import cricket from "./../../images/icons/cricket.png";
import calendar from "./../../images/icons/calendar.png";
import camping from "./../../images/icons/camping.png";
import { Link } from "react-router-dom";
import "./style.scss";

export const UvodniStranka = () => {
  const targetDate = new Date("July 14, 2024");
  return (
    <div className="uvodni_stranka">
      {<Countdown targetDate={targetDate} />}
      <div className="hlavni_menu">
        <ul>
          <li>
            <Link to="/onas">
              <img src={cricket} alt="stan" className="icon" />
              <p>O nás</p>
            </Link>
          </li>
          <li>
            <Link to="/letnitabory">
              {" "}
              <img src={camping} alt="stan" className="icon" />
              <p>Letní tábory</p>
            </Link>
          </li>
          <li>
            <Link to="/akcevroce">
              <img src={calendar} alt="kalendář" className="icon" />
              <p>Akce v průběhu roku</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
