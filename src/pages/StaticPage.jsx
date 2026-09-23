export default function StaticPage({ title, children }) {
  return (
    <div className="section container-fluid-tcc static-page">
      <span className="eyebrow">The Closet Club</span>
      <h1 className="section-title mb-4">{title}</h1>
      <div className="static-page__body">{children}</div>
    </div>
  );
}
