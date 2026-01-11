import { createBrowserRouter } from 'react-router-dom'

import First from '../pages/First'
import Second from '../pages/Second'

const basename = (() => {
  const baseUrl = import.meta.env.BASE_URL
  const normalized = baseUrl.replace(/\/$/, '')
  return normalized === '' ? '/' : normalized
})()

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
  },
  {
    path: '/first',
    element: <First />,
  },
  {
    path: '/second',
    element: <Second />,
  },
], {
  basename,
})

export default router
