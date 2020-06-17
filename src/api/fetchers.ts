import ky from 'ky'
import {apiUrl} from '~/constants'

export const fetcher = ky.create({prefixUrl: apiUrl})
export const getFetcher = async <T>(url: string) => fetcher.get(url).json<T>()
export const postFetcher = async <T,K>(url: string, options:T) => fetcher.post(url,options).json<K>()
