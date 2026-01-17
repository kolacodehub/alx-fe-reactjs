import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
// Add this import at the top
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar stays outside Routes so it's always visible */}
        <Navbar />

        {/* Routes determine which component renders based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
