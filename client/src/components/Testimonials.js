const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    review:
      'Amazing experience! The cars were clean and the booking process was seamless.'
  },
  {
    id: 2,
    name: 'Priya Verma',
    review:
      'DriveX gave me the best luxury car rental experience at affordable pricing.'
  },
  {
    id: 3,
    name: 'Arjun Reddy',
    review:
      'Professional service, smooth booking, and premium quality vehicles.'
  }
];

const Testimonials = () => {
  return (
    <section className='testimonial-section'>
      <h1>What Our Customers Say</h1>

      <div className='testimonial-grid'>
        {testimonials.map((item) => (
          <div className='testimonial-card' key={item.id}>
            <p>"{item.review}"</p>

            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;