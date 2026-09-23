import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';

export default function Wishlist() {
  const { wishlist } = useShop();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="section container-fluid-tcc">
      <span className="eyebrow">Saved</span>
      <h1 className="section-title mb-5">Your Wishlist</h1>

      {items.length === 0 ? (
        <div className="text-center py-5">
          <p style={{ color: 'var(--grey)', marginBottom: '1.5rem' }}>Nothing saved yet — tap the heart on any product to add it here.</p>
          <Link to="/shop" className="btn-tcc">Browse Shop</Link>
        </div>
      ) : (
        <ProductGrid products={items} columns={4} />
      )}
    </div>
  );
}
