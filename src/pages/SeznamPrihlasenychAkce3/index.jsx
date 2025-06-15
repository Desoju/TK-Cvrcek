import { PrihlaseniUcastnciAkce3 } from "./PrihlseniUcastniciAkce3";


// 2. TURNUS


export const SeznamPrihlasenychAkce3 = () => {
  return (
    <div className="seznam_prihlasenych">
      <h1>Seznam přihlášených</h1>
      <p>Letní tábor 2. 8. - 9. 8. 2025</p>
      <p>Aktualizováno ke dni 15. 6. 2025</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Jméno</th>
            <th>Zaplaceno</th>
          </tr>
        </thead>
        <tbody>
          {PrihlaseniUcastnciAkce3.map((val, index) => {
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
