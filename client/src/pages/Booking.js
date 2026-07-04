import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Booking = () => {
  const location = useLocation();
  const car = location.state;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBooking = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      if (!user) {
        alert('Please login first');
        return;
      }

      const bookingData = {
        user: user._id,
        car: car._id,
        startDate,
        endDate,
        totalAmount: car.pricePerDay
      };

      await axios.post(
        'https://drivex-car-rental.onrender.com/api/bookings',
        bookingData
      );

      alert('Booking Successful');
    } catch (error) {
      console.error(error);
      alert('Booking Failed');
    }
  };

  return (
    <>
      <Navbar />

      <div className="booking-page">
        <div className="booking-card">
          <img src={car.image} alt={car.name} />

          <div className="booking-content">
            <h1>{car.name}</h1>

            <p>{car.brand}</p>

            <h2>₹{car.pricePerDay} / day</h2>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <button onClick={handleBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;