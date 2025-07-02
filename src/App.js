import { Routes, Route } from 'react-router-dom';
import LayoutCommon from "./components/LayoutCommon";
import About from "./pages/About/About";
import Home from "./pages/Home";
import Login from './pages/login';
import Careers from './pages/Careers'

import './index.css';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route element={<LayoutCommon />}>
        <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
