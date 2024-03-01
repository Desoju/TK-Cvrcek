import "./style.scss";
import { Outlet, Link } from "react-router-dom";

export const AkcevRoce = () => {
  return (
    <div>
      <h1>Akce v průběhu roku</h1>
      <p>
        Kromě letních táborů se s námi můžete potkat na nejrůznějších akcích v
        průběhu roku. Akce mohou být víkendové či jednodenní pod dohledem našich
        vedoucích. momentálně naplánované akce:
      </p>
      <ul>
        <li>
          víkendové akce
          <ul>
            <li>○ Obůrky (termín, info, PROKLIK na toto)</li>
          </ul>
        </li>
        <li>
          Jednodenní akce
          <ul>
            <li>○ čištění Olavky</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/seznamprihlasenych">Seznam přihlášených</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
