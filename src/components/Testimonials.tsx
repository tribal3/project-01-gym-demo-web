import { ArrowUpRight, MapPin, Quote, Star } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS } from '../lib/site'
import { RatingStars, Reveal, SectionHeading } from './ui'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="section section--light" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            index={t.testimonials.index}
            title={t.testimonials.title}
            text={t.testimonials.text}
            id="testimonials-title"
          />
        </Reveal>

        <div className="testimonial-grid">
          {t.testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <figure className="testimonial-card">
                <Quote className="testimonial-card__quote" size={22} aria-hidden="true" />
                <div className="testimonial-card__stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="testimonial-card__text">{item.quote}</blockquote>
                <figcaption className="testimonial-card__author">
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    {item.name.slice(0, 1)}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <span>{item.meta}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="testimonial-panel">
            <div className="testimonial-panel__score">
              <p className="testimonial-panel__label">{t.testimonials.ratingLabel}</p>
              <p className="testimonial-panel__value">
                <strong>{BUSINESS.rating}</strong>
                <span>/ 5</span>
              </p>
              <RatingStars
                value={Number(BUSINESS.rating)}
                label={`${BUSINESS.rating} / 5 — ${t.testimonials.ratingLabel}`}
              />
              <p className="testimonial-panel__count">
                {t.testimonials.verified} · {BUSINESS.reviewCount}
              </p>
            </div>

            <div className="testimonial-panel__body">
              <p className="testimonial-panel__note">{t.testimonials.note}</p>
              <a
                className="btn btn--solid-dark"
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.testimonials.cta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <p className="testimonial-panel__loc">
                <MapPin size={14} aria-hidden="true" />
                {t.hero.locationValue} · {t.hero.locationLabel}
              </p>
            </div>
          </div>

          <p className="testimonial-demo-note">{t.testimonials.demoNote}</p>
        </Reveal>
      </div>
    </section>
  )
}