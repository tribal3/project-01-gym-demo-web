import { Clock, Info, Phone } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS, wa } from '../lib/site'
import { Reveal, WhatsAppIcon } from './ui'

export default function Hours() {
  const { t } = useLanguage()

  return (
    <section className="section section--ink" aria-labelledby="hours-title">
      <div className="container">
        <Reveal>
          <div className="hours-panel">
            <span className="hours-panel__icon" aria-hidden="true">
              <Clock size={30} strokeWidth={1.5} />
            </span>

            <div>
              <p className="eyebrow" style={{ marginBlockEnd: 12 }}>
                {t.hours.eyebrow}
              </p>
              <h2 className="display hours-panel__title" id="hours-title">
                {t.hours.title}
              </h2>
              <p className="hours-panel__text">{t.hours.text}</p>

              <dl className="hours-list">
                {t.hours.days.map((entry) => (
                  <div className="hours-list__row" key={entry.day}>
                    <dt>{entry.day}</dt>
                    <dd dir="ltr">{entry.time}</dd>
                  </div>
                ))}
              </dl>

              <p className="hours-panel__note">
                <Info size={13} aria-hidden="true" />
                {t.hours.note}
              </p>
            </div>

            <div className="hours-panel__actions">
              <a className="btn" href={BUSINESS.phoneHref}>
                <Phone size={16} aria-hidden="true" />
                {t.actions.call}
              </a>
              <a
                className="btn btn--ghost"
                href={wa(t.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={16} />
                {t.actions.whatsapp}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}