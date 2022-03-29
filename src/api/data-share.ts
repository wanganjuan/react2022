// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/structuredData/'
import qs from 'querystring'

//  分页
export function list(data: any): Promise<any> {
  const url = baseUrl + 'datasets?' + qs.stringify(data)
  return axios.get(url)
}

// 创建
export function add(data: any): Promise<any> {
  const url = baseUrl + 'dataset'
  return axios.post(url, data)
}

// 更新
export function update(data: any): Promise<any> {
  const url = baseUrl
  return axios.post(url, data)
}

// 删除
export function del(id: number | string): Promise<any> {
  const url = baseUrl + `dataset/${id}`
  return axios.delete(url)
}

// 下线数据集
export function offline(id: number | string): Promise<any> {
  const url = baseUrl + `dataset/${id}/offline`
  return axios.post(url)
}
