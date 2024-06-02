import "./style.scss";
import { PrihlaseniUcastnciAkce1 } from "./PrihlseniUcastniciAkce1";

export const SeznamPrihlasenychAkce1 = () => {
  return (
    <div className="seznam_prihlasenych">
      <h1>Seznam přihlášených</h1>
      <p>Letní obůrka 21.-23. 6. 2024</p>
      <p>Aktualizováno ke dni 2. 6. 2024</p>
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
