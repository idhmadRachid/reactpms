// src/pages/Contact.jsx
import React, { useState } from "react";
import { useBooking } from "../context/BookingContext";

const formatDate = (d) =>
  d ? d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" }) : "";

const Contact = () => {
  const {
    selectedRoom,
    checkInDate,
    checkOutDate,
    numberOfAdults,
    numberOfChildren,
  } = useBooking();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (mock)");
  };

  return (
    <main className="container section">
      <div className="section-header">
        <h1>Contact Us</h1>
        <p>We’re here to help you plan the perfect stay.</p>
      </div>

      <div className="contact-layout">
        <form className="card contact-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn-primary full-width">
            Send Message
          </button>
        </form>

        <aside className="card contact-info">
          <h2>Hotel Info</h2>
          <p>
            <strong>Riad Lux Hotel</strong>
            <br />
            123 Medina Street
            <br />
            Casablanca, Morocco
          </p>
          <p>
            Phone: +212 6 00 00 00 00
            <br />
            Email: hello@riadlux.example
          </p>

          {selectedRoom && (
            <div className="booking-summary">
              <h3>Your Selection</h3>
              <p>
                Room: <strong>{selectedRoom.name}</strong>
              </p>
              {checkInDate && checkOutDate && (
                <p>
                  Dates: <strong>{formatDate(checkInDate)}</strong> →{" "}
                  <strong>{formatDate(checkOutDate)}</strong>
                </p>
              )}
              <p>
                Guests: <strong>{numberOfAdults} adults</strong>
                {numberOfChildren > 0 && (
                  <>
                    {" "}
                    & • <strong>{numberOfChildren} children</strong>
                  </>
                )}
              </p>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
};

export default Contact;
