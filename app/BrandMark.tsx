const SPIKES = Array.from({ length: 16 }, (_, i) => (i * 360) / 16)

/** Placeholder lion crest — swap for the real La Familia logo file when you have it. */
export default function BrandMark() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="La Familia lion crest">
      <circle cx="32" cy="32" r="31" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <g fill="currentColor">
        {SPIKES.map((angle) => (
          <path
            key={angle}
            d="M32 3.5 L36.1 15 L27.9 15 Z"
            transform={`rotate(${angle} 32 32)`}
          />
        ))}
      </g>
      <circle cx="32" cy="33" r="18" fill="currentColor" />
      <g fill="#fff">
        <ellipse cx="25.5" cy="29.5" rx="2.7" ry="2" />
        <ellipse cx="38.5" cy="29.5" rx="2.7" ry="2" />
        <path d="M32 36.5 L35.6 40 L28.4 40 Z" />
        <path
          d="M25 43.5 Q32 49 39 43.5"
          fill="none"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
