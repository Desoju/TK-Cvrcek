import "./../style.scss"
import bonfire from "./../../../../images/icons/bonfire.png"

export const NocVMuzeu = () => {
  return (
    <div className="zaznam-kroniky">
      <h3>Obůrka - Noc v muzeu</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas inventore impedit maxime soluta eius, et nostrum exercitationem reprehenderit adipisci, doloribus veniam commodi iure! Consequuntur dolore ea aliquam dolor sunt.</p>
      <div className="zaznam-kroniky__fotky">
        <img src={bonfire} alt="ohen" className="zaznam-kroniky__fotky__fotka"/>
        <img src={bonfire} alt="ohen" className="zaznam-kroniky__fotky__fotka"/>
        <img src={bonfire} alt="ohen" className="zaznam-kroniky__fotky__fotka"/>
        <img src={bonfire} alt="ohen" className="zaznam-kroniky__fotky__fotka"/>
        <img src={bonfire} alt="ohen" className="zaznam-kroniky__fotky__fotka"/>
        <img src={bonfire} alt="ohen" className="zaznam-kroniky__fotky__fotka"/>
      </div>
    </div>
  );
};