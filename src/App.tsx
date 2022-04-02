import React from 'react'
import './App.css'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/hooks/useAuth'
import { ControlProvider } from '@/hooks/useControl'
import { ReducerProvider } from '@/hooks/useReducer'
import { BreadCrumbProvider } from '@/hooks/useBreadCrumb'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { default as Layout } from './views/layout'
function App() {
  return (
    <div className="App height100">
      <ConfigProvider locale={zhCN} componentSize="middle">
        <ReducerProvider>
          <BreadCrumbProvider>
            <AuthProvider>
              <ControlProvider>
                <BrowserRouter>
                  <Layout>
                    <Router />
                  </Layout>
                </BrowserRouter>
              </ControlProvider>
            </AuthProvider>
          </BreadCrumbProvider>
        </ReducerProvider>
      </ConfigProvider>
    </div>
  )
}

export default App
