import './Marquee.css';

const ITEMS = ['THE CLOSET CLUB', 'NEW DROP', 'EVERYDAY STATEMENT', 'YOUR STYLE YOUR RULES'];

export default function Marquee() {
  const content = (
    <>
      {ITEMS.map((item) => (
        <span className="marquee-item" key={item}>
          {item} <span className="marquee-star">✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee-wrap hide-scrollbar">
      <div className="marquee-track">
        {content}
        {content}
      </div>
    </div>
  );
}
