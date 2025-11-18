import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Services from "./pages/Services.jsx";
import Details from "./pages/Details.jsx";
import Features from "./pages/Features.jsx";
import Projects from "./pages/Projects.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/home/Nav.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Define todas las rutas solicitadas */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/details" element={<Details />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
