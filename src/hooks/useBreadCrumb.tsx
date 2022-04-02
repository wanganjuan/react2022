import React, { useReducer, useState } from 'react'

const BreadCrumbContext = React.createContext({})
const initialData: any = {
  activeMenus: [] //管理端tab菜单
}
// 增加reducer
function reducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      return { ...state, activeMenus: [...state.activeMenus, action.obj] }
    case 'removeMenu':
      // 首先判断新的有没有，没有说明要新增，老的就可以不用移除了
      const obj = action.obj
      const stateNew = JSON.parse(JSON.stringify(state.activeMenus))
      let indexNew = stateNew.findIndex((item: any) => obj.newPath === item.path)
      if (obj.judgePath) {
        indexNew = stateNew.findIndex((item: any) => obj.judgePath.includes(item.path))
      }
      // debugger
      if (indexNew !== -1) {
        let index = stateNew.findIndex((item: any) => obj.newPath === item.path)
        if (obj.judgePath) {
          index = stateNew.findIndex((item: any) => obj.judgePath.includes(item.path))
        }
        if (index !== -1) {
          stateNew.splice(index)
        }
      }
      return stateNew
    case 'clearMenu':
      return initialData
    default:
      return state
  }
}

// 这个绑定到 对应的父节点
export function BreadCrumbProvider({ children }: any) {
  // 这个是默认值
  const [state, dispatch] = useReducer(reducer, {
    activeMenus: [{ a: window.location }]
  })

  return <BreadCrumbContext.Provider value={{ state, dispatch }}>{children}</BreadCrumbContext.Provider>
}

export default function BreadCrumbContextConsumer(): any {
  // 如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，
  // useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
  return React.useContext(BreadCrumbContext)
}
