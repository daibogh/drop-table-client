import { apiUrl } from '~/constants'
import axios from 'axios'
export const fetcher = axios.create({
  baseURL: apiUrl,
})
export const getFetcher = async <T>(url: string) => fetcher.get<T>(url)
export const postFetcher = async <T, K>(url: string, options: T) =>
  fetcher.post<K>(url, options)
