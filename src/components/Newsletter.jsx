import { useState } from 'react';
import Reveal from './Reveal';
import { ArrowRight } from './Icons';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="container-fluid-tcc">
        <Reveal className="newsletter__inner">
          <h2 className="newsletter__title">Join The Club.</h2>
          <p className="newsletter__text">
            Get first access to new drops, exclusive edits and special offers.
          </p>
          {submitted ? (
            <p className="newsletter__success">You&apos;re in. Welcome to the club ✦</p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-tcc-light">
                Join <ArrowRight width={16} height={16} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
