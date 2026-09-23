import ProductCard from './ProductCard';
import Reveal from './Reveal';
import './ProductGrid.css';

export default function ProductGrid({ products, columns = 4 }) {
  return (
    <div className={`product-grid product-grid--${columns}`}>
      {products.map((product, i) => (
        <Reveal key={product.id} delay={(i % columns) * 90}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
