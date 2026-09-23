import { Link } from 'react-router-dom';
import { HeartIcon, StarIcon, WhatsappIcon } from './Icons';
import { useShop } from '../context/ShopContext';
import { productWhatsappLink } from '../data/whatsapp';
import './ProductCard.css';

export default function ProductCard({ product, showRating = false }) {
  const { wishlist, toggleWishlist } = useShop();
  const isWishlisted = wishlist.includes(product.id);
  const isComingSoon = product.comingSoon;

  return (
    <div className="product-card">
      <div className="product-card__media">
        <Link to={`/product/${product.slug}`} className="product-card__media-link">
          <img src={product.thumbnail} alt={product.name} loading="lazy" className="product-card__img product-card__img--main" />
          <img src={product.hoverThumbnail} alt="" loading="lazy" className="product-card__img product-card__img--alt" />
        </Link>

        {isComingSoon && <span className="product-card__tag product-card__tag--soon">Coming Soon</span>}
        {!isComingSoon && product.comparePrice && <span className="product-card__tag">Sale</span>}
        {!isComingSoon && product.newArrival && !product.comparePrice && <span className="product-card__tag product-card__tag--new">New</span>}

        <button
          className={`product-card__wishlist ${isWishlisted ? 'is-active' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          <HeartIcon filled={isWishlisted} width={17} height={17} />
        </button>

        <a
          href={productWhatsappLink(product)}
          target="_blank"
          rel="noreferrer"
          className="product-card__quickadd product-card__quickadd--whatsapp"
        >
          <WhatsappIcon width={14} height={14} /> Enquire
        </a>
      </div>

      <div className="product-card__info">
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
            {product.comparePrice && <s>₹{product.comparePrice.toLocaleString('en-IN')}</s>}
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
