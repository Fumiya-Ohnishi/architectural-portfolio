import { useState, type FormEvent, type ChangeEvent } from 'react'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' }

export const useContactForm = () => {
  const [values, setValues] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const errs: FormErrors = {}
    if (!values.name.trim()) errs.name = 'お名前を入力してください'
    if (!values.email.trim()) errs.email = 'メールアドレスを入力してください'
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(values.email)) errs.email = '正しいメールアドレスを入力してください'
    if (!values.message.trim()) errs.message = 'お問い合わせ内容を入力してください'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (field: keyof FormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  return { values, errors, submitted, handleChange, handleSubmit }
}
