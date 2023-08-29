import axios from 'axios'
import { Diary, NewDiary } from '../types'

const baseUrl = '/api/diaries'

export const getAllDiaries = () => {
  return axios.get<Diary[]>(baseUrl).then(res => res.data)
}

export const addDiary = (newDiary: NewDiary) => {
  return axios.post<Diary>(baseUrl, newDiary).then(res => res.data)
}
