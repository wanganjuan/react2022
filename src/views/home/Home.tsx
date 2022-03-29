import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { list } from '@/api/own-user'
import { default as useControl } from '@/hooks/useControl'

const { Header, Footer, Sider, Content } = Layout
function Home() {
  const { sidebarCollapsed, setSidebarCollapsed } = useControl()
  useEffect(() => {
    console.log(123)
    list()
  }, [])
  return (
    <Layout className="height100">
      <Sider>Sider</Sider>
      <Layout>
        <Header>
          <div className="hamburger-container">
            {sidebarCollapsed ? (
              <MenuFoldOutlined onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
            ) : (
              <MenuUnfoldOutlined onClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
            )}
          </div>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default Home
