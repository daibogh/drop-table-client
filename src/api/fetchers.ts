import { apiUrl } from '~/constants'
import axios from 'axios'
export const fetcher = axios.create({
  baseURL: apiUrl,
})
export const getFetcher = async <T>(url: string) => (await fetcher.get<T>(url)).data
export const postFetcher = async <T, K>(url: string, options: T) =>
  (await fetcher.post<K>(url, options)).data
