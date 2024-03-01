import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Main } from './pages/Main'; 
import { ONas } from './pages/ONas';
import { AkcevRoce } from './pages/AkcevRoce';
import { LetniTabory } from './pages/LetniTabory';
import './global.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={Main} />
          <Route path="onas" element={<ONas />} />
          <Route path="akcevroce" element={<AkcevRoce />} />
          <Route path="letnitabory" element={<LetniTabory />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

createRoot(
  document.querySelector('#app'),
).render(<App />);
