import React from 'react'
import './App.css'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/hooks/useAuth'
import { ControlProvider } from '@/hooks/useControl'
import { ReducerProvider } from '@/hooks/useReducer'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
function App() {
  return (
    <div className="App height100">
      <ConfigProvider locale={zhCN} componentSize="middle">
        <ReducerProvider>
          <AuthProvider>
            <ControlProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </ControlProvider>
          </AuthProvider>
        </ReducerProvider>
      </ConfigProvider>
    </div>
  )
}

export default App
