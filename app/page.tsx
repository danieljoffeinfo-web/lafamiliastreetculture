import Link from 'next/link'
import RevealStage from './RevealStage'
import { SITE } from '@/lib/site'

export default function Home() {
  return (
    <div className="shell">
      <header className="header">
        {/* Drop the real lion crest in here beside the wordmark when you have the file. */}
        <Link href="/" className="brand" aria-label={`${SITE.name} — home`}>
          <span className="brand-word">{SITE.name}</span>
        </Link>

        <nav className="nav">
          {SITE.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="hero">
        <span className="edge edge-left">{SITE.est}</span>
        <span className="edge edge-right">{SITE.drop}</span>

        <RevealStage />

        <div className="cta-row">
          <Link href="/gallery" className="btn btn-solid">
            EXPLORE THE DROP
          </Link>
          <Link href="/story" className="btn btn-ghost">
            OUR STORY
          </Link>
        </div>
      </main>

      <div className="ticker">
        <div className="ticker-track">
          {[0, 1].flatMap((copy) =>
            SITE.ticker.map((word) => (
              <span
                key={`${copy}-${word}`}
                className="ticker-item"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {word}
              </span>
            )),
          )}
        </div>
      </div>
    </div>
  )
}
