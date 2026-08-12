const CLD = 'https://res.cloudinary.com/dmanxetyl/image/upload'
/**
 * `e_trim` strips the white studio margin so the shoe fills the hero instead of
 * floating inside its portrait frame. Raise the tolerance if a photo has a soft
 * background; drop the whole segment to use the untouched original.
 */
const TX = 'e_trim:12/f_auto,q_auto,w_1400,c_limit'

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
