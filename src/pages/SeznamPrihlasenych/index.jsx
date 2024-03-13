import "./style.scss";
import { PrihlaseniUcastnci } from "./PrihlseniUcastnici";

export const SeznamPrihlasenych = () => {
  return (
    <div className="seznam_prihlasenych">
      <h1>Seznam přihlášených</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Jméno</th>
            <th>Zaplaceno</th>
          </tr>
        </thead>
        <tbody>
          {PrihlaseniUcastnci.map((val, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val.paid}</td>
                <td>    |    </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
