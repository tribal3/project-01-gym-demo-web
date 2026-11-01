import { useLanguage } from '../lib/i18n'
import { wa } from '../lib/site'
import { WhatsAppIcon } from './ui'

export default function FloatingWhatsApp() {
  const { t } = useLanguage()

  return (
    <a
      className="float-wa"
      href={wa(t.whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floatingWhatsapp}
    >
      <WhatsAppIcon size={22} />
      <span className="float-wa__text" aria-hidden="true">
        {t.floatingWhatsapp}
      </span>
    </a>
  )
}
