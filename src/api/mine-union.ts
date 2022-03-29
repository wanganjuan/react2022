// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/jobs'
import qs from 'querystring'

//  分页
export function list(data: any): Promise<any> {
  const url = baseUrl + `/${data.jobId}/dag/${data.dagId}/federal?` + qs.stringify(data)
  return axios.get(url)
}

// 创建
export function add(data: any): Promise<any> {
  const url = baseUrl + `/${data.jobId}/dag/${data.dagId}/federal`
  return axios.post(url, data)
}

// 更新
export function update(data: any): Promise<any> {
  const url = baseUrl
  return axios.post(url, data)
}
// 删除
export function del(jobId: any, dagId: any, id: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/federal?id=${id}`
  return axios.delete(url)
}

// /orgs
export function orgs(): Promise<any> {
  const url = `/apis/v1/orgs?isPagination=false`
  return axios.get(url)
}
