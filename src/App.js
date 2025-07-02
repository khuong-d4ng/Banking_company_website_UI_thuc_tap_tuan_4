import { Routes, Route } from 'react-router-dom';
import LayoutCommon from "./components/LayoutCommon";
import About from "./pages/About/About";
import Home from "./pages/Home";
import Login from './pages/login';
import './index.css';

function App() {
  return (
    <Routes>
      <Route element={<LayoutCommon />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
