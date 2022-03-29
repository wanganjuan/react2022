// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/jobs'
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
  const url = baseUrl + `/${data.id}`
  return axios.post(url, data)
}

// 删除
export function del(id: number | string): Promise<any> {
  const url = baseUrl + `/${id}`
  return axios.delete(url)
}

/// 收藏dag
export function like(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/like`
  return axios.post(url)
}

/// 发布dag
export function serving(jobId: any, dagId?: any, serviceId?: string): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/serving?serviceId=${serviceId}`
  return axios.post(url)
}
