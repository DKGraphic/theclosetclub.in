import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { ArrowRight } from './Icons';
import { IMG } from '../data/images';
import './EditorialSection.css';

export default function EditorialSection() {
  return (
    <section className="section editorial">
      <div className="container-fluid-tcc editorial__grid">
        <Reveal className="editorial__image editorial__image--main">
          <img src={IMG.editorialLeft} alt="The Everyday Edit collection" loading="lazy" />
        </Reveal>

        <div className="editorial__copy">
          <Reveal delay={100}>
            <span className="eyebrow">Editor&apos;s Pick</span>
            <h2 className="editorial__title">The Everyday<br /><span className="serif">Edit</span></h2>
            <p className="editorial__text">
              Pieces built around movement, layering and quiet confidence — the wardrobe you
              reach for on repeat. Considered fabrics, relaxed silhouettes, no noise.
            </p>
            <Link to="/collections" className="btn-tcc-outline">
              Explore Collection <ArrowRight width={16} height={16} />
            </Link>
          </Reveal>

          <div className="editorial__thumbs">
            <Reveal delay={200} className="editorial__thumb">
              <img src={IMG.editorialRight1} alt="" loading="lazy" />
            </Reveal>
            <Reveal delay={300} className="editorial__thumb">
              <img src={IMG.editorialRight2} alt="" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
