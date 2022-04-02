import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { Layout } from 'antd'
import { default as useControl } from '@/hooks/useControl'
import { Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { default as menuList } from '@/config/menuConfig'
import { default as routerObj } from '@/router/modules'
import { useNavigate, useLocation } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { default as useBreadCrumb } from '@/hooks/useBreadCrumb'
const { SubMenu } = Menu
const { Sider } = Layout
function Index() {
  // 角色的权限暂时不加
  // 这里的路由基本上控制差不多了
  // 处理面包屑了
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [path, setPath] = useState(pathname)
  const { state, dispatch } = useBreadCrumb()
  if (!state.activeMenus.length || state.activeMenus[state.activeMenus.length - 1].a !== pathname) {
    console.log(pathname)
    // setTimeout(() => {
    //   initTab(pathname)
    // }, 5000)
    // initTab(pathname)
  }
  // console.log(state)
  useEffect(() => {})
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
            // if (item.meta.role) {
            //   return item.meta.role.includes(roles.value)
            // } else {
            //   return true
            // }
          })
          // 判断children 是不是只有一个
          if (_tempList && _tempList.length === 1) {
            routerTemp.meta.onlyOne = true
            // 当前只有一个时候，可以这样处理
            // onlyOne 已经可以处理了
            // routerTemp.children = _tempList
          }
        }
        routerList.push(routerTemp)
      }
    }
    return routerList
  }, [routerObj])
  const initTab = (pathVal: any) => {
    let sameTag = false
    const _sessionMenu = state.activeMenus
    if (_sessionMenu && _sessionMenu.length && _sessionMenu[_sessionMenu.length - 1] && _sessionMenu[_sessionMenu.length - 1].path) {
      sameTag = _sessionMenu[_sessionMenu.length - 1].path === path
    }
    !sameTag &&
      dispatch({
        type: 'clearMenu'
      })
    let prouter = null
    let curRouter = null
    // 根据当前的子路由 获取父级对象
    for (const routerTemp of routerListTransform) {
      if (routerTemp.children) {
        for (const childTemp of routerTemp.children) {
          if (childTemp.path === path) {
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
    if (!state.activeMenus.length || state.activeMenus[state.activeMenus.length - 1].a !== pathname) {
      dispatch({
        type: 'add',
        obj: { a: pathname }
      })
    }
    console.log(pathVal)
  }
  // 获取menu node
  const getMenuNode = (menuList: any) => {
    // 目前只判断二层
    const pre = []
    for (let temp of menuList) {
      // 子级有多个
      if (temp.children && temp.children.length > 1) {
        pre.push(
          <SubMenu key={temp.path} title={temp.meta.title} icon={temp.icon ? <SettingOutlined /> : ''}>
            {getMenuNode(temp.children)}
          </SubMenu>
        )
      } else {
        pre.push(
          <Menu.Item key={!temp.children ? temp.path : temp.children[0].path} icon={temp.icon ? <SettingOutlined /> : ''}>
            {temp.meta.title}
          </Menu.Item>
        )
      }
    }
    return pre
  }
  const getMenuList = useMemo(() => {
    return getMenuNode(routerListTransform)
  }, [routerListTransform])
  const { sidebarCollapsed } = useControl()
  const menuClick = (e: any) => {
    if (pathname !== e.key) {
      setPath(e.key)
      navigate(e.key)
      initTab(e.key)
    }
  }
  return (
    <Sider collapsed={!sidebarCollapsed}>
      <div className="sider-title">一只大老虎{JSON.stringify(state)}</div>
      <div className="sidebar-menu-container">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <Menu mode="inline" theme="dark" onClick={menuClick} selectedKeys={[path]} defaultOpenKeys={['/' + path.split('/')[1]]}>
            {getMenuList}
          </Menu>
        </Scrollbars>
      </div>
    </Sider>
  )
}

export default Index
