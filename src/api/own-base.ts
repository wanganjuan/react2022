// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/users/user'
import qs from 'querystring'

// info
export function info(): Promise<any> {
  const url = baseUrl + '/info'
  return axios.get(url)
}
// 分页
export function list(data: any): Promise<any> {
  const url = baseUrl + '?' + qs.stringify(data)
  return axios.get(url)
}

// 创建
export function add(data: any): Promise<any> {
  const url = baseUrl + '/user'
  return axios.post(url, data)
}

// 更新
export function update(data: any): Promise<any> {
  const url = baseUrl + '/update'
  return axios.post(url, data)
}

// 更新
export function updatePassword(data: any): Promise<any> {
  const url = baseUrl + '/update/passwd'
  return axios.post(url, data)
}

// 删除
export function del(id: number | string): Promise<any> {
  const url = baseUrl + '/user' + `/${id}`
  return axios.delete(url)
}

// 切换角色
export function setAdminOrUser(id: number | string): Promise<any> {
  const url = baseUrl + '/user/setAdminOrUser' + `/${id}`
  return axios.post(url)
}
