import "./style.scss";
import { Link } from "react-router-dom";
import podzim from "./../../documents/Podzimní_akce_2024.pdf"

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
          <h2>Výlet do naší historie a přírody</h2>
          <p>!!22. 9. 2024!! NOVÝ TERMÍN</p>
          <a href={podzim}>INFORMACE</a>
          <br></br>
          <Link to="/seznamprihlasenychAkce1" className="link">
            SEZNAM PŘIHLÁŠENÝCH
          </Link>
          
        </div>
        <div className="akce-v-roce__momentalini_akce__akce2">
          <h2>Šifrovačka</h2>
          <p>27. 10. 2024</p>
          <p></p>
          {/* <a href="" className="prozatim">INFO (zatím není)</a> */}
          {/*<p>Přihlášení účastníci</p>*/}
        </div>
        {/*<div className="akce-v-roce__momentalini_akce__akce3">
          <p>Název</p>
          <p>Datum</p>
          <p>Info</p>
          <p>Přihlášení účastníci</p>
        </div> */}
        <div className="akce-v-roce__momentalini_akce__akce3">
          <h2>Drakiáda</h2>
          <p>9.-10. 11. 2024</p>
          <p></p>
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
