/**
 * 自动化处理文件：自动引入路由的核心文件
 */
const files = (require as any).context('.', true, /\.tsx$/)

let configRouters: any = []
/**
 * inject routers
 */
files.keys().forEach((key: any) => {
  if (key === './index.ts') return
  // 读取出文件中的default模块
  configRouters = configRouters.concat(files(key).default)
})
export default configRouters
