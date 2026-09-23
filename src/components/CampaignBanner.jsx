import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { IMG } from '../data/images';
import './CampaignBanner.css';

export default function CampaignBanner() {
  return (
    <section className="campaign">
      <img src={IMG.campaign} alt="Wear your own story campaign" loading="lazy" className="campaign__img" />
      <div className="campaign__scrim" />
      <div className="campaign__content">
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--off-white)' }}>The Latest Closet Club Collection</span>
          <h2 className="campaign__title">Wear Your<br />Own Story.</h2>
          <Link to="/collections" className="btn-tcc-light">Shop The Edit</Link>
        </Reveal>
      </div>
    </section>
  );
}
