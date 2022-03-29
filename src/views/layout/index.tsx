import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { default as ElHeader } from './header'
import { default as ElSider } from './sider'
const { Footer, Content } = Layout
function Index() {
  return (
    <Layout className="height100">
      <ElSider />
      <Layout>
        <ElHeader />
        <Content>
          <div className="main-content">
            <Outlet />
          </div>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}

export default Index
