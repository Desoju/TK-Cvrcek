import "./style.scss";
import { Link } from "react-router-dom";
import letaktabor from "./../../documents/NEW/Letak_tabor_2025.pdf";
import prihlaska from "./../../documents/NEW/Prihlaska_tabor_2025.pdf";

export const LetniTabory = () => {
  return (
    <div className="letni_tabory">
      <h1>Letní tábory</h1>
      <p>Termíny: </p>
      <p>     1. turnus:  20. 7. - 2. 8. 2025</p>
      <ul>
        <li>
          <Link to="/SeznamPrihlasenychTabor" className="seznam_prihlasenych">
            SEZNAM PŘIHLÁŠENÝCH
          </Link>
        </li>
      </ul>
      <p>     2. turnus:  2. 8. - 9. 8. 2025</p>
      <ul>
        <li>
          <Link to="/SeznamPrihlasenychAkce3" className="seznam_prihlasenych">
            SEZNAM PŘIHLÁŠENÝCH
          </Link>
        </li>
      </ul>
      {/*<p>ADRESA NA TÁBOR:</p>
      <p>Jméno dítěte</p>
      <p>LT TK Cvrček</p>
      <p>Kunčina Ves 6, 679 71 pošta Lysice</p>  */}
      {/*<a href={predodjezdem}>INFORMACE PŘED ODJEZDEM!</a> */}
      <h3>Důležité dokumenty: </h3>
      <a href={letaktabor}>INFORMACE</a>
      <a href={prihlaska}>PŘIHLÁŠKA</a>
      
      {/*<p>Odevzdat na srazu před odjezdem: </p>
      <a href={bezinfekcnost}>POTVRZENÍ O BEZINFEKČNOSTI</a>
      <a href={zpusobilost}>POTVRZENÍ O ZDRAVOTNÍ ZPŮSOBILOSTI</a> 
      */}
      
      <h3>Program</h3>
      <p>
        Táborem bude děti provázet celotáborová hra s propracovaným programem se
        spoustou zajímavých aktivit a zážitků. Dále se děti mohou těšit na
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
      {/*<h3>Základní informace</h3>
      <p>
        Odjezd po poledni 14. 7. 2024 z Brna a Říčan u Brna vlastním autobusem{" "}
      </p>
      <p>Příjezd odpoledne 27. 7. 2024 do Brna a Říčan vlastním autobusem</p>
      <p>Cena tábora 6290 Kč</p> */}
      <h3>Vedoucí</h3>
      <p>
        Naši vedoucí a instruktoři, kteří se budou o děti starat jezdí na tábory
        už od mala. Velká část z nich si prošla zdravotnickým kurzem a mají
        zkušenosti s prací s dětmi.
      </p>
    </div>
  );
};
