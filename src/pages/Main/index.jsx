import "./style.scss";
import { Outlet, Link } from "react-router-dom";

export const Main = ({ children }) => {
  return (
    <div className="main">
      <h3>Do tábora zbývá 32 dní</h3>
      {children}
      <div className="menu-content">
        <nav>
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
      </nav>
      </div>
      <Outlet />
    </div>
  );
};

/*
export const Main = () => {
  return(
    <div className="main">

    </div>
  )
}*/