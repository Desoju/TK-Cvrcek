import { PrihlaseniUcastnciTabor } from "./PrihlseniUcastniciTabor";

export const SeznamPrihlasenychTabor = () => {
  return (
    <div className="seznam_prihlasenych">
      <h1>Seznam přihlášených</h1>
      <p>Letní tábor 20. 7. - 2. 8. 2025</p>
      <p>Aktualizováno ke dni 11. 2. 2025</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Jméno</th>
            <th>Zaplaceno</th>
          </tr>
        </thead>
        <tbody>
          {PrihlaseniUcastnciTabor.map((val, index) => {
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
