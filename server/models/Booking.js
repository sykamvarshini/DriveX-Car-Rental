const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car'
    },
    startDate: Date,
    endDate: Date,
    totalAmount: Number,
    bookingStatus: {
      type: String,
      default: 'pending'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);