import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProductBySlug, products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { HeartIcon, StarIcon, ChevronRight, WhatsappIcon } from '../components/Icons';
import ProductCarousel from '../components/ProductCarousel';
import Reveal from '../components/Reveal';
import { productWhatsappLink } from '../data/whatsapp';
import './Product.css';

function Accordion({ title, children, defaultOpen = false, open: controlledOpen, onToggle, innerRef }) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const toggle = () => (isControlled ? onToggle(!open) : setInternalOpen(!open));

  return (
    <div className="accordion-item" ref={innerRef}>
      <button className="accordion-item__head" onClick={toggle}>
        {title}
        <ChevronRight className={`accordion-item__chevron ${open ? 'is-open' : ''}`} width={16} height={16} />
      </button>
      {open && <div className="accordion-item__body">{children}</div>}
    </div>
  );
}

export default function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { wishlist, toggleWishlist } = useShop();

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(product?.colors[0][0] || null);
  const [qty, setQty] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const sizeGuideRef = useRef(null);

  useEffect(() => {
    if (sizeGuideOpen) sizeGuideRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [sizeGuideOpen]);

  if (!product) return <Navigate to="/shop" replace />;

  const isWishlisted = wishlist.includes(product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 8);

  const enquiryDetails = [
    size && `Size: ${size}`,
    color && `Color: ${color}`,
    qty > 1 && `Qty: ${qty}`,
  ].filter(Boolean).join(', ');
  const whatsappHref = productWhatsappLink(product, enquiryDetails);

  return (
    <div className="product-page section container-fluid-tcc">
      <div className="product-page__breadcrumb">
        <Link to="/shop">Shop</Link> <ChevronRight width={12} height={12} /> <span>{product.category}</span> <ChevronRight width={12} height={12} /> <span>{product.name}</span>
      </div>

      <div className="product-page__layout">
        <div className="product-page__gallery">
          <div className="product-page__main-image">
            <img src={product.images[activeImage]} alt={product.name} />
          </div>
          {product.images.length > 1 && (
            <div className="product-page__thumbs">
              {product.images.map((img, i) => (
                <button key={i} className={`product-page__thumb ${activeImage === i ? 'is-active' : ''}`} onClick={() => setActiveImage(i)}>
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-page__info">
          <span className="eyebrow">{product.category}</span>
          <h1 className="product-page__name">{product.name}</h1>

          <div className="product-page__rating">
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} filled={i < Math.round(product.rating)} />)}
            <span>{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
          </div>

          <div className="product-page__price">
            <span>₹{product.price.toLocaleString('en-IN')}</span>
          </div>

          <div className="product-page__option">
            <span className="product-page__option-label">Color — {color}</span>
            <div className="product-page__colors">
              {product.colors.map(([name, hex]) => (
                <button
                  key={name}
                  className={`product-page__color-dot ${color === name ? 'is-active' : ''}`}
                  style={{ background: hex }}
                  onClick={() => setColor(name)}
                  aria-label={name}
                />
              ))}
            </div>
          </div>

          <div className="product-page__option">
            <div className="product-page__option-row">
              <span className="product-page__option-label">Size {size ? `— ${size}` : ''}</span>
              <button type="button" className="link-underline" onClick={() => setSizeGuideOpen(true)}>Size Guide</button>
            </div>
            <div className="product-page__sizes">
              {product.sizes.map((s) => (
                <button key={s} className={`size-swatch ${size === s ? 'is-active' : ''}`} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
            {!size && <span className="product-page__hint">Let us know your size when you message us</span>}
          </div>

          <div className="product-page__option">
            <span className="product-page__option-label">Quantity</span>
            <div className="qty-stepper">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
          </div>

          <div className="product-page__actions">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-tcc product-page__add product-page__whatsapp-btn">
              <WhatsappIcon width={17} height={17} /> Enquire On WhatsApp
            </a>
            <button className="tcc-icon-btn product-page__wishlist-btn" onClick={() => toggleWishlist(product.id)}>
              <HeartIcon filled={isWishlisted} />
            </button>
          </div>

          <div className="product-page__accordion">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Fabric & Care">
              <p>{product.fabric}</p>
            </Accordion>
            <Accordion title="Size Guide" open={sizeGuideOpen} onToggle={setSizeGuideOpen} innerRef={sizeGuideRef}>
              <table className="size-guide-table">
                <thead><tr><th>Size</th><th>Bust (in)</th><th>Waist (in)</th></tr></thead>
                <tbody>
                  <tr><td>S</td><td>36</td><td>30</td></tr>
                  <tr><td>M</td><td>38</td><td>32</td></tr>
                  <tr><td>L</td><td>40</td><td>34</td></tr>
                  <tr><td>XL</td><td>42</td><td>36</td></tr>
                  <tr><td>XXL</td><td>44</td><td>38</td></tr>
                </tbody>
              </table>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>We ship pan-India. Delivery timelines, shipping cost and returns are confirmed with you directly over WhatsApp when you place your order.</p>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="product-page__related">
        <Reveal className="text-center mb-4 mb-md-5">
          <span className="eyebrow">Keep Exploring</span>
          <h2 className="section-title section-title--center">You May Also Like</h2>
        </Reveal>
        <ProductCarousel products={related.length ? related : products.slice(0, 6)} />
      </div>

      <div className="product-page__sticky-bar d-lg-none">
        <div>
          <strong>₹{product.price.toLocaleString('en-IN')}</strong>
        </div>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-tcc product-page__whatsapp-btn">
          <WhatsappIcon width={15} height={15} /> Enquire
        </a>
      </div>
    </div>
  );
}
