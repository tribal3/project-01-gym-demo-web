import { Info } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { IMAGES, wa } from '../lib/site'
import { Reveal, SectionHeading, WhatsAppIcon } from './ui'

export default function Experiences() {
  const { t } = useLanguage()

  const cards = [
    {
      key: 'ladies' as const,
      data: t.experiences.ladies,
      image: IMAGES.ladies,
      message: t.whatsappMessages.ladies,
      index: 'A',
      primary: true,
    },
    {
      key: 'mixed' as const,
      data: t.experiences.mixed,
      image: IMAGES.mixed,
      message: t.whatsappMessages.mixed,
      index: 'B',
      primary: false,
    },
  ]

  return (
    <section
      className="section section--ink"
      id="experiences"
      aria-labelledby="experiences-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.experiences.eyebrow}
            index={t.experiences.index}
            title={t.experiences.title}
            text={t.experiences.text}
            id="experiences-title"
          />
        </Reveal>

        <div className="exp-grid">
          {cards.map((card, cardIndex) => (
            <Reveal key={card.key} delay={cardIndex * 120}>
              <article className={`exp-card exp-card--${card.key}`}>
                <img
                  className="exp-card__img"
                  src={card.image}
                  alt={card.data.imageAlt}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                />

                <div className="exp-card__top">
                  <span className="exp-card__tag">{card.data.tag}</span>
                  <span className="exp-card__index" aria-hidden="true">
                    {card.index}
                  </span>
                </div>

                <div className="exp-card__body">
                  <h3 className="display exp-card__title">{card.data.label}</h3>
                  <p className="exp-card__desc">{card.data.desc}</p>

                  <ul className="exp-card__tags">
                    {card.data.tags.map((tag) => (
                      <li className="exp-card__tag-pill" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="exp-card__actions">
                    <a
                      className={`btn ${card.primary ? '' : 'btn--ghost'}`}
                      href={wa(card.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon size={16} />
                      {card.data.cta}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="exp-note">
            <Info size={15} aria-hidden="true" />
            {t.experiences.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
