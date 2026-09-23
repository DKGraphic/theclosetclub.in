import Reveal from './Reveal';
import { StarIcon } from './Icons';
import './Reviews.css';

const TESTIMONIALS = [
  { quote: 'Obsessed with the fit and print quality. Every kurti feels intentional.', name: 'Ananya R.' },
  { quote: 'Finally a brand that gets everyday Indian ethnic wear right. Repeat customer for life.', name: 'Priya K.' },
  { quote: 'The fabric, the stitching, the packaging — everything feels premium for the price.', name: 'Meera S.' },
];

const initials = (name) => name.split(' ').map((w) => w[0]).join('');

export default function Reviews() {
  return (
    <section className="section container-fluid-tcc">
      <Reveal className="text-center mb-4 mb-md-5">
        <span className="eyebrow">Word On The Street</span>
        <h2 className="section-title section-title--center">Loved By The Club</h2>
      </Reveal>

      <div className="reviews-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="review-card">
            <div className="review-card__stars">
              {Array.from({ length: 5 }).map((_, idx) => <StarIcon key={idx} />)}
            </div>
            <p className="review-card__quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="review-card__author">
              <span className="review-card__avatar">{initials(t.name)}</span>
              <div>
                <strong>{t.name}</strong>
                <span>Verified Customer</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
