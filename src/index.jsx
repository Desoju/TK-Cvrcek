import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Main } from "./pages/Main";
import { ONas } from "./pages/ONas";
import { AkcevRoce } from "./pages/AkcevRoce";
import { LetniTabory } from "./pages/LetniTabory";
import { SeznamPrihlasenychAkce1 } from "./pages/SeznamPrihlasenychAkce1";
import { SeznamPrihlasenychAkce2 } from "./pages/SeznamPrihlasenychAkce2";
import { SeznamPrihlasenychAkce3 } from "./pages/SeznamPrihlasenychAkce3";
import { SeznamPrihlasenychTabor } from "./pages/SeznamPrihlasenychTabor";
import { UvodniStranka } from "./pages/UvodniStranka";
import { Kontakt } from "./pages/Kontakt";
import { Kronika } from "./pages/Kronika";
import "./global.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main content={<UvodniStranka />} />} />
          <Route path="onas" element={<ONas />} />
          <Route path="akcevroce" element={<AkcevRoce />} />
          <Route path="letnitabory" element={<LetniTabory />} />
          <Route path="seznamprihlasenychakce1" element={<SeznamPrihlasenychAkce1 />} />
          <Route path="seznamprihlasenychakce2" element={<SeznamPrihlasenychAkce2 />} />
          <Route path="seznamprihlasenychakce3" element={<SeznamPrihlasenychAkce3 />} />
          <Route path="seznamprihlasenychtabor" element={<SeznamPrihlasenychTabor />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="kronika" element={<Kronika />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

createRoot(document.querySelector("#app")).render(<App />);
