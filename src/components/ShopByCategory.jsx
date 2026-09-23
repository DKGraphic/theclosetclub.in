import CategoryCard from './CategoryCard';
import Reveal from './Reveal';
import { IMG } from '../data/images';
import './ShopByCategory.css';

const CATS = [
  { title: 'Short Kurtis', image: IMG.categoryShortKurtis, to: `/shop?category=${encodeURIComponent('Short Kurtis')}` },
  { title: 'Long Kurtis', image: IMG.categoryLongKurtis, to: `/shop?category=${encodeURIComponent('Long Kurtis')}` },
  { title: 'Skirts', image: IMG.categorySkirts, to: '/shop?category=Skirts', badge: 'Coming Soon' },
];

export default function ShopByCategory() {
  return (
    <section className="section container-fluid-tcc">
      <Reveal className="text-center mb-4 mb-md-5">
        <span className="eyebrow">Explore</span>
        <h2 className="section-title section-title--center">Shop By Category</h2>
      </Reveal>
      <div className="cat-grid cat-grid--3">
        {CATS.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 80}>
            <CategoryCard {...cat} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
