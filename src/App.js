import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Impact from "./components/Impact";

import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Impact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;