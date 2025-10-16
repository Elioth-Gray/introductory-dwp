import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import BannerSection from '../components/home/BannerSection';
import PhoneNumberSection from '../components/home/PhoneNumberSection';
import CreditsListSection from '../components/home/CreditsListSection';
import PacketDataSection from '../components/home/PacketDataSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BannerSection />
      <PhoneNumberSection />
      <CreditsListSection />
      <PacketDataSection />
      <Footer />
    </>
  );
};

export default Home;
