import React from 'react'
import { Layout } from 'antd'
import { default as useControl } from '@/hooks/useControl'
import { Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { default as menuList } from '@/config/menuConfig'
import { useNavigate } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
const { SubMenu } = Menu
const { Sider } = Layout
function Index() {
  const navigate = useNavigate()
  // 获取menu node
  const getMenuNode = (menuList: any) => {
    // 目前只判断二层

    const pre = []
    for (let temp of menuList) {
      if (temp.children) {
        pre.push(
          <SubMenu key={temp.path} title={temp.title} icon={temp.icon ? <SettingOutlined /> : ''}>
            {getMenuNode(temp.children)}
          </SubMenu>
        )
      } else {
        pre.push(
          <Menu.Item key={temp.path} icon={temp.icon ? <SettingOutlined /> : ''}>
            {temp.title}
          </Menu.Item>
        )
      }
    }
    return pre
  }
  const { sidebarCollapsed } = useControl()
  const menuClick = (e: any) => {
    navigate(e.key)
  }
  return (
    <Sider collapsed={!sidebarCollapsed}>
      <div className="sider-title">一只大老虎</div>
      <div className="sidebar-menu-container">
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <Menu mode="inline" theme="dark" onClick={menuClick}>
            {getMenuNode(menuList)}
          </Menu>
        </Scrollbars>
      </div>
    </Sider>
  )
}

export default Index
