import NavBar from '../component/NavBar';
import Hero from '../component/Hero';
import Footer from '../component/Footer';
import FAQ from '../component/FAQ';
import Optimize from '../component/Optimize';
import Url from '../component/Url';
import Price from '../component/Price';
import WhyUs from '../component/WhyUs';


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <WhyUs/>
      <Price />
      <Url/>
      <FAQ/>
      <Optimize/>
      <Footer />
    </>
  );
};

export default Home;