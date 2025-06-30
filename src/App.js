import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Careers from './pages/Careers';
import About from "./pages/About";
import Home from "./pages/Home";

import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white max-w-screen-2xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
