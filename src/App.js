import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About/About"
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white max-w-screen-2xl">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
