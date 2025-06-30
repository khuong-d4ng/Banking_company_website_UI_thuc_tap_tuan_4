import { Routes, Route } from 'react-router-dom';
import LayoutCommon from "./components/LayoutCommon";
import About from "./pages/About";
import Home from "./pages/Home";
import './index.css';

function App() {
  return (
    <Routes>
      <Route element={<LayoutCommon />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;