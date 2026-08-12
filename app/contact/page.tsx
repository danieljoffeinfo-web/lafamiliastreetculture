import Link from 'next/link'

export const metadata = { title: 'Contact — La Familia' }

export default function Contact() {
  return (
    <div className="page">
      <h1>CONTACT</h1>
      <p>Cape Town, South Africa. Drop enquiries, sourcing and authentication — details coming soon.</p>
      <Link href="/" className="back">
        BACK HOME
      </Link>
    </div>
  )
}
