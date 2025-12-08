// src/components/RoomCard.jsx
import React from "react";

const RoomCard = ({ room, onSelect, isSelected }) => {
  return (
    <article className={`room-card card ${isSelected ? "room-selected" : ""}`}>
      <div className="room-image-wrap">
        <img src={room.image} alt={room.name} className="room-image" />
      </div>
      <div className="room-body">
        <h3>{room.name}</h3>
        <p className="room-meta">
          {room.bedType} • {room.size}
        </p>
        <p className="room-price">
          <span>${room.pricePerNight}</span> / night
        </p>
        <ul className="room-amenities">
          {room.amenities.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <button className="btn-secondary full-width" onClick={onSelect}>
          {isSelected ? "Selected" : "Select Room"}
        </button>
      </div>
    </article>
  );
};

export default RoomCard;
