import "./style.scss";
import { Link } from "react-router-dom";
import letaktabor from "./../../documents/Letaktabor2024.pdf";
import prihlaska from "./../../documents/Prihlaska_tabor.pdf";

export const LetniTabory = () => {
  return (
    <div className="letni_tabory">
      <h1>Letní tábory</h1>
      <a href={letaktabor}>INFORMACE</a>
      <a href={prihlaska}>PŘIHLÁŠKA</a>
      <ul>
        <li>
          <Link to="/seznamprihlasenych" className="seznam_prihlasenych">
            SEZNAM PŘIHLÁŠENÝCH
          </Link>
        </li>
      </ul>
      <h3>Program</h3>
      <p>
        Táborem bude děti provázet celotáborová hra s propracovaným programem se
        spoustou zajímavých aktivit a zážitků. Dále se děti můžou těšit na
        výlety po okolí, koupání v nedaleké nádrži a učení se tábornickým
        dovednostem, jako je zdravověda, uzly, znalost rostlin a rozdělávání
        ohně.
      </p>
      <h3>Bydlení a strava</h3>
      <p>
        Spát se bude ve stanech s podsadou a strava bude zajištěna 5x denně
        (snídaně, oběd, svačina, večeře, druhá večeře)
      </p>
      <h3>Lokalita</h3>
      <p>Tábořiště v Kunčině Vsi uprostřed lesů, nedaleko Lysic</p>
      <h3>Základní informace</h3>
      <p>
        Odjezd po poledni 14. 7. 2024 z Brna a Říčan u Brna vlastním autobusem{" "}
      </p>
      <p>Příjezd odpoledne 27. 7. 2024 do Brna a Říčan vlastním autobusem</p>
      <p>Cena tábora 6290 Kč</p>
      <h3>Vedoucí</h3>
      <p>
        Naši vedoucí a instruktoři, kteří se budou o děti starat jezdí na tábory
        už od mala. Velká část z nich si prošla zdravotnickým kurzem a mají
        zkušenosti s prací s dětmi.
      </p>
    </div>
  );
};
