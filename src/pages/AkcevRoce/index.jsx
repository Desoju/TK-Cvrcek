import "./style.scss";
import { Link } from "react-router-dom";
//import koupani  from "./../../documents/Prosinec_pokyny-final.pdf"
import jaro from "./../../documents/NEW/Jarni_Obůrka_2025.pdf"
import vylet from "./../../documents/NEW/brezen-vylet.pdf"

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
      {/*<div className="akce-v-roce__momentalini_akce__akce3">
            <h2>Výlet do naší historie a přírody</h2>
            <p>22. 3. 2025</p>
            <a href={vylet}>INFORMACE</a>
          <br></br>
          <Link to="/seznamprihlasenychAkce2" className="link">
            SEZNAM PŘIHLÁŠENÝCH
          </Link> 
        </div> */}
        
      
      <div className="akce-v-roce__momentalini_akce">
        <div className="akce-v-roce__momentalini_akce__akce1">
          <h2>Víkend na Obůrce</h2>
          <p>25.-27. 4. 2025</p>
          <a href={jaro}>INFORMACE</a>
          <br></br>
          <Link to="/seznamprihlasenychAkce1" className="link">
            SEZNAM PŘIHLÁŠENÝCH
          </Link>  
        </div> 

         
          <div className="akce-v-roce__momentalini_akce__akce2">
            <h2>Pálení čarodějnic Říčany</h2>
            <p>30. 4. 2025</p>
          {/*  <a href={drak}>INFORMACE</a>
          <br></br>
          <Link to="/seznamprihlasenychAkce2" className="link">
            SEZNAM PŘIHLÁŠENÝCH
          </Link> */}
        </div> 
        

        {/* 
          <div className="akce-v-roce__momentalini_akce__akce3">
            <h2>NÁZEV</h2>
            <p>DATUM</p>
            <a href={drak}>INFORMACE</a>
          <br></br>
          <Link to="/seznamprihlasenychAkce3" className="link">
            SEZNAM PŘIHLÁŠENÝCH
          </Link>
        </div> 
        */}
      
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
