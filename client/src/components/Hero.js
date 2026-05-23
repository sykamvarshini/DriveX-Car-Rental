import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='hero'>
      <div className='overlay'>
        <div className='hero-content'>
          <h1>DriveX</h1>

          <p>
            Premium car rental platform for luxury and affordable rides.
          </p>

          <div className='buttons'>
            <button
              className='primary-btn'
              onClick={() => navigate('/cars')}
            >
              Explore Cars
            </button>

            <button
              className='secondary-btn'
              onClick={() => {
                const user = localStorage.getItem('user');

                if (user) {
                  navigate('/cars');
                } else {
                  navigate('/register');
                }
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;