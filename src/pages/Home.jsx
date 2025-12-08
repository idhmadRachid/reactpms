// src/pages/Home.jsx
import React from "react";
import BookingSearchForm from "../components/BookingSearchForm";
import FeaturedRooms from "./HomeFeaturedRooms";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1>Experience Boutique Comfort</h1>
          <p>
            A modern riad-inspired hotel in the heart of the city. Elegant
            rooms, warm hospitality, and unforgettable stays.
          </p>
        </div>
      </section>

      <section className="container section">
        <BookingSearchForm />
      </section>

      <section className="section section-alt">
        <div className="container">
          <FeaturedRooms />
        </div>
      </section>
    </main>
  );
};

export default Home;
