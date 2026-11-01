import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS, wa } from '../lib/site'
import { LanguageSwitch, Logo } from './ui'

const SECTION_IDS = ['home', 'about', 'coaching', 'why', 'gallery', 'contact'] as const

export default function Header() {
  const { t, lang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'coaching', label: t.nav.coaching },
    { id: 'why', label: t.nav.why },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => Boolean(node),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    document.body.classList.add('is-locked')
    firstLinkRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }

      if (event.key === 'Tab') {
        const nodes = menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        )
        if (!nodes || nodes.length === 0) return
        const list = Array.from(nodes)
        const first = list[0]
        const last = list[list.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1061px)')
    const onChange = () => {
      if (query.matches) setMenuOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <>
      <header className={`site-header ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
        <div className="container header__inner">
          <Logo />

          <nav className="header__nav" aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary'}>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <LanguageSwitch />
            <a
              className="btn header__cta"
              href={wa(t.whatsappMessages.join)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.actions.join}
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.actions.menuClose : t.actions.menuOpen}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="mobile-menu is-open" id="mobile-menu" ref={menuRef}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <nav className="mobile-menu__nav" aria-label={lang === 'ar' ? 'قائمة الجوال' : 'Mobile'}>
              {links.map((link, index) => (
                <a
                  key={link.id}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={`#${link.id}`}
                  className="mobile-menu__link"
                  onClick={closeMenu}
                >
                  {link.label}
                  <span className="num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <div className="mobile-menu__contact">
                <a href={BUSINESS.phoneHref} dir="ltr">
                  {BUSINESS.phoneDisplay}
                </a>
                <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {t.actions.directions}
                </a>
              </div>

              <a
                className="btn btn--block"
                href={wa(t.whatsappMessages.join)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {t.actions.join}
              </a>

              <div className="mobile-menu__bottom">
                <span className="logo__sub" aria-hidden="true">
                  {lang === 'ar' ? 'عمّان · الأردن' : 'Amman · Jordan'}
                </span>
                <LanguageSwitch />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
