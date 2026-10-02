import Reveal from './Reveal';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_FEED } from '../data/images';
import './InstagramGrid.css';

export default function InstagramGrid() {
  return (
    <section className="section container-fluid-tcc">
      <Reveal className="text-center mb-4 mb-md-5">
        <span className="eyebrow">Follow The Club</span>
        <h2 className="section-title section-title--center">@theclosetclub.in</h2>
      </Reveal>

      <div className="insta-grid">
        {INSTAGRAM_FEED.map((src, i) => (
          <Reveal key={src} delay={i * 60}>
            <a
              href="https://www.instagram.com/theclosetclub.in"
              target="_blank"
              rel="noreferrer"
              className="insta-item"
            >
              <img src={src} alt="Closet Club on Instagram" loading="lazy" />
              <div className="insta-item__scrim">
                <InstagramIcon width={26} height={26} style={{ color: '#fff' }} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-4 mt-md-5">
        <a href="https://www.instagram.com/theclosetclub.in" target="_blank" rel="noreferrer" className="btn-tcc-outline">
          Follow Us On Instagram
        </a>
      </div>
    </section>
  );
}
