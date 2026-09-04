import { useEffect, useId, useRef, useState } from 'react'
import './BrandMotion.css'

export function AnimatedInfinity({ fullLogo = false }) {
  const id = useId()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <svg ref={ref} className={`brand-infinity ${fullLogo ? 'brand-infinity-full' : ''} ${visible ? 'is-drawing' : ''}`} viewBox={`0 0 1781 ${fullLogo ? 1387 : 1030}`} aria-hidden="true">
    <defs>
      <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="1781" height={fullLogo ? 1387 : 1030}>
        {fullLogo && <g fill="white"><rect x="0" y="1080" width="1781" height="307" /><rect x="1575" y="70" width="206" height="150" /></g>}
        <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
          <path pathLength="1" strokeWidth="180" d="M 340 0 C 90 120 0 345 55 560 C 120 850 465 1040 970 665" />
          <path pathLength="1" strokeWidth="210" d="M 270 470 C 265 230 420 65 570 195 C 825 400 1050 700 1270 865 C 1510 1090 1790 835 1760 490" />
          <path pathLength="1" strokeWidth="210" d="M 1080 475 C 1390 230 1740 315 1550 800" />
        </g>
      </mask>
    </defs>
    <image href="/Logo_CN_2025_Negro.webp" width="1781" height="1387" mask={`url(#${id})`} />
  </svg>
}

export function ScrollWords({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      frame = 0
      const element = ref.current
      const rect = element.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight * .9 - rect.top) / (window.innerHeight * .35)))
      const words = element.querySelectorAll('.brand-word')
      words.forEach((word, index) => {
        word.style.opacity = media.matches ? '1' : String(.4 + .6 * Math.max(0, Math.min(1, progress * words.length - index)))
      })
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    media.addEventListener('change', schedule)
    update()
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      media.removeEventListener('change', schedule)
      cancelAnimationFrame(frame)
    }
  }, [])
  return <span ref={ref}>{children.split(' ').map((word, i) => <span className="brand-word" key={i}>{word} </span>)}</span>
}

export function DrawInView({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      ref.current.classList.toggle('has-drawn', entry.isIntersecting)
    }, { threshold: .15 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div className="brand-draw-block" ref={ref}>{children}</div>
}
