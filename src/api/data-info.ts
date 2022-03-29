// import qs from 'querystring'
import axios from './axios'
const baseUrl = ''
import qs from 'querystring'

//  引擎分析
export function list(data: any): Promise<any> {
  const url = baseUrl + '/list?' + qs.stringify(data)
  return axios.get(url)
}

// 暂存授权
export function add(data: any): Promise<any> {
  const url = baseUrl + 'save'
  return axios.post(url, data)
}

// 授权审批 生成授权(需要审批权限)
export function update(data: any): Promise<any> {
  const url = baseUrl + 'approve'
  return axios.post(url, data)
}

// 查看审批意见
export function del(id: number | string): Promise<any> {
  const url = baseUrl + `approve/record/${id}`
  return axios.get(url)
}
