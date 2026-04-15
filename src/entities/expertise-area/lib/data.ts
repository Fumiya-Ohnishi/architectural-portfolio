import type { ExpertiseArea } from '../model/types'

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: 'residential',
    title: '住宅設計',
    titleEn: 'Residential',
    description: '家族の暮らし方を丁寧に読み解き、その本質に応える住まいを提案します。',
    svgPath: 'M4 20 L4 10 L12 4 L20 10 L20 20 Z M8 20 L8 14 L12 14 L16 14 L16 20',
  },
  {
    id: 'multi-family',
    title: '集合住宅',
    titleEn: 'Multi-family',
    description: 'コミュニティの文脈と個の豊かさを両立する、次世代の集住形態を設計します。',
    svgPath: 'M2 22 L2 4 L14 4 L14 22 M14 10 L22 10 L22 22 M6 8 L10 8 M6 13 L10 13 M6 18 L10 18 M17 14 L20 14 M17 18 L20 18',
  },
  {
    id: 'office',
    title: '商業・オフィス',
    titleEn: 'Commercial & Office',
    description: 'ブランドの価値観を空間化し、働く人と訪れる人の体験を最大化します。',
    svgPath: 'M2 22 L2 2 L22 2 L22 22 M6 6 L10 6 M6 10 L10 10 M6 14 L10 14 M14 6 L18 6 M14 10 L18 10 M14 14 L18 14',
  },
  {
    id: 'interior',
    title: 'インテリア',
    titleEn: 'Interior',
    description: '素材・光・家具の三要素を緻密に調整し、上質な内部環境を作り上げます。',
    svgPath: 'M2 20 L22 20 M2 20 L2 6 M22 20 L22 6 M5 20 L5 14 L10 14 L10 20 M14 20 L14 10 L19 10 L19 20 M2 6 L12 2 L22 6',
  },
  {
    id: 'renovation',
    title: 'リノベーション',
    titleEn: 'Renovation',
    description: '既存建物に宿る記憶を尊重しながら、現代の生活に応える空間へと更新します。',
    svgPath: 'M3 21 L3 9 L12 3 L21 9 L21 21 M3 21 L21 21 M7 21 L7 15 L11 15 L11 21 M13 21 L13 12 L19 12 L19 21',
  },
  {
    id: 'consulting',
    title: 'コンサルティング',
    titleEn: 'Consulting',
    description: '計画初期から参加し、事業価値を高める建築的視点でプロジェクトを支援します。',
    svgPath: 'M12 2 L22 8.5 L22 15.5 L12 22 L2 15.5 L2 8.5 Z M12 2 L12 22 M2 8.5 L22 8.5 M2 15.5 L22 15.5',
  },
]
