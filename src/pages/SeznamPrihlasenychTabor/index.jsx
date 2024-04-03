import { PrihlaseniUcastnciTabor } from "./PrihlseniUcastniciTabor";

export const SeznamPrihlasenychTabor = () => {
  return (
    <div className="seznam_prihlasenych">
      <h1>Seznam přihlášených</h1>
      <p>Letní tábor 14.-27. 7. 2024</p>
      <p>Aktualizováno ke dni 2. 4. 2024</p>
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
                <td>{val.paid} Kč</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
