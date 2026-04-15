import { useState, useEffect } from 'react'
import { NAV_ITEMS, FIRM } from '@/shared/config/constants'
import styles from './Header.module.css'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="1" y="1" width="22" height="22" stroke="currentColor" strokeWidth="1"/>
              <path d="M1 12 H23 M12 1 V23" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </span>
          <span className={styles.logoText}>{FIRM.name}</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="メニュー"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
