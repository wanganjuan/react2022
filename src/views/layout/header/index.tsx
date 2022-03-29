import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { default as useControl } from '@/hooks/useControl'
import { Layout } from 'antd'
const { Header } = Layout
function Index() {
  const { sidebarCollapsed, setSidebarCollapsed } = useControl()
  return (
    <Header className="m-header">
      <div className="hamburger-container">
        {sidebarCollapsed ? (
          <MenuFoldOutlined onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
        ) : (
          <MenuUnfoldOutlined onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
        )}
      </div>
    </Header>
  )
}

export default Index
