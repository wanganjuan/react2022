// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/serving/services'
import qs from 'querystring'

// 分页
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

// 上线 online 服务上线
export function online(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}/online`
  return axios.post(url)
}

// 下线 offline 服务下线
export function offline(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}/offline`
  return axios.post(url)
}

// 服务推理
export function inference(id: number | string, data: any): Promise<any> {
  const url = baseUrl + `/${id}/inference`
  return axios.post(url, data)
}
