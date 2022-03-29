import React from 'react'
import Login from '../views/login/Login'
import { default as Layout } from '../views/layout'
import useAuth from '@/hooks/useAuth'
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
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: 'index',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/table',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: 'index',
        element: <Table />
      }
    ]
  },
  {
    path: '/doc',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: 'index',
        element: <Doc />
      }
    ]
  },
  {
    path: '/home',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
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

function RequireAuth({ children }: any) {
  const { authed } = useAuth()
  console.log(authed)
  return authed !== '-1' ? children : <Navigate to="/login" replace />
}
