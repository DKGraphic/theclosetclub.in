import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { CloseIcon, SearchIcon } from './Icons';
import { products } from '../data/products';
import './SearchOverlay.css';

const TRENDING = ['Linen Shirts', 'Denim', 'Wide-Leg Trousers', 'Slip Dresses', 'Cargo Pants'];

export default function SearchOverlay() {
  const { isSearchOpen, setSearchOpen } = useShop();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isSearchOpen) setQuery('');
  }, [isSearchOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSearchOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setSearchOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  return (
    <div className={`search-overlay ${isSearchOpen ? 'search-overlay--open' : ''}`}>
      <button className="search-overlay__close" onClick={() => setSearchOpen(false)} aria-label="Close search">
        <CloseIcon width={26} height={26} />
      </button>

      <div className="search-overlay__inner container-fluid-tcc">
        <div className="search-overlay__field">
          <SearchIcon width={28} height={28} />
          <input
            type="text"
            autoFocus={isSearchOpen}
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {query.trim() === '' ? (
          <div className="search-overlay__trending">
            <span className="eyebrow-light">Trending Searches</span>
            <div className="search-overlay__chips">
              {TRENDING.map((t) => (
                <button key={t} onClick={() => setQuery(t)}>{t}</button>
              ))}
            </div>
          </div>
        ) : (
          <div className="search-overlay__results">
            {results.length === 0 ? (
              <p className="search-overlay__empty">No results for &ldquo;{query}&rdquo;</p>
            ) : (
              results.map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} onClick={() => setSearchOpen(false)} className="search-result">
                  <img src={p.thumbnail} alt={p.name} />
                  <div>
                    <span className="search-result__name">{p.name}</span>
                    <span className="search-result__price">₹{p.price.toLocaleString('en-IN')}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
