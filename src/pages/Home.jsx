import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import NewArrivals from '../components/NewArrivals';
import EditorialSection from '../components/EditorialSection';
import ShopByCategory from '../components/ShopByCategory';
import Bestsellers from '../components/Bestsellers';
import CampaignBanner from '../components/CampaignBanner';
import InstagramGrid from '../components/InstagramGrid';
import Reviews from '../components/Reviews';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <NewArrivals />
      <EditorialSection />
      <ShopByCategory />
      <Bestsellers />
      <CampaignBanner />
      <InstagramGrid />
      <Reviews />
      <Newsletter />
    </>
  );
}
