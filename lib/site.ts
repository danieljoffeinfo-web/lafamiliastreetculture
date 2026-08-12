const CLD = 'https://res.cloudinary.com/dmanxetyl/image/upload'
/**
 * Background-removed cutouts. `e_trim` strips the transparent margin so the shoe
 * fills the frame, then `c_pad` normalises both onto one 1400x600 transparent
 * canvas — identical canvases mean the two layers map to the exact same rectangle,
 * so the lens reveals a shoe sitting in the same place instead of jumping size.
 */
const TX = 'e_trim:12/c_pad,w_1400,h_600,b_transparent/f_auto,q_auto'

export const SITE = {
  name: 'La Familia',
  tagline: 'La Familia Street Culture',
  est: 'EST. 2014 · CAPE TOWN',
  drop: 'JORDAN IV · KAWS',

  /** Hero mouseover reveal: `reveal` is uncovered by the lens that follows the cursor. */
  hero: {
    base: `${CLD}/${TX}/v1786550076/Image_9_-_Edited_derkgm.png`,
    reveal: `${CLD}/${TX}/v1786550055/Image_10_-_Edited_llujre.png`,
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
