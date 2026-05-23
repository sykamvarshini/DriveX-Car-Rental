const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    name: String,

    brand: String,

    category: String,

    model: String,

    year: Number,

    pricePerDay: Number,

    transmission: String,

    fuelType: String,

    seats: Number,

    image: String,

    available: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Car', carSchema);