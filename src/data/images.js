// Real product photography from @theclosetclub.in Instagram (local, permanent copies —
// Instagram's CDN URLs are signed and expire, so these are saved into the repo).
import igPinkPearlKurti from '../assets/products/ig-pink-pearl-kurti.jpg';
import igNavyFloralKurti from '../assets/products/ig-navy-floral-kurti.jpg';
import igBlackSleevelessKurti from '../assets/products/ig-black-sleeveless-kurti.jpg';
import igMaroonPaisleyKurti from '../assets/products/ig-maroon-paisley-kurti.jpg';
import igIndigoWrapKurti from '../assets/products/ig-indigo-wrap-kurti.jpg';
import igRedBellsleeveKurti from '../assets/products/ig-red-bellsleeve-kurti.jpg';
import igWineMedallionKurti from '../assets/products/ig-wine-medallion-kurti.jpg';
import igGreyFlareSkirt from '../assets/products/ig-grey-flare-skirt.jpg';

// Stock Unsplash placeholders — used only where we don't yet have real product
// photography (Long Kurti co-ord sets). Swap for real photos as they're shot.
const build = (id, w = 1200, h = 1500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=80&auto=format&fit=crop`;

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

export const STOCK = {
  greySideOpenLongKurti: build('1760287363750-1c888c75578f', 1000, 1250),
  yellowUmbrellaLongKurti: build('1760287363878-1a09af715b80', 1000, 1250),
  ivory2pcSet: build('1745313452052-0e4e341f326c', 1000, 1250),
  pink2pcSet: build('1741847639057-b51a25d42892', 1000, 1250),
  green2pcSet: build('1767785829347-cc13bd969514', 1000, 1250),
  red3pcSet: build('1764928947261-f5687e0faa4a', 1000, 1250),
  pink3pcSet: build('1768033976371-0e4ef195dfa2', 1000, 1250),
  // Large full-bleed marketing imagery — the real Instagram photos are only
  // 512x640 (story/reel cover res) and go soft when stretched across a full
  // viewport, so these two banners use high-res stock instead.
  heroModel: build('1708534419572-6e6614a53ca1', 2200, 2750),
  campaignModel: build('1760287363699-a08d553fb8a9', 2000, 1200),
};

export const IMG = {
  heroMain: STOCK.heroModel,
  editorialLeft: igMaroonPaisleyKurti,
  editorialRight1: igWineMedallionKurti,
  editorialRight2: igIndigoWrapKurti,
  campaign: STOCK.campaignModel,

  categoryShortKurtis: igPinkPearlKurti,
  categoryLongKurtis: STOCK.greySideOpenLongKurti,
  categorySkirts: igGreyFlareSkirt,

  // "Follow The Club" grid — real content from the actual Instagram page.
  instagram: [
    igPinkPearlKurti,
    igNavyFloralKurti,
    igBlackSleevelessKurti,
    igMaroonPaisleyKurti,
    igRedBellsleeveKurti,
    igWineMedallionKurti,
  ],

};
