import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Collections from './pages/Collections';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import FAQ from './pages/FAQ';
import ShippingDelivery from './pages/ShippingDelivery';
import ReturnsExchange from './pages/ReturnsExchange';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/returns-exchange" element={<ReturnsExchange />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <SearchOverlay />
    </>
  );
}
