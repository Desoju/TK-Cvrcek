import "./style.scss";
import { PrihlaseniUcastnciAkce1 } from "./PrihlseniUcastniciAkce1";

export const SeznamPrihlasenychAkce1 = () => {
  return (
    <div className="seznam_prihlasenych">
      <h1>Seznam přihlášených</h1>
      <p>Koupání s Cvrčky 7. 12. 2024</p>
      <p></p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Jméno</th>
            <th>Zaplaceno</th>
          </tr>
        </thead>
        <tbody>
          {PrihlaseniUcastnciAkce1.map((val, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val.paid}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
