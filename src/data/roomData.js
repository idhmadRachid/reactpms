// src/data/roomsData.js
const roomsData = [
  {
    id: 1,
    name: "Deluxe King Room",
    slug: "deluxe-king-room",
    pricePerNight: 120,
    maxGuests: 2,
    size: "28 m²",
    bedType: "1 King Bed",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["Free Wi-Fi", "Air Conditioning", "City View", "Breakfast"],
  },
  {
    id: 2,
    name: "Family Suite",
    slug: "family-suite",
    pricePerNight: 190,
    maxGuests: 4,
    size: "40 m²",
    bedType: "1 King + 2 Single Beds",
    image:
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["Free Wi-Fi", "Kitchenette", "Balcony", "Breakfast"],
  },
  {
    id: 3,
    name: "Standard Twin Room",
    slug: "standard-twin-room",
    pricePerNight: 90,
    maxGuests: 2,
    size: "24 m²",
    bedType: "2 Single Beds",
    image:
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Garden View"],
  },
  {
    id: 4,
    name: "Junior Suite",
    slug: "junior-suite",
    pricePerNight: 150,
    maxGuests: 3,
    size: "32 m²",
    bedType: "1 King Bed + Sofa Bed",
    image:
      "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["Free Wi-Fi", "Living Area", "City View", "Breakfast"],
  },
];

export default roomsData;
