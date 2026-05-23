import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CarDetails = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const car = location.state;

  return (
    <>
      <Navbar />

      <div className='details-page'>
        <div className='details-container'>
          <div className='details-image'>
            <img src={car.image} alt={car.name} />
          </div>

          <div className='details-content'>
            <h1>{car.name}</h1>

            <p className='brand'>
              {car.brand}
            </p>

            <h2>
              ₹{car.pricePerDay} / day
            </h2>

            <div className='specs'>
              <div>
                <span>Transmission</span>
                <p>{car.transmission}</p>
              </div>

              <div>
                <span>Fuel Type</span>
                <p>{car.fuelType}</p>
              </div>

              <div>
                <span>Seats</span>
                <p>{car.seats}</p>
              </div>

              <div>
                <span>Year</span>
                <p>{car.year}</p>
              </div>
            </div>

            <button
              onClick={() =>
                navigate('/booking', {
                  state: car
                })
              }
            >
              Book This Car
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;