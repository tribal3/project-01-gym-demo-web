import { Compass, Dumbbell, HeartPulse, Info, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { IMAGES } from '../lib/site'
import { Reveal, SectionHeading } from './ui'

const ICONS: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  heart: HeartPulse,
  target: Target,
  compass: Compass,
}

const CARD_IMAGES = [IMAGES.strength, IMAGES.cardio, IMAGES.goals, IMAGES.guidance]

export default function Training() {
  const { t } = useLanguage()

  return (
    <section className="section section--paper" id="training" aria-labelledby="training-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.training.eyebrow}
            index={t.training.index}
            title={t.training.title}
            text={t.training.text}
            id="training-title"
          />
        </Reveal>

        <div className="training-grid">
          {t.training.items.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Dumbbell
            return (
              <Reveal key={item.title} delay={index * 90}>
                <article className="train-card">
                  <div className="train-card__media">
                    <img
                      src={CARD_IMAGES[index] ?? IMAGES.strength}
                      alt={item.title}
                      width={900}
                      height={620}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="train-card__num" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="train-card__body">
                    <span className="train-card__icon" aria-hidden="true">
                      <Icon size={19} strokeWidth={1.9} />
                    </span>
                    <h3 className="train-card__title">{item.title}</h3>
                    <p className="train-card__desc">{item.desc}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="train-note">
            <Info size={14} aria-hidden="true" />
            {t.training.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
