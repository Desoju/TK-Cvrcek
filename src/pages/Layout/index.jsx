import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
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

      <Outlet />
    </>
  )
};