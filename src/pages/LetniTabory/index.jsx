import "./style.scss";
import { Link } from "react-router-dom";
import letaktabor from "./../../documents/NEW/Letak_tabor_2025.pdf";
import prihlaska from "./../../documents/NEW/Prihlaska_tabor_2025.pdf";
import predodjezdem from "./../../documents/NEW/Tábor-pokyny-před-odjezdem-2025.pdf"
import bezinfekcnost from "./../../documents/NEW/Bezinfekčnost-formulář-2025.pdf"
import zpusobilost from "./../../documents/NEW/Zdravotni_zpusobilost_LT2025.pdf"

export const LetniTabory = () => {
  return (
    <div className="letni_tabory">
      <h1>Letní tábory</h1>
      <p>Letní tábory pro vás pečlivě připravujeme a včas vás o nich budeme informovat prostřednictvím mailu a zde na webovkách.</p>
      <p>Pokud jste na nás narazili někdy během školního roku a měli byste zájem být také kontaktováni ohledně bližších informací k letním táborům, ozvěte se nám na mail tkcvrcek@gmail.com</p>
      {/*<p>Termíny: </p>
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
      <p>ADRESA NA TÁBOR:</p>
      <p>Jméno dítěte</p>
      <p>LT TK Cvrček</p>
      <p>Kunčina Ves 6, 679 71 pošta Lysice</p> 
      <a href={predodjezdem}>INFORMACE PŘED ODJEZDEM!</a>
      <h3>Důležité dokumenty: </h3>
      <a href={letaktabor}>INFORMACE</a>
      <a href={prihlaska}>PŘIHLÁŠKA</a>
      
      <p>Odevzdat na srazu před odjezdem: </p>
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
      <h4>1. Turnus</h4>
      <p>Odjezd 14:30 20. 7. 2025 z Říčan u Brna a v 15:30 z Brna-Královo Pole</p>
      <p>Příjezd cca 13:00 2. 8. 2025 do Brna-Královo Pole a cca 13:45 do Říčan</p>
      <h4>2. Turnus</h4>
      <p>Odjezd 14:30 2. 8. 2025 z Říčan u Brna a v 15:30 z Brna-Královo Pole</p>
      <p>Příjezd cca 13:00 9. 8. 2025 do Brna-Královo Pole a cca 13:45 do Říčan</p>
      */}
      
      <h3>Vedoucí</h3>
      <p>
        Naši vedoucí a instruktoři, kteří se budou o děti starat jezdí na tábory
        už od mala. Velká část z nich si prošla zdravotnickým kurzem a mají
        zkušenosti s prací s dětmi.
      </p>
      
    </div>
  );
};
