import { createBrowserRouter } from 'react-router-dom'

import { PUBLIC_URL } from '../constants/EnumType'
import First from '../pages/First'
import Second from '../pages/Second'

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
  basename: `/${PUBLIC_URL}`,
})

export default router
