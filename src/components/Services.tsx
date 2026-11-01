import { Apple, ArrowUpRight, BookOpen, Briefcase, ClipboardList, Dumbbell } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { wa } from '../lib/site'
import { Reveal, SectionHeading } from './ui'

const ICONS: LucideIcon[] = [Dumbbell, ClipboardList, Apple, BookOpen, Briefcase]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section className="section section--paper" id="coaching" aria-labelledby="coaching-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.services.eyebrow}
            index={t.services.index}
            title={t.services.title}
            text={t.services.text}
            id="coaching-title"
          />
        </Reveal>

        <div className="services-grid">
          {t.services.items.map((item, index) => {
            const Icon = ICONS[index] ?? Dumbbell
            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="service-card">
                  <div className="service-card__top">
                    <span className="service-card__icon">
                      <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="service-card__num" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="service-card__subtitle">{item.subtitle}</p>
                  <h3 className="service-card__title">{item.title}</h3>
                  <p className="service-card__desc">{item.desc}</p>
                  <a
                    className="service-card__cta"
                    href={wa(t.whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.cta}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}