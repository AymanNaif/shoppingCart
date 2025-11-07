import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Group, Title, Badge } from '@mantine/core'
import { useCart } from '../contexts/CartContext'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation()
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()


  return (
    <div className="min-h-screen flex flex-col">
      <header className="shadow bg-white">
        <Container className="flex items-center justify-between py-4">
          <Link to="/" className="no-underline">
            <Title order={3} className="text-gray-900 hover:text-blue-600 transition-colors">
              Smart Shop
            </Title>
          </Link>
          <Group>
            <Link
              to="/"

            >
              <span className={`text-sm font-medium no-underline ${pathname === '/' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600 transition-colors`} >
                Products
              </span >
            </Link>
            <Link
              to="/cart"  

            >

              <span className={`text-sm font-medium no-underline ${pathname === '/cart' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600 transition-colors`} >
                Cart
              </span >

              {cartItemCount > 0 && (
                <Badge
                  color="blue"
                  size="sm"
                  circle
                  className="absolute -top-2 -right-4 min-w-[20px] h-5 flex items-center justify-center"
                >
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </Badge>
              )}
            </Link>
          </Group>
        </Container>
      </header>

      <main className="flex-1 bg-gray-50">
        <Container className="py-6">{children}</Container>
      </main>
    </div>
  )
}

export default MainLayout
