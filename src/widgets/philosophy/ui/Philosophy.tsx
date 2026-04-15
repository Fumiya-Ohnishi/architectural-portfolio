import type { ReactNode } from 'react'
import { useIntersectionObserver } from '@/shared/lib'
import { SectionTitle } from '@/shared/ui'
import styles from './Philosophy.module.css'

interface Pillar {
  number: string
  title: string
  titleEn: string
  body: string
  icon: ReactNode
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: '構造美',
    titleEn: 'Structural Beauty',
    body: '構造体の論理的な美しさを隠さず、むしろ表現の手段として活用します。力の流れを視覚化し、建築の骨格そのものをデザインの主役とします。',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="28" y1="4" x2="28" y2="52" stroke="currentColor" strokeWidth="1"/>
        <line x1="4" y1="28" x2="52" y2="28" stroke="currentColor" strokeWidth="1"/>
        <rect x="12" y="12" width="32" height="32" stroke="currentColor" strokeWidth="1"/>
        <circle cx="28" cy="28" r="8" stroke="currentColor" strokeWidth="1"/>
        <circle cx="28" cy="28" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: '素材感',
    titleEn: 'Material Honesty',
    body: 'コンクリート、木、鉄、ガラス——それぞれの素材が本来持つ質感と重力を尊重します。素材の誠実さが、空間に時間の深みをもたらします。',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="20" stroke="currentColor" strokeWidth="1"/>
        <rect x="30" y="6" width="20" height="20" stroke="currentColor" strokeWidth="1"/>
        <rect x="6" y="30" width="20" height="20" stroke="currentColor" strokeWidth="1"/>
        <rect x="30" y="30" width="20" height="20" stroke="currentColor" strokeWidth="1"/>
        <line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <line x1="30" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: '光と影',
    titleEn: 'Light & Shadow',
    body: '光は最も重要な建築材料のひとつです。開口部の位置と大きさを精密に設計し、時刻と季節によって変化する光の演出を空間に組み込みます。',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 8 L28 48" stroke="currentColor" strokeWidth="1"/>
        <path d="M8 28 L48 28" stroke="currentColor" strokeWidth="1"/>
        <path d="M14 14 L42 42" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <path d="M42 14 L14 42" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
        <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="1"/>
        <path d="M28 14 A14 14 0 0 1 28 42 Z" fill="currentColor" opacity="0.12"/>
      </svg>
    ),
  },
]

export const Philosophy = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className={styles.section} id="philosophy">
      <div className={`container ${styles.inner}`}>
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle label="01 — About" title="設計思想" titleEn="DESIGN PHILOSOPHY" />
        </div>

        <div className={styles.intro}>
          <p
            className={`reveal d200 ${isVisible ? 'is-visible' : ''}`}
          >
            建築とは、機能と美の間に張られた緊張の弧です。<br />
            FORM ARCHITECTSは、その緊張を維持しながら、<br className={styles.brDesktop} />
            理性的でありながら情感を湛える空間を一棟一棟作り上げます。
          </p>
        </div>

        <div className={styles.pillars}>
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} delay={i * 150} visible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PillarCardProps {
  pillar: Pillar
  delay: number
  visible: boolean
}

const PillarCard = ({ pillar, delay, visible }: PillarCardProps) => (
  <div
    className={`${styles.card} reveal ${visible ? 'is-visible' : ''}`}
    style={{ transitionDelay: `${delay + 200}ms` }}
  >
    <div className={styles.cardIcon}>{pillar.icon}</div>
    <div className={styles.cardNum}>{pillar.number}</div>
    <h3 className={styles.cardTitle}>{pillar.title}</h3>
    <p className={styles.cardEn}>{pillar.titleEn}</p>
    <p className={styles.cardBody}>{pillar.body}</p>
  </div>
)
