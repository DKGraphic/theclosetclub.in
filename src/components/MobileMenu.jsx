import { Link } from 'react-router-dom';
import { CloseIcon, InstagramIcon, WhatsappIcon } from './Icons';
import { generalWhatsappLink } from '../data/whatsapp';
import './MobileMenu.css';

export default function MobileMenu({ open, onClose, links }) {
  return (
    <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
      <div className="mobile-menu__backdrop" onClick={onClose} />
      <div className="mobile-menu__panel">
        <div className="mobile-menu__header">
          <span className="eyebrow-light">Menu</span>
          <button className="tcc-icon-btn" onClick={onClose} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
        <nav className="mobile-menu__links">
          {links.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={onClose}
              className="mobile-menu__link"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/account" onClick={onClose} className="mobile-menu__link mobile-menu__link--sub">Account</Link>
          <Link to="/wishlist" onClick={onClose} className="mobile-menu__link mobile-menu__link--sub">Wishlist</Link>
        </nav>
        <div className="mobile-menu__footer">
          <a href="https://www.instagram.com/theclosetclub.in" target="_blank" rel="noreferrer" className="tcc-icon-btn">
            <InstagramIcon />
          </a>
          <a href={generalWhatsappLink()} target="_blank" rel="noreferrer" className="tcc-icon-btn">
            <WhatsappIcon />
          </a>
          <span className="mobile-menu__phone">+91 94441 31591</span>
        </div>
      </div>
    </div>
  );
}
