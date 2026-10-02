// ============================================================================
// PRODUCT images — real photography from @theclosetclub.in Instagram ONLY.
// Instagram's CDN URLs are signed and expire, so these are saved locally.
// Never use stock photography here — product cards must show the real item.
// ============================================================================
import igPinkPearlKurti from '../assets/products/ig-pink-pearl-kurti.jpg';
import igNavyFloralKurti from '../assets/products/ig-navy-floral-kurti.jpg';
import igBlackSleevelessKurti from '../assets/products/ig-black-sleeveless-kurti.jpg';
import igMaroonPaisleyKurti from '../assets/products/ig-maroon-paisley-kurti.jpg';
import igIndigoWrapKurti from '../assets/products/ig-indigo-wrap-kurti.jpg';
import igRedBellsleeveKurti from '../assets/products/ig-red-bellsleeve-kurti.jpg';
import igWineMedallionKurti from '../assets/products/ig-wine-medallion-kurti.jpg';
import igGreyFlareSkirt from '../assets/products/ig-grey-flare-skirt.jpg';

export const REAL = {
  pinkPearlKurti: igPinkPearlKurti,
  navyFloralKurti: igNavyFloralKurti,
  blackSleevelessKurti: igBlackSleevelessKurti,
  maroonPaisleyKurti: igMaroonPaisleyKurti,
  indigoWrapKurti: igIndigoWrapKurti,
  redBellsleeveKurti: igRedBellsleeveKurti,
  wineMedallionKurti: igWineMedallionKurti,
  greyFlareSkirt: igGreyFlareSkirt,
};

// ============================================================================
// BANNER / HERO / EDITORIAL images — stock photography ONLY. Never used on
// product cards or the PDP; these exist purely for marketing moments.
// ============================================================================
const stock = (id, params = '') =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75${params}`;

export const STOCK = {
  // Premium studio shot, soft shadow-grid wall, generous negative space on
  // both sides — crops cleanly across wide desktop, tablet and mobile.
  hero: stock('1720159265150-e0ca63b64a89', '&w=2200&h=2750&fit=crop&crop=focalpoint&fp-x=0.62&fp-y=0.47&fp-z=1'),

  editorialMain: stock('1708534419572-6e6614a53ca1', '&w=1200&h=1500'),
  editorialThumb1: stock('1720159265244-d83e0c9fc01b', '&w=900&h=700'),
  editorialThumb2: stock('1767785829347-cc13bd969514', '&w=900&h=700'),

  campaign: stock('1760287363699-a08d553fb8a9', '&w=2000&h=1200'),

  categorySleevelessShortKurti: stock('1729203510709-091f6439d2f9', '&w=900&h=1100'),
  categoryShortKurti: stock('1667665970124-2273c6ef3489', '&w=900&h=1100'),
  categoryFrocks: stock('1710967358102-851d4cdd81e7', '&w=900&h=1100'),
  categoryLongKurtis: stock('1760287363750-1c888c75578f', '&w=900&h=1100'),
  categorySkirts: stock('1688582949975-98a0750d7505', '&w=900&h=1100'),
  categoryCoOrdSet: stock('1745313452052-0e4e341f326c', '&w=900&h=1100'),
  category3PieceSet: stock('1764928947261-f5687e0faa4a', '&w=900&h=1100'),
};

// "Follow The Club" grid — real content from the actual Instagram page.
export const INSTAGRAM_FEED = [
  igPinkPearlKurti,
  igNavyFloralKurti,
  igBlackSleevelessKurti,
  igMaroonPaisleyKurti,
  igRedBellsleeveKurti,
  igWineMedallionKurti,
];
