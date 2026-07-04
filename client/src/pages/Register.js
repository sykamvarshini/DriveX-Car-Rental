import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://drivex-car-rental.onrender.com/api/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert('Registration Successful');

      navigate('/login');
    } catch (error) {
      alert('Registration Failed');
    }
  };

  return (
    <div className='auth-container'>
      <form className='auth-form' onSubmit={handleSubmit}>
        <h1>Register</h1>

        <input
          type='text'
          placeholder='Enter Name'
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='email'
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;