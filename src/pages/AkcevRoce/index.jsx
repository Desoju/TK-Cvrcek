import "./style.scss";
import { Link } from "react-router-dom";
import letaktabor from "./../../documents/Letak_Oburka.pdf";
import proprihlasene from "./../../documents/Pokyny pro účastníky.pdf";

export const AkcevRoce = () => {
  return (
    <div className="akce-v-roce">
      <h1>Akce v průběhu roku</h1>
      
      <p>
        Kromě letních táborů se s námi můžete potkat na nejrůznějších akcích v
        průběhu roku. Akce mohou být víkendové či jednodenní pod dohledem našich
        vedoucích.
      </p>
      <p>Momentálně naplánované akce:</p>
      <div className="akce-v-roce__momentalini_akce">
        <div className="akce-v-roce__momentalini_akce__akce1">
          <p>Jarní Obůrka</p>
          <p>5.-7. 4. 2024</p>
          <a href={letaktabor}>INFORMACE</a>
          <a href={proprihlasene}>PODROBNÉ INFORMACE PŘED ODJEZDEM</a>
          <ul>
            <li>
             <Link to="/seznamprihlasenychAkce1" className="link">
                 SEZNAM PŘIHLÁŠENÝCH
              </Link>
            </li>
          </ul>
          {/*<p>Přihlášení účastníci</p>*/}
        </div>
        <div className="akce-v-roce__momentalini_akce__akce2">
          <p>Předtáborová Obůrka</p>
          <p>21.-23. 6. 2024</p>
          {/* <a href="" className="prozatim">INFO (zatím není)</a> */}
          {/*<p>Přihlášení účastníci</p>*/}
        </div>
        {/*<div className="akce-v-roce__momentalini_akce__akce3">
          <p>Název</p>
          <p>Datum</p>
          <p>Info</p>
          <p>Přihlášení účastníci</p>
        </div> */}
      </div>
    </div>
  );
};

/*
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
      */
