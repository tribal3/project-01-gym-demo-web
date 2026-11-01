import { Asterisk } from 'lucide-react'
import { useLanguage } from '../lib/i18n'

export default function Marquee() {
  const { t } = useLanguage()

  const group = (key: string, hidden: boolean) => (
    <div className="marquee__group" key={key} aria-hidden={hidden || undefined}>
      {t.marquee.map((word) => (
        <span className="marquee__item" key={`${key}-${word}`}>
          {word}
          <Asterisk className="marquee__star" strokeWidth={2.5} aria-hidden="true" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {group('a', false)}
        {group('b', true)}
      </div>
    </div>
  )
}
