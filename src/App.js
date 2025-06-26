import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import './index.css';
import Home from "./pages/Home";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
