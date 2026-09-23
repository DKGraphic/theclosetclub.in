import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section container-fluid-tcc text-center">
      <span className="serif" style={{ fontSize: '5rem', color: 'var(--brand-purple)' }}>404</span>
      <h1 className="section-title mb-3">Page Not Found</h1>
      <p style={{ color: 'var(--grey)', marginBottom: '2rem' }}>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link to="/" className="btn-tcc">Back To Home</Link>
    </div>
  );
}
