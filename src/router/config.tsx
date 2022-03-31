import React from 'react'
import Login from '../views/login/Login'
import { default as Layout } from '../views/layout'
import Table from '../views/table'
import Doc from '../views/doc'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => import('../views/home/Home'))
const Dashboard = React.lazy(() => import('../views/dashboard'))
const NotFound = React.lazy(() => import('../views/404'))
const routerCofig = [
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <Navigate to="/dashboard/index" replace />
  },
  {
    path: '/table',
    element: <Navigate to="/table/index" replace />
  },
  {
    path: '/doc',
    element: <Navigate to="/doc/index" replace />
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        path: 'index',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/table',
    element: <Layout />,
    children: [
      {
        path: 'index',
        element: <Table />
      }
    ]
  },
  {
    path: '/doc',
    element: <Layout />,
    children: [
      {
        path: 'index',
        element: <Doc />
      }
    ]
  },
  {
    path: '/home',
    element: <Layout />,
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
