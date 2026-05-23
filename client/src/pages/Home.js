import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedCars from '../components/FeaturedCars';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Brands from '../components/Brands';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Categories />
      <Stats />
      <FeaturedCars />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;