export type ProjectCategory =
  | '住宅'
  | '集合住宅'
  | 'オフィス'
  | '商業施設'
  | '文化施設'
  | 'ヴィラ'

export interface Project {
  id: string
  number: string
  title: string
  titleEn: string
  category: ProjectCategory
  location: string
  year: number
  area: number
  description: string
}
