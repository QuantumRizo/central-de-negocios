import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import './HoverImageGallery.css'

const HoverImageGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const galleryImages = images.slice(0, 3)
  const activeImage = galleryImages[activeIndex] || galleryImages[0]

  if (!activeImage) return null

  return (
    <div className="case-image-gallery" aria-label={`Imágenes de ${title}`}>
      <div className={`case-image-stage ${activeImage.kind === 'graphic' ? 'is-graphic' : 'is-photo'}`}>
        {activeImage.kind !== 'graphic' && (
          <img className="case-image-backdrop" src={activeImage.src} alt="" aria-hidden="true" loading="lazy" />
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={activeImage.src}
            className="case-image-main"
            src={activeImage.src}
            alt={activeImage.alt || title}
            loading="lazy"
            initial={reducedMotion ? false : { opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, scale: 0.985 }}
            transition={{ duration: reducedMotion ? 0 : 0.26, ease: 'easeOut' }}
          />
        </AnimatePresence>
        <span className="case-image-count" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
        </span>
      </div>

      {galleryImages.length > 1 && (
        <div className="case-image-filmstrip" aria-label="Seleccionar imagen">
          {galleryImages.map((image, index) => (
            <button
              className={`case-image-thumb${index === activeIndex ? ' is-active' : ''}${image.kind === 'graphic' ? ' is-graphic' : ''}`}
              key={image.src}
              type="button"
              aria-label={`Ver imagen ${index + 1}: ${image.alt || title}`}
              aria-pressed={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default HoverImageGallery
