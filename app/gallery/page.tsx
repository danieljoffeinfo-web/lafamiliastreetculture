import Link from 'next/link'

export const metadata = { title: 'Gallery — La Familia' }

export default function Gallery() {
  return (
    <div className="page">
      <h1>GALLERY</h1>
      <p>The archive. Limited releases, grails and family fits out of Cape Town — coming soon.</p>
      <Link href="/" className="back">
        BACK HOME
      </Link>
    </div>
  )
}
