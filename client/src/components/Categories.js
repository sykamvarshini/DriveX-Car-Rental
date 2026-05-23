import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: 'Luxury',
    icon: '🏎️'
  },
  {
    title: 'SUV',
    icon: '🚙'
  },
  {
    title: 'Sports',
    icon: '🔥'
  },
  {
    title: 'Electric',
    icon: '⚡'
  },
  {
    title: 'Economy',
    icon: '🚗'
  }
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className='categories-section'>
      <div className='section-header'>
        <h1>Browse By Category</h1>

        <p>
          Choose the perfect vehicle for every journey.
        </p>
      </div>

      <div className='categories-grid'>
        {categories.map((item, index) => (
          <div
            className='category-card'
            key={index}
            onClick={() =>
              navigate('/cars', {
                state: {
                  category: item.title
                }
              })
            }
          >
            <div className='category-icon'>
              {item.icon}
            </div>

            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;