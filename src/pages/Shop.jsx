import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import Reveal from '../components/Reveal';
import { CloseIcon, ChevronRight } from '../components/Icons';
import { products, categories } from '../data/products';
import './Shop.css';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL', 'Free Size'];
const COLORS = [...new Set(products.flatMap((p) => p.colors.map(([name]) => name)))];
const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

function FilterGroup({ title, children }) {
  return (
    <div className="filter-group">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [subCategory, setSubCategory] = useState(searchParams.get('sub') || '');
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2600);
  const [sort, setSort] = useState('featured');
  const [sheetOpen, setSheetOpen] = useState(false);
  const filterParam = searchParams.get('filter');

  useEffect(() => {
    setCategory(searchParams.get('category') || '');
    setSubCategory(searchParams.get('sub') || '');
  }, [searchParams]);

  const activeCategory = categories.find((c) => c.name === category);

  const toggle = (list, setList, value) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const selectCategory = (name) => {
    setCategory(name);
    setSubCategory('');
    setSearchParams(name ? { category: name } : {});
  };

  const selectSubCategory = (sub) => {
    const next = subCategory === sub ? '' : sub;
    setSubCategory(next);
    setSearchParams(next ? { category, sub: next } : { category });
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (filterParam === 'new') result = result.filter((p) => p.newArrival);
    if (filterParam === 'bestsellers') result = result.filter((p) => p.bestSeller);
    if (category) result = result.filter((p) => p.category === category);
    if (subCategory) result = result.filter((p) => p.subCategory === subCategory);
    if (sizes.length) result = result.filter((p) => p.sizes.some((s) => sizes.includes(s)));
    if (colors.length) result = result.filter((p) => p.colors.some(([name]) => colors.includes(name)));
    result = result.filter((p) => p.price <= maxPrice);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'newest') result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));

    return result;
  }, [category, subCategory, sizes, colors, maxPrice, sort, filterParam]);

  const heading = filterParam === 'new' ? 'New In' : filterParam === 'bestsellers' ? 'Bestsellers' : category || 'Shop All';

  const filtersUI = (
    <>
      <FilterGroup title="Category">
        <button className={`filter-pill ${!category ? 'is-active' : ''}`} onClick={() => selectCategory('')}>All</button>
        {categories.map((c) => (
          <div key={c.name}>
            <button
              className={`filter-pill ${category === c.name ? 'is-active' : ''}`}
              onClick={() => selectCategory(c.name)}
            >
              {c.name} {c.comingSoon && <span className="filter-pill__tag">Soon</span>}
            </button>
            {category === c.name && c.subCategories.length > 0 && (
              <div className="filter-sub">
                {c.subCategories.map((sub) => (
                  <button
                    key={sub}
                    className={`filter-pill filter-pill--sub ${subCategory === sub ? 'is-active' : ''}`}
                    onClick={() => selectSubCategory(sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </FilterGroup>

      <FilterGroup title="Size">
        <div className="filter-swatches">
          {SIZES.map((s) => (
            <button key={s} className={`size-swatch ${sizes.includes(s) ? 'is-active' : ''}`} onClick={() => toggle(sizes, setSizes, s)}>
              {s}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Color">
        <div className="filter-list">
          {COLORS.map((c) => (
            <label key={c} className="filter-checkbox">
              <input type="checkbox" checked={colors.includes(c)} onChange={() => toggle(colors, setColors, c)} />
              {c}
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <input
          type="range"
          min="899"
          max="2600"
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="price-range"
        />
        <div className="price-range__value">Up to ₹{maxPrice.toLocaleString('en-IN')}</div>
      </FilterGroup>
    </>
  );

  return (
    <div className="shop-page section container-fluid-tcc">
      <Reveal className="shop-page__head">
        <span className="eyebrow">Shop</span>
        <h1 className="section-title">{heading}</h1>
        <p className="shop-page__desc">Considered fits, honest fabrics — pieces made to be worn, not just owned.</p>
      </Reveal>

      {activeCategory?.comingSoon && (
        <div className="shop-page__soon-banner">
          {activeCategory.name} have just launched and stock is limited — tap &ldquo;Enquire&rdquo; on any piece to check availability on WhatsApp.
        </div>
      )}

      <div className="shop-page__toolbar">
        <button className="shop-page__filter-btn d-lg-none" onClick={() => setSheetOpen(true)}>
          Filters
        </button>
        <span className="shop-page__count">{filtered.length} Products</span>
        <select className="shop-page__sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      <div className="shop-page__layout">
        <aside className="shop-page__sidebar d-none d-lg-block">
          {filtersUI}
        </aside>

        <div className="shop-page__grid">
          {filtered.length > 0 ? (
            <ProductGrid products={filtered} columns={3} />
          ) : (
            <p className="shop-page__empty">No products match these filters.</p>
          )}
        </div>
      </div>

      <div className={`filter-sheet ${sheetOpen ? 'filter-sheet--open' : ''}`}>
        <div className="filter-sheet__backdrop" onClick={() => setSheetOpen(false)} />
        <div className="filter-sheet__panel">
          <div className="filter-sheet__header">
            <h3>Filters</h3>
            <button onClick={() => setSheetOpen(false)} aria-label="Close filters"><CloseIcon /></button>
          </div>
          <div className="filter-sheet__body">{filtersUI}</div>
          <button className="btn-tcc filter-sheet__apply" onClick={() => setSheetOpen(false)}>
            Show {filtered.length} Results <ChevronRight width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
