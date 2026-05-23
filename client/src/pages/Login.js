import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password
        }
      );

      localStorage.setItem('token', data.token);
      
      localStorage.setItem(
        'user',
        JSON.stringify(data.user)
      );

      alert('Login Successful');

      navigate('/');
    } catch (error) {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className='auth-container'>
      <form className='auth-form' onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;