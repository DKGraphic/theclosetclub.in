import StaticPage from './StaticPage';
import './StaticPage.css';

export default function ShippingDelivery() {
  return (
    <StaticPage title="Shipping & Delivery">
      <p>We currently ship across India via trusted courier partners.</p>
      <h3>Shipping Charges</h3>
      <p>Free shipping on all prepaid and COD orders above ₹999. A flat fee of ₹99 applies below that.</p>
      <h3>Delivery Timelines</h3>
      <p>Orders are dispatched within 24–48 hours and typically delivered within 4–7 business days depending on your location.</p>
      <h3>Order Tracking</h3>
      <p>You will receive a tracking link via SMS and email as soon as your order is shipped.</p>
    </StaticPage>
  );
}
