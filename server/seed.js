const mongoose = require("mongoose");
require("dotenv").config();

const Car = require("./models/Car");

const cars = [
  {
    name: "Toyota Camry",
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    pricePerDay: 2500,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
    available: true
  },
  {
    name: "Honda City",
    brand: "Honda",
    model: "City",
    year: 2021,
    pricePerDay: 2000,
    transmission: "Manual",
    fuelType: "Petrol",
    seats: 5,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    available: true
  },
  {
    name: "BMW X5",
    brand: "BMW",
    model: "X5",
    year: 2023,
    pricePerDay: 6000,
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: 7,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    available: true
  }
];

const seedCars = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    await Car.deleteMany({});
    console.log("Old cars deleted");

    await Car.insertMany(cars);
    console.log("✅ Cars Added Successfully");

    await mongoose.disconnect();

    console.log("Disconnected");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error:");
    console.error(err);
    process.exit(1);
  }
};

seedCars();