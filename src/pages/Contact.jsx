import { useState } from 'react';
import { InstagramIcon, WhatsappIcon, ArrowRight } from '../components/Icons';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="section container-fluid-tcc contact-page">
      <span className="eyebrow">Get In Touch</span>
      <h1 className="section-title mb-5">We&apos;d Love To Hear From You</h1>

      <div className="contact-page__layout">
        <div className="contact-page__info">
          <div className="contact-page__block">
            <h4>Call / WhatsApp</h4>
            <a href="tel:+919444131591">+91 94441 31591</a>
          </div>
          <div className="contact-page__block">
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/theclosetclub.in" target="_blank" rel="noreferrer">@theclosetclub.in</a>
          </div>
          <div className="contact-page__socials">
            <a href="https://www.instagram.com/theclosetclub.in" target="_blank" rel="noreferrer" className="tcc-icon-btn" style={{ border: '1px solid var(--border)', borderRadius: '50%' }}>
              <InstagramIcon />
            </a>
            <a href="https://wa.me/919444131591" target="_blank" rel="noreferrer" className="tcc-icon-btn" style={{ border: '1px solid var(--border)', borderRadius: '50%' }}>
              <WhatsappIcon />
            </a>
          </div>
        </div>

        <form className="contact-page__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <p className="contact-page__success">Thanks for reaching out — we&apos;ll get back to you shortly.</p>
          ) : (
            <>
              <label>Name<input required type="text" placeholder="Your name" /></label>
              <label>Email<input required type="email" placeholder="you@example.com" /></label>
              <label>Message<textarea required rows={5} placeholder="How can we help?" /></label>
              <button type="submit" className="btn-tcc">Send Message <ArrowRight width={16} height={16} /></button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
