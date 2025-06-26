import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import './index.css';
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white max-w-screen-2xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;