import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cars from './pages/Cars';
import Booking from './pages/Booking';
import MyBookings from './pages/MyBookings';
import AdminDashboard from './pages/AdminDashboard';
import AddCar from './pages/AddCar';
import CarDetails from './pages/CarDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/add-car' element={<AddCar />} />
        <Route path='/car-details' element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;