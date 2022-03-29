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
// 创建同步
export function datasetRealtime(data: any): Promise<any> {
  const url = baseUrl + 'datasetRealtime'
  return axios.post(url, data)
}

// 本地数据分析
export function infoAnalysis(id: any): Promise<any> {
  const url = baseUrl + `datasetStatisticalAnalysis/${id}`
  return axios.get(url)
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

// 发布数据集
export function online(id: number | string): Promise<any> {
  const url = baseUrl + `dataset/${id}/online`
  return axios.post(url)
}
// 获取组织公共数据集
export function orgData(id: number | string): Promise<any> {
  const url = baseUrl + `orgPubDataset/${id}`
  return axios.get(url)
}

// 获取组织公共数据集
export function datasets(): Promise<any> {
  const url = baseUrl + `select/datasets`
  return axios.get(url)
}
