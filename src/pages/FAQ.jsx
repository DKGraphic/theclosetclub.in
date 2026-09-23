import StaticPage from './StaticPage';
import './StaticPage.css';

const FAQS = [
  { q: 'How long does delivery take?', a: 'Orders are typically delivered within 4–7 business days across India.' },
  { q: 'Do you offer Cash on Delivery?', a: 'Yes, COD is available on all orders below ₹5,000.' },
  { q: 'What is your return policy?', a: 'We offer a 7-day easy return and exchange window from the date of delivery.' },
  { q: 'How do I track my order?', a: 'You will receive a tracking link via SMS and email once your order ships.' },
  { q: 'Do you ship internationally?', a: 'Currently we only ship within India. International shipping is coming soon.' },
];

export default function FAQ() {
  return (
    <StaticPage title="Frequently Asked Questions">
      {FAQS.map((item) => (
        <div key={item.q}>
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </StaticPage>
  );
}
