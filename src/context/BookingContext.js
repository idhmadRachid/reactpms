// src/context/BookingContext.js
import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfAdults, setNumberOfAdults] = useState(2);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const resetBooking = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
    setNumberOfAdults(2);
    setNumberOfChildren(0);
    setSelectedRoom(null);
  };

  const value = {
    checkInDate,
    checkOutDate,
    numberOfAdults,
    numberOfChildren,
    selectedRoom,
    setCheckInDate,
    setCheckOutDate,
    setNumberOfAdults,
    setNumberOfChildren,
    setSelectedRoom,
    resetBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
