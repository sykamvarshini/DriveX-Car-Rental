import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  let user = null;

  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (err) {
    user = null;
  }

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav>
      <h1>DriveX</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/my-bookings">Bookings</Link>
        <Link to="/admin">Admin</Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <div className="profile-menu">
            <div className="profile-avatar">
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>

            <div className="profile-dropdown">
              <p>{user?.name || "User"}</p>
              <p>{user?.email || ""}</p>

              <button onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;