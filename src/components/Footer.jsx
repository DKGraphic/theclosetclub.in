import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { InstagramIcon, WhatsappIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tcc-footer">
      <div className="container-fluid-tcc tcc-footer__top">
        <div className="tcc-footer__brand">
          <div className="tcc-footer__logo-chip">
            <img src={logo} alt="The Closet Club" className="tcc-footer__logo" />
          </div>
          <p>
            An Instagram-born fashion label turned everyday wardrobe staple. Contemporary
            pieces designed for your own statement.
          </p>
          <div className="tcc-footer__social">
            <a href="https://www.instagram.com/theclosetclub.in" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/919444131591" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsappIcon />
            </a>
          </div>
        </div>

        <div className="tcc-footer__col">
          <h4>Shop</h4>
          <Link to="/shop?filter=new">New In</Link>
          <Link to="/shop?filter=bestsellers">Bestsellers</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="tcc-footer__col">
          <h4>Customer Care</h4>
          <Link to="/shipping-delivery">Shipping &amp; Delivery</Link>
          <Link to="/returns-exchange">Returns &amp; Exchange</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>

        <div className="tcc-footer__col">
          <h4>Get In Touch</h4>
          <a href="tel:+919444131591">+91 94441 31591</a>
          <a href="https://www.instagram.com/theclosetclub.in" target="_blank" rel="noreferrer">@theclosetclub.in</a>
        </div>
      </div>

      <div className="container-fluid-tcc tcc-footer__bottom">
        <span>© {year} The Closet Club Clothing Co. All rights reserved.</span>
        <span>Designed for the everyday statement.</span>
      </div>
    </footer>
  );
}
