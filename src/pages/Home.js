import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import HomeProducts from '../components/HomeProducts';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <HomeProducts />
      <Newsletter />
      <Footer />
    </>
  );
}
