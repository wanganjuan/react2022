import React, { useMemo } from 'react'
import { Breadcrumb } from 'antd'
import { default as routerObj } from '@/router/modules'
import { useLocation } from 'react-router-dom'

const BreadCrumb = () => {
  // 已经是个响应式的，setPathName进行更新了，所以会再次进行熏染
  const { pathname } = useLocation()
  console.log('BreadCrumb')
  const routerListTransform = useMemo(() => {
    const routerList: any = []
    const _base = JSON.parse(JSON.stringify(routerObj))
    for (const routerTemp of _base) {
      if (routerTemp.meta && routerTemp.meta.show) {
        if (routerTemp && routerTemp.children) {
          const _tempList = routerTemp.children.filter((item: any) => {
            if (item.meta.hidden) {
              return false
            }
            return true
          })
          // 判断children 是不是只有一个
          if (_tempList && _tempList.length === 1) {
            routerTemp.meta.onlyOne = true
          }
        }
        routerList.push(routerTemp)
      }
    }
    return routerList
  }, [routerObj])
  let prouter = null
  let curRouter = null
  // 根据当前的子路由 获取父级对象
  for (const routerTemp of routerListTransform) {
    if (routerTemp.children) {
      for (const childTemp of routerTemp.children) {
        if (childTemp.path === pathname) {
          prouter = routerTemp
          curRouter = childTemp
          break
        }
      }
    }
    if (prouter) {
      break
    }
  }
  const breadcrumbList = []
  breadcrumbList.push(prouter)
  breadcrumbList.push(curRouter)
  return (
    <div className="Breadcrumb-container">
      <Breadcrumb>
        {breadcrumbList &&
          breadcrumbList.map((item: any, index: any) => (
            <Breadcrumb.Item key={item.path}>
              {item.redirect === 'noRedirect' || index === breadcrumbList.length - 1 || index === 0 ? (
                <span>{item.meta.title}</span>
              ) : (
                <a href={item.path}>{item.meta.title}</a>
              )}
            </Breadcrumb.Item>
          ))}
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumb
