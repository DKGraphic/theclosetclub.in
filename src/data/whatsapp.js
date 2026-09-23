export const WHATSAPP_NUMBER = '919444131591';

export const productWhatsappLink = (product, details = '') => {
  const message = `Hi! I'm interested in the ${product.name} (₹${product.price.toLocaleString('en-IN')})${details ? ` — ${details}` : ''} from The Closet Club. Is it available?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const generalWhatsappLink = () => {
  const message = "Hi! I'd like to know more about The Closet Club's collection.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
