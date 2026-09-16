import { useLayoutEffect, useRef, useState } from 'react'
import './HeroNetwork.css'

const channels = [
  ['TV', .24, .22, '#ffb800'],
  ['OOH', .77, .16, '#ff6238'],
  ['RADIO', .36, .34, '#bb75ff'],
  ['ANALYTICS', .82, .46, '#74aaff'],
  ['DIGITAL', .24, .56, '#31d5ea'],
  ['PATROCINIOS', .62, .74, '#ffca28'],
  ['RETAIL', .52, .83, '#62d3a0'],
  ['PR & INFLUENCERS', .78, .92, '#ff9079'],
]

export default function HeroNetwork() {
  const ref = useRef(null)
  const [layout, setLayout] = useState(null)
  useLayoutEffect(() => {
    const hero = ref.current.closest('.hero')
    const content = hero.querySelector('.hero-content')
    const logo = hero.querySelector('.hero-brand-heading')
    const measure = () => {
      const bounds = hero.getBoundingClientRect()
      const text = content.getBoundingClientRect()
      const mark = logo.getBoundingClientRect()
      setLayout({ width: bounds.width, height: bounds.height, x: text.right - bounds.left + 34, y: mark.top - bounds.top + mark.height * .5 })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(hero)
    observer.observe(content)
    measure()
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className="brand-network" aria-hidden="true">
    {layout && <svg viewBox={`0 0 ${layout.width} ${layout.height}`}>
      {channels.map(([label, x, y, color], i) => {
        const targetX = layout.x + (layout.width - layout.x - 80) * x
        const targetY = layout.height * y
        const path = `M ${layout.x} ${layout.y} C ${layout.x + 60} ${layout.y}, ${targetX - 65} ${targetY}, ${targetX} ${targetY}`
        return <g key={label} style={{ '--channel-color': color, '--channel-delay': `${i * .28}s` }}>
          <path d={path} className="network-wire" pathLength="1" />
          <path d={path} className="network-signal" pathLength="1" />
          <circle cx={targetX} cy={targetY} r="10" className="network-halo" />
          <circle cx={targetX} cy={targetY} r="4" className="network-node" />
          <text x={targetX + (label === 'PR & INFLUENCERS' ? -14 : 14)} y={targetY + 4} textAnchor={label === 'PR & INFLUENCERS' ? 'end' : 'start'}>{label}</text>
        </g>
      })}
      <circle cx={layout.x} cy={layout.y} r="16" className="network-origin-ring" />
      <circle cx={layout.x} cy={layout.y} r="5" className="network-origin" />
    </svg>}
  </div>
}
