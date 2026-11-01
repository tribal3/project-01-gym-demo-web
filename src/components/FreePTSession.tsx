import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { wa } from '../lib/site'
import { Reveal } from './ui'

export default function FreePTSession() {
  const { t } = useLanguage()

  return (
    <section className="section section--dark" id="free-pt-session" aria-labelledby="free-pt-title">
      <div className="container">
        <Reveal>
          <div className="free-pt">
            <div className="free-pt__copy">
              <p className="eyebrow">{t.freePt.eyebrow}</p>
              <h2 className="display free-pt__title" id="free-pt-title">
                {t.freePt.title}
              </h2>
              <p className="free-pt__text">{t.freePt.text}</p>
              <p className="free-pt__body">{t.freePt.body}</p>
            </div>

            <div className="free-pt__actions">
              <a
                className="btn btn--block"
                href={wa(t.whatsappMessages.claimFreeSession)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.freePt.cta}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <p className="free-pt__note">
                <MessageCircle size={14} aria-hidden="true" />
                {t.freePt.note}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}