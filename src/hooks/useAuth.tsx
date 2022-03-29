import React, { useState } from 'react'
import { login } from '@/api/common'

const authContext = React.createContext({})

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
export function AuthProvider({ children }: any) {
  const auth = useAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default function AuthConsumer(): any {
  // 如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，
  // useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
  return React.useContext(authContext)
}
