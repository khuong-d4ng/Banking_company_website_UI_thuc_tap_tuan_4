import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
<<<<<<< khai/update/about
import About from "./pages/About/About"
=======
import About from "./pages/About";
>>>>>>> master
import './index.css';
import Home from "./pages/Home";


function App() {
  return (
<<<<<<< khai/update/about
    <div className="min-h-screen bg-black text-white max-w-screen-2xl">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
=======
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <Home />
>>>>>>> master
      <Footer />
    </div>
  );
}

export default App;
