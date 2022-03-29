import React, { useReducer, useState } from 'react'
import { login } from '@/api/common'

const reducerContext = React.createContext({})
const initialState = {
  count: 0
}
// 增加reducer
function reducer(state: any, action: any) {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}
function useAuth(): any {
  const [authed, setAuthed]: any = useState(localStorage.getItem('auth') || '-1')

  return {
    authed,
    login(data: any) {
      return new Promise((resolve, reject) => {
        login(data)
          .then((res) => {
            localStorage.setItem('auth', '99')
            setAuthed(true)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout() {
      return new Promise((res: any) => {
        localStorage.setItem('auth', '-1')
        setAuthed(false)
        res()
      })
    }
  }
}

// 这个绑定到 对应的父节点
export function ReducerProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return <reducerContext.Provider value={{ state, dispatch }}>{children}</reducerContext.Provider>
}

export default function AuthConsumer(): any {
  // 如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，
  // useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
  return React.useContext(reducerContext)
}
