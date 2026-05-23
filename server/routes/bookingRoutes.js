const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json(booking);
});

router.get('/', async (req, res) => {
  const bookings = await Booking.find()
    .populate('user')
    .populate('car');

  res.json(bookings);
});

module.exports = router;