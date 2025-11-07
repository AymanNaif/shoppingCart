import ProductListPage from '../pages/ProductListPage/Index'
import ProductDetailsPage from '../pages/ProductDetailsPage/Index'
import CartPage from '../pages/CartPage/Index'

export const productsRouter = [
  { index: true, element: <ProductListPage /> },
  { path: 'products/:id', element: <ProductDetailsPage /> },
  { path: 'cart', element: <CartPage /> },
]

