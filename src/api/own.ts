// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/federaltasks'
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
  const url = baseUrl
  return axios.post(url, data)
}

// 删除
export function del(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}`
  return axios.delete(url)
}

// 通过
export function pass(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}/pass`
  return axios.post(url)
}

// 拒绝
export function reject(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}/reject`
  return axios.post(url)
}

// 日志总行数
export function logsize(taskId: any): Promise<any> {
  const url = baseUrl + `/${taskId}/logsize`
  return axios.get(url)
}

// 的日志
export function logs(taskId: any, data: any): Promise<any> {
  const url = baseUrl + `/${taskId}/logs?` + qs.stringify(data)
  return axios.get(url)
}
