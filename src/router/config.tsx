import React from 'react'
import Login from '../views/login/Login'
import { default as Layout } from '../views/layout'
import Table from '../views/table'
import Doc from '../views/doc'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { default as configRouters } from './modules/index'
const Home = React.lazy(() => import('../views/home/Home'))
const NotFound = React.lazy(() => import('../views/404'))
const routerCofig = [
  {
    path: '*',
    element: <NotFound />
  },
  ...configRouters,
  {
    path: '/',
    element: <Navigate to="/dashboard/index" replace />
  },
  {
    path: '/doc',
    element: <Navigate to="/doc/index" replace />
  },
  {
    path: '/doc',
    element: <Outlet />,
    children: [
      {
        path: 'index',
        element: <Doc />
      }
    ]
  },
  {
    path: '/home',
    element: <Outlet />,
    children: [
      {
        path: '*',
        element: <NotFound />
      },
      // { path: ':id', element: <Login /> },
      { path: 'pending', element: <Home /> },
      { path: 'complete', element: <Home /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]
export default routerCofig
