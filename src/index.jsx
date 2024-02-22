import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './pages/Layout';
import { UvodniStranka } from './pages/UvodniStranka';
import { ONas } from './pages/ONas';
import { AkcevRoce } from './pages/AkcevRoce';
import { LetniTabory } from './pages/LetniTabory';
import './global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UvodniStranka />} />
          <Route path="onas" element={<ONas />} />
          <Route path="akcevroce" element={<AkcevRoce />} />
          <Route path="letnitabory" element={<LetniTabory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



createRoot(
  document.querySelector('#app'),
).render(<App />);
