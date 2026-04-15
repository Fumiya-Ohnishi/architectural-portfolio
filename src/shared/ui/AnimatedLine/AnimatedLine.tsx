import { useIntersectionObserver } from '@/shared/lib'
import styles from './AnimatedLine.module.css'

interface Props {
  delay?: number
  vertical?: boolean
  light?: boolean
}

export const AnimatedLine = ({ delay = 0, vertical = false, light = false }: Props) => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={[
        styles.line,
        vertical ? styles.vertical : styles.horizontal,
        light ? styles.light : '',
        isVisible ? styles.animated : '',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    />
  )
}
