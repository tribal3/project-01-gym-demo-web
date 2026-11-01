import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, Info, X, ZoomIn } from 'lucide-react'
import { useLanguage, type Copy } from '../lib/i18n'
import { IMAGES, galleryImage } from '../lib/site'
import { Reveal, SectionHeading } from './ui'

interface LightboxProps {
  index: number
  onClose: () => void
  onChange: (next: number) => void
  t: Copy
}

function Lightbox({ index, onClose, onChange, t }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const item = IMAGES.gallery[index]
  const alt = t.gallery.alts[index] ?? ''

  const goPrev = useCallback(
    () => onChange((index - 1 + IMAGES.gallery.length) % IMAGES.gallery.length),
    [index, onChange],
  )
  const goNext = useCallback(
    () => onChange((index + 1) % IMAGES.gallery.length),
    [index, onChange],
  )

  useEffect(() => {
    document.body.classList.add('is-locked')
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()

      if (event.key === 'Tab') {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>('button, [href]')
        if (!nodes || nodes.length === 0) return
        const list = Array.from(nodes)
        const first = list[0]
        const last = list[list.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [goNext, goPrev, onClose])

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={t.gallery.eyebrow}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="lightbox__bar">
        <span className="lightbox__count" dir="ltr" aria-hidden="true">
          <strong>{String(index + 1).padStart(2, '0')}</strong> /{' '}
          {String(IMAGES.gallery.length).padStart(2, '0')}
        </span>
        <button
          ref={closeRef}
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label={t.gallery.close}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="lightbox__stage" onMouseDown={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={goPrev}
          aria-label={t.gallery.prev}
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>

        <img
          className="lightbox__img"
          key={item.id}
          src={galleryImage(item.id, 1800)}
          alt={alt}
          width={1600}
          height={1200}
          decoding="async"
        />

        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={goNext}
          aria-label={t.gallery.next}
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      <p className="lightbox__caption" aria-live="polite">
        <strong>{alt}</strong>
        {t.gallery.note}
      </p>
    </div>,
    document.body,
  )
}

export default function Gallery() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section section--dark" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.gallery.eyebrow}
            index={t.gallery.index}
            title={t.gallery.title}
            text={t.gallery.text}
            id="gallery-title"
          />
        </Reveal>

        <Reveal>
          <div className="gallery-grid">
            {IMAGES.gallery.map((item, index) => {
              const alt = t.gallery.alts[index] ?? ''
              return (
                <button
                  key={item.id}
                  type="button"
                  className="gallery-item"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`${t.gallery.view}: ${alt}`}
                >
                  <img
                    src={galleryImage(item.id, item.w)}
                    alt={alt}
                    width={item.w}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="gallery-item__meta" aria-hidden="true">
                    <span className="gallery-item__label">{alt}</span>
                    <span className="gallery-item__zoom">
                      <ZoomIn size={15} />
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal>
          <p className="gallery-note">
            <Info size={14} aria-hidden="true" />
            {t.gallery.note}
          </p>
        </Reveal>
      </div>

      {openIndex !== null ? (
        <Lightbox
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
          t={t}
        />
      ) : null}
    </section>
  )
}