import { MapPin, Navigation, Phone } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS, wa } from '../lib/site'
import EnquiryForm from './EnquiryForm'
import { InstagramIcon, Reveal, SectionHeading, WhatsAppIcon } from './ui'

export default function Contact() {
  const { t, lang } = useLanguage()
  const l = t.contact.labels

  return (
    <section className="section section--light" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-intro">
            <Reveal>
              <SectionHeading
                eyebrow={t.contact.eyebrow}
                index={t.contact.index}
                title={t.contact.title}
                text={t.contact.text}
                id="contact-title"
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="contact-details">
                <div className="contact-row">
                  <span className="contact-row__icon" aria-hidden="true">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <span className="contact-row__label">{l.address}</span>
                    <p className="contact-row__value">
                      {lang === 'ar' ? BUSINESS.addressAr : BUSINESS.addressEn}
                    </p>
                  </div>
                </div>

                <div className="contact-row">
                  <span className="contact-row__icon" aria-hidden="true">
                    <Phone size={18} />
                  </span>
                  <div>
                    <span className="contact-row__label">{l.phone}</span>
                    <a className="contact-row__value" href={BUSINESS.phoneHref} dir="ltr">
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="contact-row">
                  <span className="contact-row__icon" aria-hidden="true">
                    <WhatsAppIcon size={18} />
                  </span>
                  <div>
                    <span className="contact-row__label">{l.whatsapp}</span>
                    <a
                      className="contact-row__value"
                      href={wa(t.whatsappMessages.general)}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="contact-row">
                  <span className="contact-row__icon" aria-hidden="true">
                    <Navigation size={18} />
                  </span>
                  <div>
                    <span className="contact-row__label">{l.directions}</span>
                    <a
                      className="contact-row__value"
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.actions.directions}
                    </a>
                  </div>
                </div>

                <div className="contact-row">
                  <span className="contact-row__icon" aria-hidden="true">
                    <InstagramIcon size={18} />
                  </span>
                  <div>
                    <span className="contact-row__label">{l.instagram}</span>
                    <a
                      className="contact-row__value"
                      href={BUSINESS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                    >
                      @project01gym
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a className="btn" href={BUSINESS.phoneHref}>
                  <Phone size={15} aria-hidden="true" />
                  {t.actions.call}
                </a>
                <a
                  className="btn btn--outline-dark"
                  href={wa(t.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={15} />
                  {t.actions.whatsapp}
                </a>
                <a
                  className="btn btn--outline-dark"
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation size={15} aria-hidden="true" />
                  {t.actions.directions}
                </a>
              </div>

              <div className="map-card">
                <div className="map-card__canvas" aria-hidden="true">
                  <span className="map-card__road map-card__road--second" />
                  <span className="map-card__road" />
                  <span className="map-card__street">
                    {lang === 'ar' ? 'شارع حكمة المصري' : 'Hekmat Al-Massri St.'} · Amman
                  </span>
                  <span className="map-card__pulse" />
                  <span className="map-card__pin">
                    <i>
                      <MapPin size={18} />
                    </i>
                  </span>
                </div>
                <div className="map-card__foot">
                  <div>
                    <p className="map-card__title">{t.contact.locationTitle}</p>
                    <p className="map-card__sub">{t.contact.locationText}</p>
                  </div>
                  <a
                    className="map-card__link"
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.actions.directions}
                    <Navigation size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <EnquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}