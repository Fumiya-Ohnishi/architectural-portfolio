import type { ReactNode } from 'react'
import type { Project } from '@/entities/project'
import styles from './WorkCard.module.css'


interface Props {
  project: Project
  delay?: number
  visible?: boolean
}

const BLUEPRINT_SVGS: Record<string, ReactNode> = {
  'white-peak-house': (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="280" stroke="rgba(186,225,255,0.2)" strokeWidth="0.5"/>
      <path d="M40 200 L140 80 L240 200 L240 300 L40 300 Z" stroke="rgba(186,225,255,0.8)" strokeWidth="1.2"/>
      <line x1="40" y1="300" x2="240" y2="300" stroke="rgba(186,225,255,0.9)" strokeWidth="1.5"/>
      <rect x="80" y="210" width="50" height="90" stroke="rgba(186,225,255,0.6)" strokeWidth="0.8"/>
      <rect x="150" y="210" width="50" height="90" stroke="rgba(186,225,255,0.6)" strokeWidth="0.8"/>
      <rect x="110" y="140" width="60" height="45" stroke="rgba(186,225,255,0.6)" strokeWidth="0.8"/>
      <line x1="10" y1="300" x2="270" y2="300" stroke="rgba(186,225,255,0.3)" strokeWidth="0.5"/>
      <line x1="40" y1="340" x2="240" y2="340" stroke="rgba(186,225,255,0.4)" strokeWidth="0.5"/>
      <line x1="40" y1="344" x2="40" y2="336" stroke="rgba(186,225,255,0.4)" strokeWidth="0.5"/>
      <line x1="240" y1="344" x2="240" y2="336" stroke="rgba(186,225,255,0.4)" strokeWidth="0.5"/>
      <text x="140" y="355" textAnchor="middle" fill="rgba(186,225,255,0.5)" fontSize="9" fontFamily="DM Mono, monospace" letterSpacing="0.1em">12.0 m</text>
    </svg>
  ),
  'axis-tower': (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="280" stroke="rgba(186,225,255,0.2)" strokeWidth="0.5"/>
      <rect x="90" y="40" width="100" height="260" stroke="rgba(186,225,255,0.9)" strokeWidth="1.2"/>
      {Array.from({length:11}, (_,r) => Array.from({length:4}, (_,c) => (
        <rect key={`tw${r}${c}`} x={98+c*22} y={50+r*22} width={14} height={14} stroke="rgba(186,225,255,0.5)" strokeWidth="0.7"/>
      )))}
      <line x1="90" y1="300" x2="190" y2="300" stroke="rgba(186,225,255,0.4)" strokeWidth="0.5"/>
      <line x1="90" y1="296" x2="90" y2="304" stroke="rgba(186,225,255,0.4)" strokeWidth="0.5"/>
      <line x1="190" y1="296" x2="190" y2="304" stroke="rgba(186,225,255,0.4)" strokeWidth="0.5"/>
      <text x="140" y="318" textAnchor="middle" fill="rgba(186,225,255,0.5)" fontSize="9" fontFamily="DM Mono, monospace">10.0 m</text>
    </svg>
  ),
  'aoyama-residence': (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="280" stroke="rgba(186,225,255,0.2)" strokeWidth="0.5"/>
      <rect x="30" y="80" width="220" height="220" stroke="rgba(186,225,255,0.9)" strokeWidth="1.2"/>
      <line x1="30" y1="80" x2="250" y2="80" stroke="rgba(186,225,255,0.6)" strokeWidth="1"/>
      <line x1="30" y1="130" x2="250" y2="130" stroke="rgba(186,225,255,0.4)" strokeWidth="0.6"/>
      <line x1="30" y1="180" x2="250" y2="180" stroke="rgba(186,225,255,0.4)" strokeWidth="0.6"/>
      <line x1="30" y1="230" x2="250" y2="230" stroke="rgba(186,225,255,0.4)" strokeWidth="0.6"/>
      <line x1="30" y1="40" x2="250" y2="40" stroke="rgba(186,225,255,0.6)" strokeWidth="1"/>
      <rect x="40" y="90" width="30" height="30" stroke="rgba(186,225,255,0.5)" strokeWidth="0.7"/>
      <rect x="80" y="90" width="30" height="30" stroke="rgba(186,225,255,0.5)" strokeWidth="0.7"/>
      <rect x="120" y="90" width="30" height="30" stroke="rgba(186,225,255,0.5)" strokeWidth="0.7"/>
      <rect x="160" y="90" width="30" height="30" stroke="rgba(186,225,255,0.5)" strokeWidth="0.7"/>
      <rect x="200" y="90" width="30" height="30" stroke="rgba(186,225,255,0.5)" strokeWidth="0.7"/>
    </svg>
  ),
  'hiro-pavilion': (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="280" stroke="rgba(186,225,255,0.2)" strokeWidth="0.5"/>
      <rect x="30" y="160" width="220" height="120" stroke="rgba(186,225,255,0.9)" strokeWidth="1.2"/>
      <path d="M30 160 L140 80 L250 160" stroke="rgba(186,225,255,0.9)" strokeWidth="1.2" fill="none"/>
      <line x1="80" y1="160" x2="80" y2="280" stroke="rgba(186,225,255,0.4)" strokeWidth="0.6"/>
      <line x1="140" y1="160" x2="140" y2="280" stroke="rgba(186,225,255,0.4)" strokeWidth="0.6"/>
      <line x1="200" y1="160" x2="200" y2="280" stroke="rgba(186,225,255,0.4)" strokeWidth="0.6"/>
      <rect x="50" y="200" width="60" height="80" stroke="rgba(186,225,255,0.5)" strokeWidth="0.7"/>
      <rect x="170" y="200" width="60" height="80" stroke="rgba(186,225,255,0.5)" strokeWidth="0.7"/>
    </svg>
  ),
  'museum-of-light': (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="280" stroke="rgba(186,225,255,0.2)" strokeWidth="0.5"/>
      <rect x="30" y="100" width="160" height="200" stroke="rgba(186,225,255,0.9)" strokeWidth="1.2"/>
      <rect x="190" y="160" width="60" height="140" stroke="rgba(186,225,255,0.9)" strokeWidth="1.2"/>
      <path d="M30 100 L110 40 L190 100" stroke="rgba(186,225,255,0.7)" strokeWidth="1" fill="none"/>
      <path d="M110 40 L110 100" stroke="rgba(186,225,255,0.5)" strokeWidth="0.8"/>
      <line x1="30" y1="180" x2="190" y2="180" stroke="rgba(186,225,255,0.3)" strokeWidth="0.5"/>
      <line x1="30" y1="250" x2="190" y2="250" stroke="rgba(186,225,255,0.3)" strokeWidth="0.5"/>
      <rect x="70" y="110" width="80" height="60" stroke="rgba(186,225,255,0.4)" strokeWidth="0.7"/>
    </svg>
  ),
  'lakeside-retreat': (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="280" stroke="rgba(186,225,255,0.2)" strokeWidth="0.5"/>
      <rect x="30" y="140" width="140" height="140" stroke="rgba(186,225,255,0.9)" strokeWidth="1.2"/>
      <rect x="170" y="200" width="80" height="80" stroke="rgba(186,225,255,0.9)" strokeWidth="1.2"/>
      <line x1="30" y1="280" x2="250" y2="280" stroke="rgba(186,225,255,0.9)" strokeWidth="1.5"/>
      <line x1="0" y1="285" x2="280" y2="285" stroke="rgba(186,225,255,0.2)" strokeWidth="0.5"/>
      <rect x="50" y="160" width="40" height="50" stroke="rgba(186,225,255,0.5)" strokeWidth="0.8"/>
      <rect x="110" y="160" width="40" height="50" stroke="rgba(186,225,255,0.5)" strokeWidth="0.8"/>
      <line x1="170" y1="140" x2="250" y2="140" stroke="rgba(186,225,255,0.5)" strokeWidth="0.8"/>
      <text x="140" y="310" textAnchor="middle" fill="rgba(186,225,255,0.4)" fontSize="9" fontFamily="DM Mono, monospace">PLAN — 1:100</text>
    </svg>
  ),
}

