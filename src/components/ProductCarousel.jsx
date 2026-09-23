import { useRef } from 'react';
import ProductCard from './ProductCard';
import Reveal from './Reveal';
import { ChevronRight } from './Icons';
import './ProductCarousel.css';

export default function ProductCarousel({ products }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.carousel__item')?.offsetWidth || 300;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      <div className="carousel__track hide-scrollbar" ref={trackRef}>
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 60} className="carousel__item">
            <ProductCard product={product} showRating />
          </Reveal>
        ))}
      </div>
      <div className="carousel__nav d-none d-md-flex">
        <button onClick={() => scroll(-1)} aria-label="Previous"><ChevronRight style={{ transform: 'rotate(180deg)' }} /></button>
        <button onClick={() => scroll(1)} aria-label="Next"><ChevronRight /></button>
      </div>
    </div>
  );
}
