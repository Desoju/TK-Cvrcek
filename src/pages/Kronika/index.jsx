import "./style.scss";
import { NocVMuzeu } from "./ZaznamyKroniky/nocvmuzeu";

export const Kronika = () => {
  return (
    <div className="kronika">
      <h1>Kronika</h1>
      {/*<div className="zaznamy_kroniky">
        <NocVMuzeu /> 
      </div>*/}
      <h3>Veškeré dění na našem letním táboře můžete sledovat na našem facebooku, kde budeme s krátkým popiskem zveřejňovat i výběr fotek z daného dne</h3>
      <a href="https://www.facebook.com/profile.php?id=61555326507157">Facebook TK Cvrček</a>
    </div>
  );
};