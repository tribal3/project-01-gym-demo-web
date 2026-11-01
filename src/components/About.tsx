import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { IMAGES } from '../lib/site'
import { Reveal, SectionHeading } from './ui'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="section section--light" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <div className="about__grid">
            <div className="about__media">
              <figure className="about__figure">
                <img
                  src={IMAGES.about}
                  alt={t.about.imageAlt}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="about__caption">{t.about.caption}</figcaption>
              </figure>

              <div className="about__detail" aria-hidden="true">
                <img
                  src={IMAGES.aboutDetail}
                  alt=""
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="about__badge">
                <Sparkles size={20} aria-hidden="true" />
                <div>
                  <strong>{t.hero.optionsValue}</strong>
                  <span>{t.hero.optionsLabel}</span>
                </div>
              </div>
            </div>

            <div className="about__content">
              <SectionHeading
                eyebrow={t.about.eyebrow}
                index={t.about.index}
                title={t.about.title}
                id="about-title"
              />

              <p className="about__text">{t.about.text}</p>

              <ul className="about__points">
                {t.about.points.map((point) => (
                  <li className="about__point" key={point}>
                    <span className="tick" aria-hidden="true">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="about__foot">
                <p>
                  <strong>{t.about.cardTitle}</strong> — {t.about.cardText}
                </p>
                <a className="link-arrow" href="#coaching">
                  {t.nav.coaching}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}