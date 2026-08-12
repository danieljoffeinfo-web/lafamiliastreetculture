const CLD = 'https://res.cloudinary.com/dmanxetyl/image/upload'
/**
 * Both shoe photos are portrait with a deep white studio margin, and they crop to
 * different shapes (2.33:1 and 1.80:1). So: `e_trim` strips the margin, then
 * `c_pad` normalises both onto one 1400x600 white canvas. Identical canvases mean
 * the two layers map to the exact same rectangle, so the lens reveals a shoe that
 * sits in the same place instead of jumping size.
 */
const TX = 'e_trim:12/c_pad,w_1400,h_600,b_white/f_auto,q_auto'

export const SITE = {
  name: 'La Familia',
  tagline: 'La Familia Street Culture',
  est: 'EST. 2014 · CAPE TOWN',
  drop: 'JORDAN IV · KAWS',

  /** Hero mouseover reveal: `reveal` is uncovered by the lens that follows the cursor. */
  hero: {
    base: `${CLD}/${TX}/v1786547296/Image_9_rlyers.jpg`,
    reveal: `${CLD}/${TX}/v1786547189/Image_10_ic4sri.jpg`,
    baseAlt: 'Grey suede Jordan IV, side profile',
    revealAlt: 'Brown and gold Jordan IV, side profile',
  },

  nav: [
    { label: 'SIGN UP', href: '/signup' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'CONTACT', href: '/contact' },
  ],

  ticker: [
    'CHROME HEARTS',
    'JORDANS',
    'CAPE TOWN',
    'MONCLER',
    'PROTECT THE FAMILY',
    'LIMITED RELEASE',
    'LA FAMILIA',
    'LOUIS VUITTON',
  ],
}
