const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

router.post('/', async (req, res) => {
  const car = await Car.create(req.body);
  res.status(201).json(car);
});

module.exports = router;