import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { default as ElHeader } from './header'
import { default as ElSider } from './sider'
import useAuth from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'
const { Footer, Content } = Layout
function RequireAuth({ children }: any) {
  const { authed } = useAuth()
  console.log(authed)
  return authed !== '-1' ? children : <Navigate to="/login" replace />
}
function Index() {
  return (
    <RequireAuth>
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
    </RequireAuth>
  )
}

export default Index
