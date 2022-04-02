import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { default as Layout } from '../../views/layout'
const IndexElement = React.lazy(() => import('../../views/table'))
const Dashboard = React.lazy(() => import('../../views/dashboard'))
const _routerConfig = [
  {
    path: '/dashboard',
    element: <Navigate to="/dashboard/index" replace />,
    meta: {
      show: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    element: <Outlet />,
    meta: {
      title: '首页',
      icon: 'el-icon-tpc-xunjian',
      show: true
    },
    children: [
      {
        path: '/dashboard/index',
        name: 'dashboard-index',
        element: <Dashboard />,
        meta: {
          title: '首页详情'
        }
      },
      {
        path: '/dashboard/table',
        name: 'dashboard-table',
        element: <IndexElement />,
        meta: {
          title: '首页表格'
        }
      }
    ]
  }
]

export default _routerConfig
