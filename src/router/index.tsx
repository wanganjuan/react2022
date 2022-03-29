import React, { Suspense } from 'react'
import { default as routerCofig } from './config'
import { useRoutes } from 'react-router-dom'
function RouterIndex() {
  const routers = useRoutes(routerCofig)
  return (
    //     <Suspense fallback={<div>Loading...</div>}>
    // 这里可以增加一个统一的
    <Suspense fallback={<div>Loading...</div>}>
      <div className="height100">{routers}</div>
    </Suspense>
  )
}

export default RouterIndex
