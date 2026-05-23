const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h1>DriveX</h1>

          <p>
            Premium car rental platform providing luxury and affordable
            rides across multiple cities.
          </p>
        </div>

        <div className='footer-section'>
          <h2>Quick Links</h2>

          <a href='/'>Home</a>
          <a href='/cars'>Cars</a>
          <a href='/login'>Login</a>
          <a href='/register'>Register</a>
        </div>

        <div className='footer-section'>
          <h2>Services</h2>

          <p>Luxury Rentals</p>
          <p>Corporate Booking</p>
          <p>Airport Pickup</p>
          <p>Long Drive Packages</p>
        </div>

        <div className='footer-section'>
          <h2>Contact</h2>

          <p>Email: support@drivex.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Vijayawada, India</p>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2026 DriveX. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;