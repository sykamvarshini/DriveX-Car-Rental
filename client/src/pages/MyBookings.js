import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      const { data } = await axios.get(
        'https://drivex-car-rental.onrender.com/api/bookings'
      );

      const myBookings = data.filter(
        (booking) => booking.user?._id === user?._id
      );

      setBookings(myBookings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bookings-page">
        <h1>My Bookings</h1>

        <div className="bookings-grid">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div className="booking-box" key={booking._id}>
                <img
                  src={booking.car?.image}
                  alt={booking.car?.name}
                />

                <div className="booking-info">
                  <h2>{booking.car?.name}</h2>

                  <p>{booking.car?.brand}</p>

                  <h3>₹{booking.totalAmount}</h3>

                  <p>
                    <strong>From:</strong>{' '}
                    {new Date(
                      booking.startDate
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    <strong>To:</strong>{' '}
                    {new Date(
                      booking.endDate
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h2 style={{ textAlign: 'center' }}>
              No Bookings Found
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default MyBookings;