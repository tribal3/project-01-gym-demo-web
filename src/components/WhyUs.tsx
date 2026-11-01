import { ArrowUpRight, Flame, MapPin, Target, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS } from '../lib/site'
import { RatingStars, Reveal, SectionHeading } from './ui'

const ICONS: LucideIcon[] = [MapPin, Users, Flame, Target]

export default function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="section section--light" id="why" aria-labelledby="why-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.why.eyebrow}
            index={t.why.index}
            title={t.why.title}
            text={t.why.text}
            id="why-title"
          />
        </Reveal>

        <div className="why-grid">
          <div className="why-list">
            {t.why.items.map((item, index) => {
              const Icon = ICONS[index] ?? MapPin
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="why-card">
                    <div className="why-card__top">
                      <span className="why-card__num" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <Icon className="why-card__icon" size={20} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120}>
            <aside className="rating-card">
              <div>
                <p className="rating-card__label">{t.why.ratingLabel}</p>
                <div className="rating-card__score">
                  <strong>{BUSINESS.rating}</strong>
                  <span>/ 5</span>
                </div>
                <RatingStars
                  value={Number(BUSINESS.rating)}
                  label={`${BUSINESS.rating} / 5 — ${t.why.ratingLabel}`}
                />
                <p className="rating-card__caption" style={{ marginBlockStart: 14 }}>
                  {t.why.ratingCaption}
                </p>
              </div>

              <div>
                <div className="rating-card__divider" aria-hidden="true" />
                <a
                  className="rating-card__loc"
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} aria-hidden="true" />
                  <span>
                    {t.hero.locationValue} · {t.hero.locationLabel}
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" style={{ marginInlineStart: 'auto' }} />
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}