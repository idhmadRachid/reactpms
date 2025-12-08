// src/components/BookingSearchForm.jsx
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useBooking } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const BookingSearchForm = () => {
  const {
    setCheckInDate,
    setCheckOutDate,
    numberOfAdults,
    numberOfChildren,
    setNumberOfAdults,
    setNumberOfChildren,
  } = useBooking();

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const selection = dateRange[0];

    setCheckInDate(selection.startDate);
    setCheckOutDate(selection.endDate);
    // guests already in state
    navigate("/rooms");
  };

  const changeAdults = (delta) => {
    setNumberOfAdults((prev) => Math.max(1, prev + delta));
  };

  const changeChildren = (delta) => {
    setNumberOfChildren((prev) => Math.max(0, prev + delta));
  };

  return (
    <form className="booking-form card" onSubmit={handleSearch}>
      <h2>Book Your Stay</h2>
      <div className="booking-form-grid">
        <div className="booking-form-section">
          <label>Dates</label>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            minDate={new Date()}
            rangeColors={["#0f766e"]}
          />
        </div>

        <div className="booking-form-section">
          <label>Guests</label>
          <div className="guest-selector">
            <div className="guest-row">
              <span>Adults</span>
              <div className="guest-controls">
                <button
                  type="button"
                  onClick={() => changeAdults(-1)}
                  className="guest-btn"
                >
                  -
                </button>
                <span>{numberOfAdults}</span>
                <button
                  type="button"
                  onClick={() => changeAdults(1)}
                  className="guest-btn"
                >
                  +
                </button>
              </div>
            </div>
            <div className="guest-row">
              <span>Children</span>
              <div className="guest-controls">
                <button
                  type="button"
                  onClick={() => changeChildren(-1)}
                  className="guest-btn"
                >
                  -
                </button>
                <span>{numberOfChildren}</span>
                <button
                  type="button"
                  onClick={() => changeChildren(1)}
                  className="guest-btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary full-width">
            Search Rooms
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingSearchForm;
