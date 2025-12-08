// src/pages/Rooms.jsx
import React, { useEffect } from "react";
import { useBooking } from "../context/BookingContext";
import roomsData from "../data/roomsData";
import RoomCard from "../components/RoomCard";

const formatDate = (d) =>
  d ? d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" }) : "";

const Rooms = () => {
  const {
    checkInDate,
    checkOutDate,
    numberOfAdults,
    numberOfChildren,
    selectedRoom,
    setSelectedRoom,
  } = useBooking();

  const totalGuests = numberOfAdults + numberOfChildren;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let filteredRooms = roomsData;
  if (totalGuests > 0) {
    filteredRooms = roomsData.filter((room) => room.maxGuests >= totalGuests);
  }

  const hasDates = checkInDate && checkOutDate;

  return (
    <main className="container section">
      <div className="section-header">
        <h1>Available Rooms</h1>
        <p>
          {hasDates ? (
            <>
              For <strong>{totalGuests}</strong> guest
              {totalGuests > 1 ? "s" : ""} from{" "}
              <strong>{formatDate(checkInDate)}</strong> to{" "}
              <strong>{formatDate(checkOutDate)}</strong>.
            </>
          ) : (
            <>Choose your dates on the home page to get the best availability.</>
          )}
        </p>
      </div>

      {filteredRooms.length === 0 ? (
        <p>No rooms available for the selected criteria.</p>
      ) : (
        <div className="rooms-grid">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onSelect={() => setSelectedRoom(room)}
              isSelected={selectedRoom && selectedRoom.id === room.id}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Rooms;
