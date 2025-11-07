import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { productsRouter } from './products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...productsRouter
    ],
  },
])

export default router
