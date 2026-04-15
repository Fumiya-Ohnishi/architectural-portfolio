import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { FIRM } from '@/shared/config/constants'
import styles from './Hero.module.css'

type SvgStyle = CSSProperties & Record<`--${string}`, string>

export const Hero = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // rAF x2 でペイント後にクラスを付与し、アニメーションを確実に起動
    let id: number
    const kick = () => { id = requestAnimationFrame(() => setMounted(true)) }
    id = requestAnimationFrame(kick)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Blueprint background SVG */}
      <div className={`${styles.blueprint} ${mounted ? styles.blueprintActive : ''}`}>
        <svg
          className={styles.blueprintSvg}
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Grid */}
          <g opacity="0.12">
            {Array.from({ length: 23 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 40} x2="1400" y2={i * 40}
                stroke="var(--c-blueprint-bright)" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 36 }, (_, i) => (
              <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="900"
                stroke="var(--c-blueprint-bright)" strokeWidth="0.5" />
            ))}
          </g>

          {/* Ground line */}
          <line
            x1="0" y1="740" x2="1400" y2="740"
            stroke="var(--c-blueprint-bright)" strokeWidth="1"
            className={styles.groundLine}
            style={{ '--dash': '1400px' } as SvgStyle}
          />

          {/* Building A — tall tower */}
          <rect
            x="260" y="180" width="180" height="560"
            fill="none" stroke="var(--c-blueprint-bright)" strokeWidth="1.2"
            className={styles.buildingLine}
            style={{ '--dash': '1500px' } as SvgStyle}
          />
          {/* Tower windows grid */}
          {Array.from({ length: 12 }, (_, row) =>
            Array.from({ length: 3 }, (_, col) => (
              <rect
                key={`tw-${row}-${col}`}
                x={278 + col * 52} y={205 + row * 44}
                width={34} height={28}
                fill="none" stroke="var(--c-blueprint-line)" strokeWidth="0.7"
                className={styles.windowLine}
                style={{ '--dash': '150px', animationDelay: `${1.8 + row * 0.07}s` } as SvgStyle}
              />
            ))
          )}

          {/* Building B — wide low block */}
          <rect
            x="440" y="400" width="500" height="340"
            fill="none" stroke="var(--c-blueprint-bright)" strokeWidth="1.2"
            className={styles.buildingLine}
            style={{ '--dash': '1700px', animationDelay: '0.3s' } as SvgStyle}
          />
          {/* Wide block windows */}
          {Array.from({ length: 5 }, (_, row) =>
            Array.from({ length: 8 }, (_, col) => (
              <rect
                key={`ww-${row}-${col}`}
                x={460 + col * 58} y={425 + row * 60}
                width={40} height={38}
                fill="none" stroke="var(--c-blueprint-line)" strokeWidth="0.7"
                className={styles.windowLine}
                style={{ '--dash': '160px', animationDelay: `${2.0 + row * 0.06}s` } as SvgStyle}
              />
            ))
          )}

          {/* Building C — small annex */}
          <rect
            x="940" y="540" width="200" height="200"
            fill="none" stroke="var(--c-blueprint-bright)" strokeWidth="1.2"
            className={styles.buildingLine}
            style={{ '--dash': '800px', animationDelay: '0.6s' } as SvgStyle}
          />

          {/* Dimension marks */}
          <g stroke="var(--c-blueprint-line)" strokeWidth="0.7" className={styles.dimLine}>
            {/* horizontal dim */}
            <line x1="260" y1="800" x2="440" y2="800" />
            <line x1="260" y1="796" x2="260" y2="804" />
            <line x1="440" y1="796" x2="440" y2="804" />
            {/* vertical dim */}
            <line x1="200" y1="180" x2="200" y2="740" />
            <line x1="196" y1="180" x2="204" y2="180" />
            <line x1="196" y1="740" x2="204" y2="740" />
          </g>

          {/* Dim text */}
          <g fill="var(--c-blueprint-line)" className={styles.dimLine}>
            <text x="350" y="820" textAnchor="middle" fontSize="11" fontFamily="DM Mono, monospace" letterSpacing="0.1em">
              18.0 m
            </text>
            <text x="165" y="470" textAnchor="middle" fontSize="11" fontFamily="DM Mono, monospace" letterSpacing="0.1em"
              transform="rotate(-90, 165, 470)">
              56.0 m
            </text>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className={`${styles.content} ${mounted ? styles.contentActive : ''}`}>
        <p className={styles.eyebrow}>建築設計事務所</p>
        <h1 className={styles.title}>
          <span className={styles.titleLine} style={{ animationDelay: '0.6s' }}>
            {FIRM.name.split(' ')[0]}
          </span>
          <span className={styles.titleLine} style={{ animationDelay: '0.85s' }}>
            {FIRM.name.split(' ')[1]}
          </span>
        </h1>
        <p className={styles.tagline} style={{ animationDelay: '1.1s' }}>
          {FIRM.tagline}
        </p>
        <p className={styles.taglineEn} style={{ animationDelay: '1.3s' }}>
          {FIRM.taglineEn}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className={`${styles.scroll} ${mounted ? styles.scrollActive : ''}`}>
        <span className={styles.scrollLabel}>SCROLL</span>
        <div className={styles.scrollBar}>
          <div className={styles.scrollThumb} />
        </div>
      </div>
    </section>
  )
}
