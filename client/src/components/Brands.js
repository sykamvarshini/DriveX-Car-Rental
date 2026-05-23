const brands = [
  'BMW',
  'AUDI',
  'MERCEDES',
  'TESLA',
  'PORSCHE',
  'LAMBORGHINI'
];

const Brands = () => {
  return (
    <section className='brands-strip'>
      <p className='brands-title'>
        Trusted By Premium Automotive Brands
      </p>

      <div className='brands-row'>
        {brands.map((brand, index) => (
          <span key={index}>{brand}</span>
        ))}
      </div>
    </section>
  );
};

export default Brands;