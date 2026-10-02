import Reveal from '../components/Reveal';
import { STOCK } from '../data/images';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <img src={STOCK.editorialMain} alt="The Closet Club" />
        <div className="about-hero__scrim" />
        <div className="about-hero__content">
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--off-white)' }}>Our Story</span>
            <h1>Born On Instagram.<br />Built For Everyday.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section container-fluid-tcc about-body">
        <Reveal className="about-body__text">
          <p className="serif about-body__lead">
            The Closet Club started as a small Instagram page for people who wanted more from
            their wardrobe — pieces with intention, not just inventory.
          </p>
          <p>
            What began as drops shared with a close community has grown into a full clothing
            label, but the philosophy hasn&apos;t changed: design pieces you&apos;ll actually
            reach for, cut them to move with you, and never chase trends just to chase them.
          </p>
          <p>
            Every collection is designed in-house, sampled carefully and released in limited
            drops — because we&apos;d rather make less, better.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
