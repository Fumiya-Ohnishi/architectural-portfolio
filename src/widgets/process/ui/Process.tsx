import { useIntersectionObserver } from '@/shared/lib'
import { SectionTitle } from '@/shared/ui'
import styles from './Process.module.css'

const STEPS = [
  { num: '01', title: 'ヒアリング',  body: 'ライフスタイル・敷地・予算・理想を徹底的にお聞きします。設計者と施主の共通言語をここで作ります。' },
  { num: '02', title: '基本設計',    body: 'コンセプトと平面計画を立案します。建物の骨格となるプロポーションと空間序列を決定します。' },
  { num: '03', title: '実施設計',    body: '施工に必要な全ての図面を作成します。素材・納まり・設備を細部まで設計に落とし込みます。' },
  { num: '04', title: '確認申請',    body: '建築確認申請および各種手続きを代行します。法規との調整もプロの視点で最適解を導きます。' },
  { num: '05', title: '施工監理',    body: '設計意図を施工に正確に伝えるため、現場に足を運び品質を確認します。設計者の目が品質を守ります。' },
  { num: '06', title: '完成・引渡し', body: '竣工検査を経て引き渡しを行います。引き渡し後も定期的にアフターフォローを実施します。' },
] as const

export const Process = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className={styles.section} id="process">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle label="03 — Process" title="プロジェクトの進め方" titleEn="HOW WE WORK" />
        </div>

        <div className={styles.steps}>
          {/* Vertical connecting line */}
          <div className={`${styles.connector} ${isVisible ? styles.connectorActive : ''}`} aria-hidden="true" />

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.step} reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <div className={styles.stepLeft}>
                <div className={styles.dot} />
                <div className={styles.stepNum}>{step.num}</div>
              </div>
              <div className={styles.stepRight}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
