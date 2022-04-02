import React, { useState, useEffect } from 'react'
import './login.styl'
import { JSEncrypt } from 'jsencrypt'
import { message } from 'antd'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

function Login() {
  const onKeyDownchange = (e: any) => {
    if (e.keyCode === 13) {
      alert(123)
    }
  }
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    console.log(location, 123)
  }, [location])
  const { login } = useAuth()
  const [query] = useSearchParams()
  const navigate = useNavigate()
  const [username, setUsername] = useState(sessionStorage.getItem('userName') ? String(sessionStorage.getItem('userName')) : '')
  const [password, setPassword] = useState('')
  const [remend, setRemend] = useState(sessionStorage.getItem('userName') ? true : false)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const toLogin = () => {
    if (btnDisabled) {
      return
    }
    setBtnDisabled(true)
    if (!username || !password) {
      return message.warning('域账号或密码不能为空')
    }
    const param: any = {
      loginName: username,
      password: password
    }
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(
      '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDXsv69fn47AY6g7I02NUlxZNsw\ntdCbXkSLtPzeHU7gzUvJZ4SayjsuLJSN5rHhlNr6wuWfTpcz65/2IEVOONsi2I7O\nGoIbnuf4n5d82aPAgHxYUrcd/8+FFhdc6W+vjb2hTJGGWcT6POUrFOkK/DnUV6Mr\nDdvvpBtw7QjD8ewr6QIDAQAB\n-----END PUBLIC KEY-----\n'
    )
    param.password = encrypt.encrypt(password)
    const r = query.get('r')
    login(param)
      .then((res: any) => {
        //将token信息存入请求头
        const token = res['accessToken']
        localStorage.setItem('token', token)
        //登录成功
        navigate(r || '/')
        setBtnDisabled(false)
      })
      .catch(() => {
        setBtnDisabled(false)
      })
  }
  return (
    <div className="login">
      <div className="login-bg">
        <div className="login-content">
          <div className="login-content-detail">
            <div className="login-title">
              <span>账号密码登录</span>
              <span className="login-en">USER LOGIN</span>
            </div>
            <div className="login-main">
              <div className="input-p user">
                <input type="text" placeholder="域账号" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-p password">
                <input
                  type="password"
                  placeholder="密码"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => onKeyDownchange(e)}
                />
              </div>
              <div className={`check-ope ${remend ? 'active' : ''}`} onClick={() => setRemend(!remend)}>
                保存域账号
              </div>
            </div>
            <div
              className="login-button"
              onClick={() => {
                toLogin()
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
