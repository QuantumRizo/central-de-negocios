import { useState, useEffect } from 'react'
import './ThemeColorPicker.css'

export const secondaryColorOptions = [
  {
    id: 'pms-cool-gray-6-c',
    name: 'Cool Gray 6 C',
    pantone: 'PMS Cool Gray 6 c',
    color: '#959B9B',
    hover: '#7A8080',
    tag: 'Gris Institucional (Default)',
    description: 'Tonalidad neutra oficial, sobriedad, equilibrio y elegancia corporativa.'
  },
  {
    id: 'pms-874',
    name: 'Oro / Bronce',
    pantone: 'PMS 874',
    color: '#B29158',
    hover: '#997B44',
    tag: 'Elegancia Boutique',
    description: 'Prestigio corporativo, alta gama y sofisticación ejecutiva.'
  },
  {
    id: 'pms-548',
    name: 'Azul Petróleo',
    pantone: 'PMS 548',
    color: '#2B4C5F',
    hover: '#1F3947',
    tag: 'Rigor & Gobernanza',
    description: 'Solidez analítica, gobernanza de medios y serenidad institucional.'
  },
  {
    id: 'pms-554',
    name: 'Verde Bosque',
    pantone: 'PMS 554',
    color: '#486856',
    hover: '#375243',
    tag: 'Crecimiento Orgánico',
    description: 'Armonía con el color principal, madurez y estabilidad comercial.'
  },
  {
    id: 'pms-2765',
    name: 'Índigo Profundo',
    pantone: 'PMS 2765',
    color: '#484164',
    hover: '#36304E',
    tag: 'Visión & Vanguardia',
    description: 'Profundidad estratégica, pensamiento disruptivo y criterio directivo.'
  },
  {
    id: 'pms-445',
    name: 'Gris Carbón / Pizarra',
    pantone: 'PMS 445',
    color: '#565C62',
    hover: '#42474C',
    tag: 'Minimalismo Sólido',
    description: 'Contraste técnico sobrio, alta definición y enfoque data-driven.'
  },
  {
    id: 'pms-166',
    name: 'Naranja Central',
    pantone: 'PMS 166',
    color: '#DE5425',
    hover: '#C44317',
    tag: 'Energía & Dinamismo',
    description: 'Alto impacto comercial, creatividad y presencia vibrante.'
  }
]

const ThemeColorPicker = () => {
  const [selectedId, setSelectedId] = useState('pms-cool-gray-6-c')
  const [isOpen, setIsOpen] = useState(false)

  // Apply color to CSS root variables
  const applyColor = (colorOption) => {
    document.documentElement.style.setProperty('--accent', colorOption.color)
    document.documentElement.style.setProperty('--accent-hover', colorOption.hover)
    setSelectedId(colorOption.id)
    try {
      localStorage.setItem('central_theme_accent', colorOption.id)
    } catch (e) {
      // localStorage fallback
    }
  }

  // Load initial color from localStorage or default to PMS Cool Gray 6 C
  useEffect(() => {
    try {
      const savedId = localStorage.getItem('central_theme_accent')
      const found = secondaryColorOptions.find(o => o.id === savedId)
      if (found) {
        applyColor(found)
      } else {
        applyColor(secondaryColorOptions[0])
      }
    } catch (e) {
      applyColor(secondaryColorOptions[0])
    }
  }, [])

  const currentOption = secondaryColorOptions.find(o => o.id === selectedId) || secondaryColorOptions[0]

  return (
    <div className="theme-picker-container">
      {/* Expanded Popover Panel */}
      {isOpen && (
        <div className="theme-picker-popover animate-fade-in-up">
          <div className="popover-header">
            <div className="popover-title-row">
              <span className="popover-badge">MANUAL DE MARCA</span>
              <button 
                className="popover-close-btn" 
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar selector"
              >
                ✕
              </button>
            </div>
            <h4>Color Secundario</h4>
            <p>Selecciona una de las tonalidades secundarias autorizadas en el manual institucional:</p>
          </div>

          <div className="options-list">
            {secondaryColorOptions.map((opt) => (
              <button
                key={opt.id}
                className={`color-option-card ${selectedId === opt.id ? 'is-active' : ''}`}
                onClick={() => {
                  applyColor(opt)
                }}
              >
                <div className="option-swatch-box">
                  <span 
                    className="option-swatch" 
                    style={{ backgroundColor: opt.color }}
                  />
                </div>
                <div className="option-details">
                  <div className="option-title-line">
                    <span className="option-name">{opt.name}</span>
                    <span className="option-pantone">{opt.pantone}</span>
                  </div>
                  <span className="option-tag">{opt.tag}</span>
                  <p className="option-desc">{opt.description}</p>
                </div>
                {selectedId === opt.id && (
                  <div className="active-checkmark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <div className="theme-trigger-bar">
        <button 
          className="theme-trigger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          title="Personalizar color secundario"
        >
          <span className="trigger-icon">🎨</span>
          <span className="trigger-label">Color Secundario:</span>
          <span 
            className="trigger-color-dot" 
            style={{ backgroundColor: currentOption.color }}
          />
          <span className="trigger-pantone-text">{currentOption.pantone}</span>
        </button>

        {/* Quick swatch shortcuts directly on trigger */}
        <div className="trigger-quick-swatches">
          {secondaryColorOptions.map((opt) => (
            <button
              key={opt.id}
              className={`quick-swatch-btn ${selectedId === opt.id ? 'quick-active' : ''}`}
              style={{ backgroundColor: opt.color }}
              onClick={() => applyColor(opt)}
              title={`${opt.name} (${opt.pantone})`}
              aria-label={opt.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThemeColorPicker
