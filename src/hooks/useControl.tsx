import React, { useState } from 'react'

const controlContext = React.createContext({})

function useControl(): any {
  const [sidebarCollapsed, setSidebarCollapsed]: any = useState(true)

  return {
    sidebarCollapsed,
    setSidebarCollapsed
  }
}

// 这个绑定到 对应的父节点
export function ControlProvider({ children }: any) {
  const control = useControl()

  return <controlContext.Provider value={control}>{children}</controlContext.Provider>
}

export default function AuthConsumer(): any {
  // 如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，
  // useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
  return React.useContext(controlContext)
}
