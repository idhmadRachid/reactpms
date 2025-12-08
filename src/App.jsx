// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";

import Header from "./components/Header";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";

import "./styles.css";

const App = () => {
  return (
    <BookingProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Riad Lux Hotel. All rights reserved.</p>
          </div>
        </footer>
      </Router>
    </BookingProvider>
  );
};

export default App;
