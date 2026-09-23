import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { SearchIcon, UserIcon, HeartIcon, WhatsappIcon, MenuIcon } from './Icons';
import { generalWhatsappLink } from '../data/whatsapp';
import logo from '../assets/logo.png';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const LINKS = [
  { to: '/shop?filter=new', label: 'New In' },
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/shop?filter=bestsellers', label: 'Bestsellers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { wishlist, setSearchOpen } = useShop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`tcc-nav ${scrolled ? 'tcc-nav--scrolled' : ''}`}>
        <div className="tcc-nav__inner">
          <Link to="/" className="tcc-nav__logo" aria-label="The Closet Club home">
            <img src={logo} alt="The Closet Club" />
          </Link>

          <nav className="tcc-nav__links d-none d-lg-flex">
            {LINKS.map((link) => (
              <NavLink key={link.label} to={link.to} className="tcc-nav__link">
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="tcc-nav__actions">
            <button className="tcc-icon-btn d-none d-md-inline-flex" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <SearchIcon />
            </button>
            <button className="tcc-icon-btn d-none d-md-inline-flex" aria-label="Account">
              <UserIcon />
            </button>
            <Link to="/wishlist" className="tcc-icon-btn d-none d-md-inline-flex" aria-label="Wishlist">
              <HeartIcon />
              {wishlist.length > 0 && <span className="tcc-badge">{wishlist.length}</span>}
            </Link>
            <button className="tcc-icon-btn d-md-none" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <SearchIcon />
            </button>
            <a href={generalWhatsappLink()} target="_blank" rel="noreferrer" className="tcc-icon-btn tcc-icon-btn--whatsapp" aria-label="Enquire on WhatsApp">
              <WhatsappIcon />
            </a>
            <button className="tcc-icon-btn d-lg-none" aria-label="Menu" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={LINKS} />
    </>
  );
}
