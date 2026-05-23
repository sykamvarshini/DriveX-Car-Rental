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
      const { data } = await axios.get(
        'http://localhost:5000/api/bookings'
      );

      setBookings(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className='bookings-page'>
        <h1>My Bookings</h1>

        <div className='bookings-grid'>
          {bookings.map((booking) => (
            <div className='booking-box' key={booking._id}>
              <img
                src={booking.car?.image}
                alt={booking.car?.name}
              />

              <div className='booking-info'>
                <h2>{booking.car?.name}</h2>

                <p>{booking.car?.brand}</p>

                <h3>₹{booking.totalAmount}</h3>

                <span>
                  {new Date(
                    booking.startDate
                  ).toLocaleDateString()}
                </span>

                <span>
                  {new Date(
                    booking.endDate
                  ).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBookings;