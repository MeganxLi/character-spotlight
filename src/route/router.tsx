import { createBrowserRouter } from 'react-router-dom'

import First from '../pages/First'
import Second from '../pages/Second'

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <First />,
    },
    {
      path: 'first',
      element: <First />,
    },
    {
      path: 'second',
      element: <Second />,
    },
  ],
)

export default router
