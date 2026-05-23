import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <div className='admin-page'>
        <h1>Admin Dashboard</h1>

        <div className='admin-cards'>
          <div className='admin-card'>
            <h2>Total Cars</h2>
            <p>120</p>
          </div>

          <div className='admin-card'>
            <h2>Total Bookings</h2>
            <p>340</p>
          </div>

          <div className='admin-card'>
            <h2>Total Users</h2>
            <p>220</p>
          </div>

          <div className='admin-card'>
            <h2>Revenue</h2>
            <p>₹8.5L</p>
          </div>

          <div className='admin-btn-container'>
            <a href='/add-car'>
            <button>Add New Car</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;