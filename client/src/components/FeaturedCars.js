import { useNavigate } from 'react-router-dom';

const featuredCars = [
  {
    id: 1,
    name: 'BMW X5',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    price: '₹6000/day',

    brand: 'BMW',
    category: 'Luxury',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 7,
    year: 2024,
    pricePerDay: 6000
  },

  {
    id: 2,
    name: 'Audi A6',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a',
    price: '₹5500/day',
    category: 'Luxury',
    brand: 'Audi',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 5,
    year: 2023,
    pricePerDay: 5500
  },

  {
    id: 3,
    name: 'Porsche 911',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
    price: '₹12000/day',

    brand: 'Porsche',
    category: 'Sports',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 2,
    year: 2024,
    pricePerDay: 12000
  }
];

const FeaturedCars = () => {
  const navigate = useNavigate();

  return (
    <section className='featured-section'>
      <h1>Featured Cars</h1>

      <div className='featured-grid'>
        {featuredCars.map((car) => (
          <div className='featured-card' key={car.id}>
            <img src={car.image} alt={car.name} />

            <div className='featured-content'>
              <h2>{car.name}</h2>

              <p>{car.price}</p>

              <button
                onClick={() =>
                  navigate('/car-details', {
                    state: car
                  })
                }
              >
                Explore Vehicle
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;