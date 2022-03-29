// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/jobs'
import qs from 'querystring'

//  分页
export function list(data: any): Promise<any> {
  const url = baseUrl + `/${data.jobId}/versions?` + qs.stringify(data)
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
export function del(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}`
  return axios.delete(url)
}

// 激活dag
export function activate(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/activate`
  return axios.post(url)
}

// 融合数据
export function fusion(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/fusion`
  return axios.get(url)
}

// 计算融合数据
export function computeFusion(jobId: any, dagId: any, id: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/fusion?datasetId=${id}`
  return axios.post(url)
}
