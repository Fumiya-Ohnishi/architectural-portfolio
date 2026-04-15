import { useIntersectionObserver } from '@/shared/lib'
import { SectionTitle } from '@/shared/ui'
import { ContactForm } from '@/features/contact-form'
import { FIRM } from '@/shared/config/constants'
import styles from './Contact.module.css'

export const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div ref={ref} className={styles.inner}>
          <div className={`${styles.left} reveal ${isVisible ? 'is-visible' : ''}`}>
            <SectionTitle label="06 — Contact" title="お問い合わせ" titleEn="GET IN TOUCH" />

            <p className={styles.lead}>
              建築に関するご相談、お見積もり、<br />
              資料請求はお気軽にどうぞ。<br />
              まずはお話を聞かせてください。
            </p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>TEL</span>
                <a href={`tel:${FIRM.tel}`} className={styles.infoValue}>{FIRM.tel}</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>EMAIL</span>
                <a href={`mailto:${FIRM.email}`} className={styles.infoValue}>{FIRM.email}</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>ADDRESS</span>
                <span className={styles.infoValue}>{FIRM.address}</span>
              </div>
            </div>

            <div className={styles.decoration} aria-hidden="true">
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="260" height="260" stroke="var(--c-border)" strokeWidth="1"/>
                <rect x="60" y="60" width="180" height="180" stroke="var(--c-border-light)" strokeWidth="1"/>
                <circle cx="150" cy="150" r="60" stroke="var(--c-border)" strokeWidth="1"/>
                <circle cx="150" cy="150" r="4" fill="var(--c-bronze)"/>
                <line x1="20" y1="150" x2="280" y2="150" stroke="var(--c-border-light)" strokeWidth="0.5"/>
                <line x1="150" y1="20" x2="150" y2="280" stroke="var(--c-border-light)" strokeWidth="0.5"/>
              </svg>
            </div>
          </div>

          <div className={`${styles.right} reveal d300 ${isVisible ? 'is-visible' : ''}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
