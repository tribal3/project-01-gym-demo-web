import { MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS, wa } from '../lib/site'
import { InstagramIcon, LanguageSwitch, Logo, WhatsAppIcon } from './ui'

function LinkedInIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.3 8.75 21 11.1 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.02-3.3-2.02 0-2.33 1.57-2.33 3.2V21H9z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
    </svg>
  )
}

export default function Footer() {
  const { t, lang } = useLanguage()

  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'coaching', label: t.nav.coaching },
    { id: 'why', label: t.nav.why },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo asLink={false} />
            <p>{t.footer.tagline}</p>
          </div>

          <nav aria-labelledby="footer-explore">
            <p className="footer__title" id="footer-explore">
              {t.footer.explore}
            </p>
            <div className="footer__links">
              {links.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="footer__title" id="footer-contact">
              {t.footer.contact}
            </p>
            <div className="footer__contact">
              <a href={BUSINESS.phoneHref} dir="ltr">
                <Phone size={15} aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={wa(t.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                {t.actions.whatsapp}
              </a>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={15} aria-hidden="true" />
                {lang === 'ar' ? BUSINESS.addressAr : BUSINESS.addressEn}
              </a>
            </div>

            <div className="footer__social">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>

            <div className="footer__lang">
              <span className="footer__lang-label">{t.langLabel}</span>
              <LanguageSwitch className="lang-switch--footer" />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            {t.footer.demo} <strong>{t.footer.notAffiliated}</strong>
          </p>
          <span className="footer__credit">
            {t.footer.credit.replace('TRIBAL³', '')}
            <strong>TRIBAL³</strong>
          </span>
        </div>
      </div>
    </footer>
  )
}