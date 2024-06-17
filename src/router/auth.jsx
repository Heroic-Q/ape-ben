import { useLocation, useNavigate } from 'react-router-dom'
import { store } from '@/store'
import { useEffect } from 'react'
import routes from './routes'
import { searchRoute } from '@/utils/function.jsx'

const AuthRouter = (props) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const route = searchRoute(pathname, routes)
    // * 判断是否有Token
    const token = store.getState().token
    if (!token && pathname !== '/login' && route.meta?.requiresAuth) {
      navigate('/login')
    }
  }, [pathname])

  // * 当前账号有权限返回 Router，正常访问页面
  return props.children
}

export default AuthRouter
