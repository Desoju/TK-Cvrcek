import "./style.scss";
import { Outlet, Link } from "react-router-dom";

export const LetniTabory = () => {
  return (
    <div className="letni_tabory">
      <h1>Letní tábory</h1>
      <h3>Program</h3>
      <p>
        Táborem bude děti provázet celotáborová hra s propracovaným programem se
        spoustou zajímavých aktivit a zážitků. Dále se děti můžou těšit na
        výlety po okolí, koupání v nedaleké nádrži a učení se tábornickým
        dovednostem, jako je zdravověda, uzly, znalost rostlin a rozdělávání
        ohně.{" "}
      </p>
      <h3>Bydlení a strava</h3>
      <p>Spát se bude ve stanech s podsadou a strava bude zajištěna 5x denně</p>
      <h3>Lokalita</h3>
      <p>Kunčina ves, blízkost Lysic</p>
      <h3>Co s sebou?</h3>
      <p>
        podle přihlášek a věci navíc už jsou na každém individuálně (vy je
        budete tahat v krosně)
      </p>
      <h3>Praktické info - kdy a kde odjezd/příjezd, termíny…</h3>
      <p>
        NA HLAVNÍ STRÁNKU ZÁKLADNÍ INFO A PROKLIK NA PŘIHLÁSIT!!!!!!!!!!!!!!!
      </p>
      <ul>
        <li>
          <Link to="/seznamprihlasenych" className="seznam_prihlasenych">Seznam přihlášených</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
