import Link from 'next/link'

export const metadata = { title: 'Sign Up — La Familia' }

export default function SignUp() {
  return (
    <div className="page">
      <h1>SIGN UP</h1>
      <p>
        Early access to every drop. Membership opens shortly — wire this page to Supabase auth when
        you are ready.
      </p>
      <Link href="/" className="back">
        BACK HOME
      </Link>
    </div>
  )
}
