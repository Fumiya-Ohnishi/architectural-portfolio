import { NAV_ITEMS, FIRM } from '@/shared/config/constants'
import styles from './Footer.module.css'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topInner}>
            <div className={styles.brand}>
              <div className={styles.brandMark}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="1" y="1" width="30" height="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                  <path d="M1 16 H31 M16 1 V31" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
                  <circle cx="16" cy="16" r="5" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                </svg>
              </div>
              <div>
                <p className={styles.brandName}>{FIRM.name}</p>
                <p className={styles.brandNameJp}>{FIRM.nameJp}</p>
              </div>
            </div>

            <nav className={styles.nav}>
              {NAV_ITEMS.map(item => (
                <a key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.address}>{FIRM.address}</p>
            <p className={styles.copy}>
              © {year} {FIRM.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
