import { UserIcon } from '../components/Icons';

export default function Account() {
  return (
    <div className="section container-fluid-tcc text-center">
      <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
        <UserIcon width={26} height={26} />
      </div>
      <span className="eyebrow">Account</span>
      <h1 className="section-title mb-3">Sign In To The Club</h1>
      <p style={{ color: 'var(--grey)', maxWidth: 420, margin: '0 auto 2rem' }}>
        Account sign-in is coming soon. In the meantime, reach us on WhatsApp for order support.
      </p>
      <a href="https://wa.me/919444131591" target="_blank" rel="noreferrer" className="btn-tcc">Message Us On WhatsApp</a>
    </div>
  );
}
