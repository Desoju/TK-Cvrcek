import "./style.scss";
import { Link } from "react-router-dom";
import info_Oburka_jaro_2024 from "./../../info_akce/info-Oburka-jaro-2024.pdf";

export const AkcevRoce = () => {
  return (
    <div className="akce_v_roce">
      <h1>Akce v průběhu roku</h1>
      <ul>
        <li>
          <Link to="/seznamprihlasenych" className="link">
            Seznam přihlášených
          </Link>
        </li>
      </ul>
      <p>
        Kromě letních táborů se s námi můžete potkat na nejrůznějších akcích v
        průběhu roku. Akce mohou být víkendové či jednodenní pod dohledem našich
        vedoucích.
      </p>
      <p>Momentálně naplánované akce:</p>
      <div className="momentalini_akce">
        <div className="akce1">
          <p>Obůrka jaro 2024</p>
          <p>5. - 7. dubna 2024</p>
          <p>{info_Oburka_jaro_2024}</p>
          <p>Přihlášení účastníci</p>
        </div>
        <div className="akce2">
          <p>Název</p>
          <p>Datum</p>
          <p>Info</p>
          <p>Přihlášení účastníci</p>
        </div>
        <div className="akce3">
          <p>Název</p>
          <p>Datum</p>
          <p>Info</p>
          <p>Přihlášení účastníci</p>
        </div>
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
