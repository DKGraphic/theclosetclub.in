import CategoryCard from './CategoryCard';
import Reveal from './Reveal';
import { STOCK } from '../data/images';
import './ShopByCategory.css';

const CATS = [
  { title: 'Sleeveless Short Kurti', image: STOCK.categorySleevelessShortKurti, to: `/shop?category=${encodeURIComponent('Sleeveless Short Kurti')}` },
  { title: 'Short Kurti', image: STOCK.categoryShortKurti, to: `/shop?category=${encodeURIComponent('Short Kurti')}` },
  { title: 'Frocks', image: STOCK.categoryFrocks, to: '/shop?category=Frocks', badge: 'Coming Soon' },
  { title: 'Long Kurtis', image: STOCK.categoryLongKurtis, to: `/shop?category=${encodeURIComponent('Long Kurtis')}`, badge: 'Coming Soon' },
  { title: 'Skirts', image: STOCK.categorySkirts, to: '/shop?category=Skirts' },
  { title: 'Co-Ord Set', image: STOCK.categoryCoOrdSet, to: `/shop?category=${encodeURIComponent('Co-Ord Set')}`, badge: 'Coming Soon' },
  { title: '3 Piece Set', image: STOCK.category3PieceSet, to: `/shop?category=${encodeURIComponent('3 Piece Set')}`, badge: 'Coming Soon' },
];

export default function ShopByCategory() {
  return (
    <section className="section container-fluid-tcc">
      <Reveal className="text-center mb-4 mb-md-5">
        <span className="eyebrow">Explore</span>
        <h2 className="section-title section-title--center">Shop By Category</h2>
      </Reveal>
      <div className="cat-grid cat-grid--7">
        {CATS.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 60}>
            <CategoryCard {...cat} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
