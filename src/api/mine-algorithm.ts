// import qs from 'querystring'
import axios from './axios'
const baseUrl = '/apis/v1/jobs'
import qs from 'querystring'

// 获取画布信息
export function getDagInfo(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}`
  return axios.get(url)
}

// 保存
export function save(jobId: any, dagId: any, data: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}`
  return axios.post(url, data)
}

// 获取算子信息 components
export function nodeList(): Promise<any> {
  const url = '/apis/v1/components'
  return axios.get(url)
}

// 启动画布
export function start(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/start`
  return axios.post(url)
}

// 查询画布状态
export function status(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/status`
  return axios.get(url)
}
// 复制dag
export function fork(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/fork`
  return axios.post(url)
}

// 停止dag
export function stop(jobId: any, dagId: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/stop`
  return axios.post(url)
}

// 获取dag中节点的日志总行数
export function logsize(jobId: any, dagId: any, cpnName: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/components/${cpnName}/logsize`
  return axios.get(url)
}

// 获取dag中节点的日志
export function logs(jobId: any, dagId: any, cpnName: any, data: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/components/${cpnName}/logs?` + qs.stringify(data)
  return axios.get(url)
}

// 获取dag中节点的测试报告
export function metrics(jobId: any, dagId: any, cpnName: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/components/${cpnName}/metrics`
  return axios.get(url)
}

// 获取dag中节点的数据输出
export function dataOutPut(jobId: any, dagId: any, cpnName: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/components/${cpnName}/output-data`
  return axios.get(url)
}

// 获取dag中节点的模型输出
export function modelOutPut(jobId: any, dagId: any, cpnName: any): Promise<any> {
  const url = baseUrl + `/${jobId}/dag/${dagId}/components/${cpnName}/output-model`
  return axios.get(url)
}

// 获取节点中文名称
export function endpoints(): Promise<any> {
  const url = '/apis/v1/components/endpoints'
  return axios.get(url)
}
