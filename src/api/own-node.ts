// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/orgs'
import qs from 'querystring'

// 分页
export function list(data: any): Promise<any> {
  const url = baseUrl + '/authorized?' + qs.stringify(data)
  return axios.get(url)
}

// 创建
export function add(data: any): Promise<any> {
  const url = baseUrl + `/org/${data.name}`
  return axios.post(url, data.alias)
}

// 更新
export function update(data: any): Promise<any> {
  const url = baseUrl + `/org/${data.id}/updateAlias`
  return axios.post(url, data.alias)
}

// 删除
export function del(id: number | string): Promise<any> {
  const url = baseUrl + `/org/${id}/authorized`
  return axios.delete(url)
}

// add list 获取未授权的组织列表
export function listData(): Promise<any> {
  const url = baseUrl + `/notAuthorized`
  return axios.get(url)
}
