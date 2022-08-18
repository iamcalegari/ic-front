import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import VetoresEncontrados from "../pages/VetoresEcontrados";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vetoresFiltrados" element={<VetoresEncontrados />} />
      </Routes>
    </Router>
  );
}
