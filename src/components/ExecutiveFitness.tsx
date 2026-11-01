import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { IMAGES, wa } from '../lib/site'
import { Reveal } from './ui'

export default function ExecutiveFitness() {
  const { t } = useLanguage()

  return (
    <section className="section section--ink" id="executive-fitness" aria-labelledby="executive-title">
      <div className="container">
        <div className="executive-grid">
          <Reveal className="executive__media">
            <img
              src={IMAGES.mixed}
              alt={t.executive.imageAlt}
              width={1200}
              height={1400}
              loading="lazy"
              decoding="async"
            />
            <span className="executive__badge">
              <strong>{t.executive.eyebrow}</strong>
              <span>{t.executive.index}</span>
            </span>
          </Reveal>

          <Reveal className="executive__copy" delay={100}>
            <p className="eyebrow">{t.executive.eyebrow}</p>
            <h2 className="display executive__title" id="executive-title">
              {t.executive.title}
            </h2>
            <p className="executive__text">{t.executive.text}</p>
            <p className="executive__body">{t.executive.body}</p>
            <div className="executive__actions">
              <a
                className="btn"
                href={wa(t.whatsappMessages.join)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.executive.primary}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="btn btn--ghost" href="#contact">
                {t.executive.secondary}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}