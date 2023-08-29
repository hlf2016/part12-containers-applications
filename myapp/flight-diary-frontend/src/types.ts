export interface Diary {
  date: string
  id: number
  visibility: string
  weather: string
  comment: string
}

export type NewDiary = Omit<Diary, 'id'>
