import Axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
// import router from '@/router/index'
import { message } from 'antd'
// import { ElMessage, ElLoading } from 'element-plus'
/**
 * @returns  {AxiosResponse} result
 * @tutorial see more:https://github.com/onlyling/some-demo/tree/master/typescript-width-axios
 * @example
 * service.get<{data: string; code: number}>('/test').then(({data}) => { console.log(data.code) })
 */
const service = Axios.create({
  baseURL: '/api/',
  timeout: 30000
})

// 设置全局loading变量
let loading: any = null
let needLoading = false
let needLoadingRequestCount = 0

function startLoading() {
  //使用Element loading-start 方法
  if (needLoading) {
    // loading = ElLoading.service({
    //   lock: true,
    //   text: '加载中……',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // })
  }
}

let t: any = null

function endLoading() {
  //使用Element loading-close 方法
  needLoading = false

  if (t != null) {
    clearTimeout(t)
  }
  if (loading) {
    loading.close()
  }
  needLoadingRequestCount = 0
}

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    needLoading = true
    //设置延时函数,超过800毫秒时显示loading
    t = setTimeout(startLoading, 800)
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  needLoadingRequestCount--
  if (needLoadingRequestCount <= 0) {
    endLoading()
  }
}

/**
 * @description 请求发起前的拦截器
 * @returns {AxiosRequestConfig} config
 */
service.interceptors.request.use(async (config: AxiosRequestConfig) => {
  showFullScreenLoading()
  //在这里配置请求头等信息
  // 免登录
  if (localStorage.getItem('token') != null) {
    config.headers = {
      Authorization: localStorage.getItem('token') as any
    }
  }
  return config
})

/**
 * @description 响应收到后的拦截器
 * @returns {}
 */
service.interceptors.response.use(
  /** 请求有响应 AxiosResponse*/
  async (response: any) => {
    tryHideFullScreenLoading()
    if (response.config.url.includes('models') && response.config.url.includes('export')) {
      return Promise.resolve({
        content: response.data,
        mimeType: response.headers['content-type'].replace(/^(.*);charset=UTF-8$/, '$1'),
        filename: response.headers['content-disposition'].replace(/^.*filename=(.*)$/, '$1')
      })
    }
    if (response.data.filePath) {
      return Promise.resolve(response.data)
    }
    //在这里可以根据状态码统一作响应失败的提示信息处理
    if (response.status === 200 || response.status === 201 || response.status === 204) {
      if (response.data.message.code !== 0) {
        message.error({ content: response.data.data.desc || '系统异常，请联系管理员' })
        if (response.data.data.code === -2) {
          // const route: any = router.currentRoute
          // if (route.path === '/login') return Promise.reject('false')
          const _href = window.location.href.replace(window.location.origin, '')
          window.location.href = '/login?r=' + _href
          return Promise.reject('false')
        }
        return Promise.reject(response.data.data)
      }
      const total = response.headers['x-total-count']
      if (total) {
        return Promise.resolve({
          data: response.data,
          total: total
        })
      }
      return Promise.resolve(response.data.data)
    } else {
      message.error({ content: '系统异常，请联系管理员' })
    }
  },
  /** 请求无响应 */
  (error: AxiosError) => {
    tryHideFullScreenLoading()
    const __emsg: string = error.message || ''
    return Promise.reject(new Error(__emsg))
  }
)

export default service
