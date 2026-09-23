import ProductCarousel from './ProductCarousel';
import Reveal from './Reveal';
import { products } from '../data/products';

export default function Bestsellers() {
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <section className="section container-fluid-tcc" style={{ background: '#f0ede7' }}>
      <Reveal className="text-center mb-4 mb-md-5">
        <span className="eyebrow">Most Loved</span>
        <h2 className="section-title section-title--center">Bestsellers</h2>
      </Reveal>
      <ProductCarousel products={bestSellers} />
    </section>
  );
}
