import LazyLoad from '@/router/load.jsx'
import { lazy } from 'react'

const routes = [
  {
    path: '/',
    element: LazyLoad(lazy(() => import('@/pages/index')))
  },
  {
    path: '/temp',
    element: LazyLoad(lazy(() => import('@/pages/temp')))
  },
  {
    path: '*',
    element: LazyLoad(lazy(() => import('@/pages/notfound')))
  },
]
export default routes