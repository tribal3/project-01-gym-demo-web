import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { Star } from 'lucide-react'

import { useLanguage } from '../lib/i18n'

/* ------------------------------ brand mark ------------------------------ */

export function Logo({
  className = '',
  asLink = true,
}: {
  className?: string
  asLink?: boolean
}) {
  const { lang } = useLanguage()

  const logoWord = lang === 'ar' ? (
    <>
      <span className="logo__word">
        PROJECT 01 <em>جيم</em>
      </span>
      <span className="logo__sub">PERSONAL COACHING</span>
    </>
  ) : (
    <>
      <span className="logo__word">
        PROJECT <em>01</em>
      </span>
      <span className="logo__sub">01 GYM · Amman, Jordan</span>
    </>
  )

  const logoType = (
    <span className="logo__type">
      {logoWord}
    </span>
  )

  const content = (
    <>
      <svg
        className="logo__mark"
        viewBox="0 0 64 64"
        role="img"
        aria-label={lang === 'ar' ? 'شعار PROJECT 01 جيم' : 'PROJECT 01 Gym logo'}
      >
        <rect width="64" height="64" rx="14" fill="#F47721" />
        <path d="M13 47 24 17h11L24 47z" fill="#101010" />
        <path d="M32 47 43 17h11L43 47z" fill="#ffffff" />
      </svg>
      {logoType}
    </>
  )

  if (!asLink) return <span className={`logo ${className}`}>{content}</span>

  return (
    <a href="#home" className={`logo ${className}`} aria-label="PROJECT 01 Gym — home">
      {content}
    </a>
  )
}

/* --------------------------- language switch --------------------------- */

export function LanguageSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t.langLabel}>
      <button type="button" onClick={() => setLang('ar')} aria-pressed={lang === 'ar'} lang="ar">
        العربية
      </button>
      <span className="lang-switch__divider" aria-hidden="true" />
      <button type="button" onClick={() => setLang('en')} aria-pressed={lang === 'en'} lang="en">
        English
      </button>
    </div>
  )
}

/* --------------------------- section heading --------------------------- */

export function SectionHeading({
  eyebrow,
  index,
  title,
  text,
  id,
}: {
  eyebrow: string
  index?: string
  title: string
  text?: string
  id?: string
}) {
  return (
    <div className="section-head">
      <div className="section-head__main">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display section-head__title" id={id}>
          {title}
        </h2>
        {text ? <p className="section-head__text">{text}</p> : null}
      </div>
      {index ? <div className="section-head__index">{index}</div> : null}
    </div>
  )
}

/* ------------------------------- rating ------------------------------- */

export function RatingStars({ value, label }: { value: number; label: string }) {
  const stars = [0, 1, 2, 3, 4]
  return (
    <div className="rating-card__stars" role="img" aria-label={label}>
      <div className="stars-row stars-row--base" aria-hidden="true">
        {stars.map((i) => (
          <Star key={i} size={17} strokeWidth={1.5} />
        ))}
      </div>
      <div
        className="stars-row stars-row--fill"
        style={{ width: `${(value / 5) * 100}%` }}
        aria-hidden="true"
      >
        {stars.map((i) => (
          <Star key={i} size={17} strokeWidth={1.5} fill="currentColor" />
        ))}
      </div>
    </div>
  )
}

/* ------------------------------ reveal ------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible')
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}

/* --------------------------- instagram icon --------------------------- */

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* --------------------------- whatsapp icon --------------------------- */

export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}