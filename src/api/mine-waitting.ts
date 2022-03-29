// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/priorityqueue'
import qs from 'querystring'
//  分页
export function list(data: any): Promise<any> {
  const url = baseUrl + '?' + qs.stringify(data)
  return axios.get(url)
}

// 创建
export function add(data: any): Promise<any> {
  const url = baseUrl
  return axios.post(url, data)
}

// 更新
export function update(data: any): Promise<any> {
  const url = baseUrl + '?' + qs.stringify(data)
  return axios.post(url)
}

// 删除
export function del(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}`
  return axios.delete(url)
}
