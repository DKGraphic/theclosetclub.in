import { Link } from 'react-router-dom';
import { HeartIcon, StarIcon, ArrowRight } from './Icons';
import { useShop } from '../context/ShopContext';
import './ProductCard.css';

export default function ProductCard({ product, showRating = false }) {
  const { wishlist, toggleWishlist } = useShop();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="product-card">
      <div className="product-card__media">
        <Link to={`/product/${product.slug}`} className="product-card__media-link">
          <img src={product.thumbnail} alt={product.name} loading="lazy" className="product-card__img product-card__img--main" />
          <img src={product.hoverThumbnail} alt="" loading="lazy" className="product-card__img product-card__img--alt" />
        </Link>

        {product.newArrival && <span className="product-card__tag product-card__tag--new">New</span>}

        <button
          className={`product-card__wishlist ${isWishlisted ? 'is-active' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          <HeartIcon filled={isWishlisted} width={17} height={17} />
        </button>

        <Link to={`/product/${product.slug}`} className="product-card__quickadd">
          View Product <ArrowRight width={13} height={13} />
        </Link>
      </div>

      <div className="product-card__info">
        <span className="product-card__category">{product.category}</span>
        <div className="product-card__row">
          <Link to={`/product/${product.slug}`} className="product-card__name">{product.name}</Link>
          <div className="product-card__colors">
            {product.colors.map(([name, hex]) => (
              <span key={name} className="product-card__dot" style={{ background: hex }} title={name} />
            ))}
          </div>
        </div>
        <div className="product-card__row">
          <div className="product-card__price">
            <span>₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          {showRating && (
            <div className="product-card__rating">
              <StarIcon />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
