// src/pages/Facilities.jsx
import React from "react";

const Facilities = () => {
  return (
    <main className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h1>Facilities & Amenities</h1>
          <p>Everything you need for a relaxed and productive stay.</p>
        </div>

        <div className="facilities-grid">
          <div className="card facility-card">
            <h3>Rooftop Terrace</h3>
            <p>Panoramic city views with cozy seating and sunset cocktails.</p>
          </div>
          <div className="card facility-card">
            <h3>Spa & Wellness</h3>
            <p>Traditional hammam rituals, massages, and a quiet relaxation area.</p>
          </div>
          <div className="card facility-card">
            <h3>Restaurant</h3>
            <p>Seasonal Moroccan & Mediterranean cuisine, served all day.</p>
          </div>
          <div className="card facility-card">
            <h3>Conference Room</h3>
            <p>Fully equipped meeting space for up to 20 people.</p>
          </div>
          <div className="card facility-card">
            <h3>Airport Transfer</h3>
            <p>Private airport pickup and drop-off on request.</p>
          </div>
          <div className="card facility-card">
            <h3>24/7 Concierge</h3>
            <p>Restaurant reservations, tours, and all local recommendations.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Facilities;
