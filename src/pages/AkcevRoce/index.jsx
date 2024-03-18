import "./style.scss";
import { Link } from "react-router-dom";
import letaktabor from "./../../documents/Letak_Oburka.pdf";

export const AkcevRoce = () => {
  return (
    <div className="akce_v_roce">
      <h1>Akce v průběhu roku</h1>
      
      <p>
        Kromě letních táborů se s námi můžete potkat na nejrůznějších akcích v
        průběhu roku. Akce mohou být víkendové či jednodenní pod dohledem našich
        vedoucích.
      </p>
      <p>Momentálně naplánované akce:</p>
      <div className="momentalini_akce">
        <div className="akce1">
          <p>Jarní Obůrka</p>
          <p>5.-7. 4. 2024</p>
          <a href={letaktabor}>INFO</a>
          <ul>
            <li>
             <Link to="/seznamprihlasenych" className="link">
                 SEZNAM PŘIHLÁŠENÝCH
              </Link>
            </li>
          </ul>
          {/*<p>Přihlášení účastníci</p>*/}
        </div>
        <div className="akce2">
          <p>Předtáborová Obůrka</p>
          <p>21.-23. 6. 2024</p>
          <a /*href=""*/>INFO (zatím není)</a>
          {/*<p>Přihlášení účastníci</p>*/}
        </div>
        {/*<div className="akce3">
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
