import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { default as Layout } from '../../views/layout'
const IndexElement = React.lazy(() => import('../../views/table'))
const _routerConfig = [
  {
    path: '/table',
    element: <Navigate to="/table/index" replace />,
    meta: {
      show: false
    }
  },
  {
    path: '/table',
    name: 'table',
    element: <Outlet />,
    meta: {
      title: '表格父级',
      icon: 'el-icon-tpc-xunjian',
      show: true
    },
    children: [
      {
        path: '/table/index',
        name: 'table-index',
        element: <IndexElement />,
        meta: {
          title: '表格子级'
        }
      }
    ]
  }
]

export default _routerConfig
