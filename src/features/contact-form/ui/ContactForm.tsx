import { useContactForm } from '../model/useContactForm'
import styles from './ContactForm.module.css'

const SUBJECT_OPTIONS = [
  '新築住宅のご相談',
  '集合住宅・マンション',
  '商業施設・オフィス',
  'リノベーション',
  'コンサルティング',
  'その他',
]

export const ContactForm = () => {
  const { values, errors, submitted, handleChange, handleSubmit } = useContactForm()

  if (submitted) {
    return (
      <div className={styles.thanks}>
        <div className={styles.thanksIcon}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1"/>
            <path d="M12 20 L17 25 L28 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className={styles.thanksTitle}>送信完了</p>
        <p className={styles.thanksText}>お問い合わせありがとうございます。<br />担当者よりご連絡いたします。</p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="cf-name">
            お名前 <span className={styles.required}>*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            value={values.name}
            onChange={handleChange('name')}
            placeholder="山田 太郎"
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="cf-email">
            メールアドレス <span className={styles.required}>*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            value={values.email}
            onChange={handleChange('email')}
            placeholder="your@email.com"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="cf-subject">お問い合わせの種別</label>
        <select
          id="cf-subject"
          className={styles.select}
          value={values.subject}
          onChange={handleChange('subject')}
        >
          <option value="">選択してください</option>
          {SUBJECT_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="cf-message">
          お問い合わせ内容 <span className={styles.required}>*</span>
        </label>
        <textarea
          id="cf-message"
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          value={values.message}
          onChange={handleChange('message')}
          placeholder="ご相談内容をご記入ください"
          rows={6}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>
      <button type="submit" className={styles.submit}>
        <span>送信する</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10 H16 M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  )
}
