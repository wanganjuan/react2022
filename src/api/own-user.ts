// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/users'
export function list(data?: any): Promise<any> {
  const url = baseUrl + '?page=1&limit=10'
  return axios.get(url)
}