const RENDERED_ACCENTS: Record<string, string> = {
  'white-peak-house':   'linear-gradient(160deg, #E8E4DC 0%, #D4C8B8 100%)',
  'axis-tower':         'linear-gradient(160deg, #ECEAE5 0%, #D8D3CB 100%)',
  'aoyama-residence':   'linear-gradient(160deg, #EBE7E0 0%, #D6D0C6 100%)',
  'hiro-pavilion':      'linear-gradient(160deg, #EDE9E2 0%, #D9D2C5 100%)',
  'museum-of-light':    'linear-gradient(160deg, #EAE7E0 0%, #D3CEC4 100%)',
  'lakeside-retreat':   'linear-gradient(160deg, #E6E3DB 0%, #CFCABD 100%)',
}

export const WorkCard = ({ project, delay = 0, visible = false }: Props) => {
  return (
    <article
      className={`${styles.card} reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.visual}>
        {/* Blueprint face */}
        <div className={styles.blueprint}>
          <div className={styles.bpGrid} />
          <div className={styles.bpDrawing}>
            {BLUEPRINT_SVGS[project.id]}
          </div>
          <div className={styles.bpMeta}>
            <span className={styles.bpNum}>{project.number}</span>
            <span className={styles.bpLabel}>{project.category}</span>
          </div>
        </div>

        {/* Rendered face */}
        <div
          className={styles.rendered}
          style={{ background: RENDERED_ACCENTS[project.id] }}
        >
          <div className={styles.renderedInner}>
            <div className={styles.renderedGeom}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="60" width="160" height="120" fill="rgba(28,28,28,0.06)" stroke="rgba(28,28,28,0.2)" strokeWidth="1"/>
                <rect x="20" y="40" width="160" height="20" fill="rgba(28,28,28,0.04)" stroke="rgba(28,28,28,0.15)" strokeWidth="1"/>
                <rect x="70" y="100" width="60" height="80" fill="rgba(28,28,28,0.05)" stroke="rgba(28,28,28,0.18)" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Hover overlay info */}
        <div className={styles.overlay}>
          <span className={styles.overlayNum}>{project.number}</span>
          <span className={styles.viewLink}>
            VIEW PROJECT
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.infoTop}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.titleEn}>{project.titleEn}</p>
        <p className={styles.location}>{project.location} — {project.area}㎡</p>
      </div>
    </article>
  )
}
