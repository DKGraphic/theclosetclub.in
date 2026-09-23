import { Link } from 'react-router-dom';
import './CategoryCard.css';

export default function CategoryCard({ title, image, to, badge }) {
  return (
    <Link to={to} className="cat-card">
      <img src={image} alt={title} loading="lazy" />
      <div className="cat-card__scrim" />
      {badge && <span className="cat-card__badge">{badge}</span>}
      <span className="cat-card__title">{title}</span>
    </Link>
  );
}
