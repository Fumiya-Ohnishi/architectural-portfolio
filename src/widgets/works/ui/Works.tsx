import { useIntersectionObserver } from '@/shared/lib'
import { SectionTitle } from '@/shared/ui'
import { PROJECTS } from '@/entities/project'
import { WorkCard } from './WorkCard'
import styles from './Works.module.css'

export const Works = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className={styles.section} id="works">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle label="02 — Works" title="実績" titleEn="SELECTED WORKS" />
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <WorkCard
              key={project.id}
              project={project}
              delay={Math.floor(i / 3) * 120 + (i % 3) * 100}
              visible={isVisible}
            />
          ))}
        </div>

        <div className={`${styles.cta} reveal d300 ${isVisible ? 'is-visible' : ''}`}>
          <a href="#contact" className={styles.ctaLink}>
            全ての実績を見る
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10 H16 M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
