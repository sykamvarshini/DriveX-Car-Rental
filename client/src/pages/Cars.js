import { useEffect, useState } from 'react';
import {
  useNavigate,
  useLocation
} from 'react-router-dom';

import axios from 'axios';
import Navbar from '../components/Navbar';

const Cars = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCars, setFilteredCars] =
    useState([]);

  const selectedCategory =
    location.state?.category;

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const { data } = await axios.get(
        'http://localhost:5000/api/cars'
      );

      setCars(data);
      setFilteredCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let filtered = cars.filter((car) =>
      car.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    if (selectedCategory) {
      filtered = filtered.filter(
        (car) =>
          car.category
            ?.toLowerCase()
            .trim() ===
          selectedCategory
            .toLowerCase()
            .trim()
      );
    }

    setFilteredCars(filtered);
  }, [search, cars, selectedCategory]);

  return (
    <>
      <Navbar />

      <div className='cars-page'>
        <h1 className='cars-title'>
          Available Cars
        </h1>

        {selectedCategory && (
          <p
            style={{
              textAlign: 'center',
              marginBottom: '30px',
              color: '#3b82f6',
              fontSize: '20px'
            }}
          >
            Showing {selectedCategory} Cars
          </p>
        )}

        <div className='search-box'>
          <input
            type='text'
            placeholder='Search cars...'
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className='cars-grid'>
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                className='car-card'
                key={car._id}
              >
                <img
                  src={car.image}
                  alt={car.name}
                />

                <div className='car-content'>
                  <h2>{car.name}</h2>

                  <p>{car.brand}</p>

                  <h3>
                    ₹{car.pricePerDay} / day
                  </h3>

                  <button
                    onClick={() =>
                      navigate('/booking', {
                        state: car
                      })
                    }
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2
              style={{
                textAlign: 'center',
                width: '100%',
                marginTop: '50px',
                color: '#94a3b8'
              }}
            >
              No cars found
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Cars;