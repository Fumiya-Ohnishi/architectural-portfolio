import styles from './SectionTitle.module.css'

interface Props {
  label: string
  title: string
  titleEn?: string
  light?: boolean
}

export const SectionTitle = ({ label, title, titleEn, light = false }: Props) => {
  return (
    <div className={`${styles.root} ${light ? styles.light : ''}`}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
      {titleEn && <p className={styles.titleEn}>{titleEn}</p>}
    </div>
  )
}
