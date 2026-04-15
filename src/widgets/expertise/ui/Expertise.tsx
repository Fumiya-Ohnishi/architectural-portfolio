import { useIntersectionObserver } from '@/shared/lib'
import { SectionTitle } from '@/shared/ui'
import { EXPERTISE_AREAS } from '@/entities/expertise-area'
import styles from './Expertise.module.css'

export const Expertise = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className={styles.section} id="expertise">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle label="04 — Expertise" title="得意領域" titleEn="AREAS OF EXPERTISE" />
        </div>

        <div className={styles.grid}>
          {EXPERTISE_AREAS.map((area, i) => (
            <div
              key={area.id}
              className={`${styles.card} reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <div className={styles.icon}>
                <svg
                  width="44" height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="currentColor"
                  strokeWidth="0.8"
                >
                  <path d={area.svgPath} />
                </svg>
              </div>
              <h3 className={styles.title}>{area.title}</h3>
              <p className={styles.titleEn}>{area.titleEn}</p>
              <p className={styles.body}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
