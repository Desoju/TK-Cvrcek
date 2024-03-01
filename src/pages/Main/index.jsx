import "./style.scss";
import { Outlet, Link } from "react-router-dom";

export const Main = ({ children }) => {
  return (
    <div className="main">
      <h3>Do tábora zbývá XX dní</h3>
      {children}
      <div className="menu-content">
        <ul>
          <li>
            <Link to="/">Uvodní stránka</Link>
          </li>
          <li>
            <Link to="/akcevroce">Akce v průběhu roku</Link>
          </li>
          <li>
            <Link to="/onas">O nás</Link>
          </li>
          <li>
            <Link to="/letnitabory">Letní tábory</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
