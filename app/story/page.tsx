import Link from 'next/link'

export const metadata = { title: 'Our Story — La Familia' }

export default function Story() {
  return (
    <div className="page">
      <h1>OUR STORY</h1>
      <p>Est. 2014. Built in Cape Town, worn by the family. Protect the family.</p>
      <Link href="/" className="back">
        BACK HOME
      </Link>
    </div>
  )
}
