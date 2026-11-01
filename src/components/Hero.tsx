import { ArrowUpRight, MapPin, Star, Users } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { wa } from '../lib/site'
import { IMAGES } from '../lib/site'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src={IMAGES.hero}
          alt={t.hero.imageAlt}
          width={2000}
          height={1333}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge">{t.hero.badge}</p>
          <h1
            className="display hero__title"
            id="hero-title"
            aria-label={`${t.hero.titleTop} ${t.hero.titleAccent}`}
          >
            <span>{t.hero.titleTop}</span>
            <span className="accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="hero__text">{t.hero.text}</p>

          <div className="hero__actions">
            <a className="btn" href={wa(t.whatsappMessages.general)}>
              {t.actions.join}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              {t.actions.contact}
            </a>
          </div>
        </div>

        <div className="hero__stats">
            <div className="hero__stat">
              <strong>
                <Star size={17} fill="currentColor" aria-hidden="true" />
                <span dir="ltr">{t.hero.ratingLabel}</span>
              </strong>
              <span>{t.hero.optionsValue}</span>
            </div>
            <div className="hero__stat">
              <strong>
                <Users size={17} aria-hidden="true" />
                {t.hero.optionsValue}
              </strong>
              <span>{t.hero.optionsLabel}</span>
            </div>
            <div className="hero__stat">
              <strong>
                <MapPin size={17} aria-hidden="true" />
                {t.hero.locationValue}
              </strong>
              <span>{t.hero.locationLabel}</span>
            </div>
        </div>
      </div>

    </section>
  )
}