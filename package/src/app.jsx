import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Graphs from "./pages/Graphs";

const App = () => {
  return (
    <Router>
      <nav style={{ padding: "1rem", textAlign: "center" }}>
        <Link to="/dashboard" style={{ margin: "1rem" }}>Dashboard</Link>
        <Link to="/home" style={{ margin: "1rem" }}>Home</Link>
        <Link to="/graphs" style={{ margin: "1rem" }}>Graphs</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<h1 style={{ textAlign: "center" }}>Welcome to the Future-Lift</h1>}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/graphs" element={<Graphs />} />
      </Routes>
    </Router>
  );
};

export default App;
