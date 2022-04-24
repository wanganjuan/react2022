import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { default as ElHeader } from './header'
import { default as TagList } from './taglist'
import { default as ElSider } from './sider'
import useAuth from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
const { Footer, Content } = Layout
function RequireAuth({ children }: any) {
  const { authed } = useAuth()
  return authed !== '-1' ? children : <Navigate to="/login" replace />
}
function Index(props: any) {
  console.log('main')
  return (
    <RequireAuth>
      <Layout className="height100">
        <ElSider />
        <Layout>
          <ElHeader />
          <TagList />
          <Content>
            {console.log('content')}
            <div className="main-content">{props.children}</div>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </RequireAuth>
  )
}

export default Index
