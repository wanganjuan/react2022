import React, { useEffect } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { default as useControl } from '@/hooks/useControl'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import { default as BreadCrumb } from '../breadCrumb'
const headerStyle = {
  display: 'flex',
  alignItems: 'center'
}
const { Header } = Layout
function Index() {
  const { sidebarCollapsed, setSidebarCollapsed } = useControl()
  const { pathname } = useLocation()
  return (
    <Header className="m-header" style={headerStyle}>
      <div className="hamburger-container">
        {sidebarCollapsed ? (
          <MenuFoldOutlined onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
        ) : (
          <MenuUnfoldOutlined onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
        )}
      </div>
      <BreadCrumb />
    </Header>
  )
}

export default Index
