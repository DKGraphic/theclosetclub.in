import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';
import { STOCK } from '../data/images';
import './Hero.css';

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero__content">
        <div className={`hero__reveal ${loaded ? 'hero__reveal--in' : ''}`}>
          <span className="eyebrow">The Latest Drop</span>
        </div>
        <h1 className="hero__headline">
          <span className={`hero__line ${loaded ? 'hero__line--in' : ''}`} style={{ transitionDelay: '80ms' }}>Dress</span>
          <span className={`hero__line ${loaded ? 'hero__line--in' : ''}`} style={{ transitionDelay: '180ms' }}>Outside</span>
          <span className={`hero__line hero__line--accent ${loaded ? 'hero__line--in' : ''}`} style={{ transitionDelay: '280ms' }}>The Ordinary.</span>
        </h1>
        <div className={`hero__reveal ${loaded ? 'hero__reveal--in' : ''}`} style={{ transitionDelay: '380ms' }}>
          <p className="hero__sub">Contemporary pieces designed for your everyday statement.</p>
          <div className="hero__cta">
            <Link to="/shop?filter=new" className="btn-tcc">
              Shop New In <ArrowRight width={16} height={16} />
            </Link>
            <Link to="/collections" className="link-underline hero__secondary">
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__media">
        <img
          src={STOCK.hero}
          alt="The Closet Club latest drop"
          onLoad={() => setLoaded(true)}
          style={{ transform: `translateY(${offset}px) scale(1.06)` }}
          className={loaded ? 'is-loaded' : ''}
        />
      </div>
    </section>
  );
}
