// src/pages/HomeFeaturedRooms.jsx
import React from "react";
import roomsData from "../data/roomsData";
import RoomCard from "../components/RoomCard";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const HomeFeaturedRooms = () => {
  const featured = roomsData.slice(0, 3);
  const navigate = useNavigate();
  const { setSelectedRoom } = useBooking();

  const handleSelect = (room) => {
    setSelectedRoom(room);
    navigate("/rooms");
  };

  return (
    <div>
      <div className="section-header">
        <h2>Featured Rooms</h2>
        <p>Hand-picked rooms for your next stay.</p>
      </div>
      <div className="rooms-grid">
        {featured.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            onSelect={() => handleSelect(room)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeFeaturedRooms;
