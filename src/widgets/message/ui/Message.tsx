import { useIntersectionObserver } from '@/shared/lib'
import styles from './Message.module.css'

export const Message = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className={styles.section} id="message">
      <div className={styles.bgDecoration} aria-hidden="true">
        <svg viewBox="0 0 1400 700" fill="none" preserveAspectRatio="xMidYMid slice">
          <rect x="0" y="0" width="1400" height="700" fill="none"/>
          {Array.from({ length: 18 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="1400" y2={i * 40}
              stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
          ))}
          {Array.from({ length: 36 }, (_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="700"
              stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
          ))}
          <circle cx="200" cy="350" r="120" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none"/>
          <circle cx="200" cy="350" r="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"/>
          <circle cx="200" cy="350" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none"/>
          <rect x="1100" y="150" width="200" height="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"/>
          <line x1="1100" y1="350" x2="1300" y2="350" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
          <line x1="1200" y1="150" x2="1200" y2="550" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="container">
        <div className={styles.inner} ref={ref}>
          <div className={`${styles.label} reveal ${isVisible ? 'is-visible' : ''}`}>
            <span>05 — Message</span>
          </div>

          <blockquote
            className={`${styles.quote} reveal d200 ${isVisible ? 'is-visible' : ''}`}
          >
            建築は、社会に対する建築家の回答です。<br />
            私たちは、機能を満たすだけでなく、そこに生きる人の<br className={styles.br} />
            感情と記憶に深く刻まれる空間を、誠実に作り続けたい。<br />
            構造の論理と素材の感触と光の質が調和した時、<br className={styles.br} />
            建築は単なる建物を超えて、場所の記憶になる。
          </blockquote>

          <div className={`${styles.author} reveal d400 ${isVisible ? 'is-visible' : ''}`}>
            <div className={styles.authorLine} />
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>形川 誠一郎</p>
              <p className={styles.authorTitle}>代表取締役 / 一級建築士</p>
              <p className={styles.authorEn}>Seiichiro Katagawa, Principal Architect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
