import "./style.scss";
import { Link } from "react-router-dom";
import podzim from "./../../documents/podzim-sifryy.pdf"
import drak from "./../../documents/Drakiáda-info.pdf"

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
          <h2>Podzimní šifrovačka</h2>
          <p>27. 10. 2024</p>
          <a href={podzim}>INFORMACE</a>
          <br></br>
          <a href={"https://docs.google.com/spreadsheets/d/1-Z_ZxacciCQ2-M4izrraOPYBLY6zublwkhwF3buQHbk/edit?fbclid=IwZXh0bgNhZW0CMTEAAR1H5-eWpdy72G5KGEQdtKXm3dUuVtF9u7gV5j_TrLJLtkqT-k1yqH_x7VA_aem_taerbto3iNLO-oKg9Z9Iyw&gid=0#gid=0"}>TABULKA NA TÝMY </a>
          {/*<br></br>
          <Link to="/seznamprihlasenychAkce1" className="link">
            SEZNAM PŘIHLÁŠENÝCH
          </Link> */}
          
        </div>
        <div className="akce-v-roce__momentalini_akce__akce2">
          <h2>Drakiáda Lukovany</h2>
          <p>9.-10. 11. 2024</p>
          <a href={drak}>INFORMACE</a>
          <br></br>
          <Link to="/seznamprihlasenychAkce2" className="link">
            SEZNAM PŘIHLÁŠENÝCH
          </Link>
        </div>
        {/*<div className="akce-v-roce__momentalini_akce__akce3">
          <p>Drakiáda</p>
          <p>datum</p>
          <p>Info</p>
          <Link to="/seznamprihlasenychAkce2" className="link">
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
