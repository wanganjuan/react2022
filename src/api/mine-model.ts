// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/models'
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

// d导出
export function exportModel(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}/export`
  return axios.get(url, {
    responseType: 'blob'
  })
}

// 取消收藏
export function dislike(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}/dislike`
  return axios.post(url)
}
