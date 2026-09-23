import { Link } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import Reveal from './Reveal';
import { ArrowRight } from './Icons';
import { products } from '../data/products';

export default function NewArrivals() {
  const newIn = products.filter((p) => p.newArrival).slice(0, 8);

  return (
    <section className="section container-fluid-tcc">
      <Reveal className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4 mb-md-5">
        <div>
          <span className="eyebrow">New In</span>
          <h2 className="section-title">Fresh pieces. Just dropped.</h2>
        </div>
        <Link to="/shop?filter=new" className="link-underline d-none d-md-inline-flex align-items-center gap-2">
          View All <ArrowRight width={14} height={14} />
        </Link>
      </Reveal>

      <ProductGrid products={newIn} columns={4} />

      <div className="text-center mt-5 d-md-none">
        <Link to="/shop?filter=new" className="btn-tcc-outline">View All</Link>
      </div>
    </section>
  );
}
