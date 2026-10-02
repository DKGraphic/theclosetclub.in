import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { ArrowRight } from '../components/Icons';
import { STOCK } from '../data/images';
import './Collections.css';

const COLLECTIONS = [
  { title: 'Short Kurtis', desc: 'Sleeveless and full-sleeve everyday kurtis, cut for comfort.', image: STOCK.categoryShortKurti, to: `/shop?category=${encodeURIComponent('Short Kurti')}` },
  { title: 'Skirts', desc: 'Flowy, hand block-printed skirts — our newest edit.', image: STOCK.categorySkirts, to: '/shop?category=Skirts' },
  { title: 'Festive Sets — Coming Soon', desc: 'Co-ord sets and 3 piece festive sets, landing soon.', image: STOCK.category3PieceSet, to: `/shop?category=${encodeURIComponent('3 Piece Set')}` },
];

export default function Collections() {
  return (
    <div className="collections-page">
      <div className="section container-fluid-tcc collections-page__head">
        <Reveal>
          <span className="eyebrow">Curated</span>
          <h1 className="section-title">Collections</h1>
          <p className="collections-page__desc">Everyday ethnic wear, organised the way you actually shop.</p>
        </Reveal>
      </div>

      <div className="collections-list">
        {COLLECTIONS.map((c, i) => (
          <Reveal key={c.title} className={`collection-row ${i % 2 === 1 ? 'collection-row--reverse' : ''}`}>
            <div className="collection-row__image">
              <img src={c.image} alt={c.title} loading="lazy" />
            </div>
            <div className="collection-row__copy">
              <h2>{c.title}</h2>
              <p>{c.desc}</p>
              <Link to={c.to} className="btn-tcc-outline">Explore Collection <ArrowRight width={16} height={16} /></Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
