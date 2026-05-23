import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const AddCar = () => {
  const [carData, setCarData] = useState({
    name: '',
    brand: '',
    model: '',
    year: '',
    pricePerDay: '',
    transmission: '',
    fuelType: '',
    seats: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:5000/api/cars',
        carData
      );

      alert('Car Added Successfully');
    } catch (error) {
      console.log(error);
      alert('Failed To Add Car');
    }
  };

  return (
    <>
      <Navbar />

      <div className='addcar-page'>
        <form className='addcar-form' onSubmit={handleSubmit}>
          <h1>Add New Car</h1>

          <input
            type='text'
            name='name'
            placeholder='Car Name'
            onChange={handleChange}
          />

          <input
            type='text'
            name='brand'
            placeholder='Brand'
            onChange={handleChange}
          />

          <input
            type='text'
            name='model'
            placeholder='Model'
            onChange={handleChange}
          />

          <input
            type='number'
            name='year'
            placeholder='Year'
            onChange={handleChange}
          />

          <input
            type='number'
            name='pricePerDay'
            placeholder='Price Per Day'
            onChange={handleChange}
          />

          <input
            type='text'
            name='transmission'
            placeholder='Transmission'
            onChange={handleChange}
          />

          <input
            type='text'
            name='fuelType'
            placeholder='Fuel Type'
            onChange={handleChange}
          />

          <input
            type='number'
            name='seats'
            placeholder='Seats'
            onChange={handleChange}
          />
            <input
                type='text'
                name='category'
                placeholder='Category'
                onChange={handleChange}
            />
          <input
            type='text'
            name='image'
            placeholder='Image URL'
            onChange={handleChange}
          />

          <button type='submit'>
            Add Car
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCar;