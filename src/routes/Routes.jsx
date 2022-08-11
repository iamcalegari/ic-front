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

// <Route path="/" element={<TamanhoVetores />} />;
// {
//   Array(1000)
//     .fill(0)
//     .map((_, index) => (
//       <Route
//         path={`/${index + 1}/VetoresEncontrados`}
//         element={<VetoresEncontrados range={index + 1} />}
//       />
//     ));
// }
