import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Title, Text, Stack, Paper, Group, Badge } from '@mantine/core'
import { useCart } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import CartItem from './components/CartItem'

const CartPage = () => {
  const navigate = useNavigate()
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const totalPrice = getTotalPrice()

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <Title order={2} mb="md">
          Your Cart is Empty
        </Title>
        <Text c="dimmed" mb="lg">
          Add some products to get started!
        </Text>
        <Button onClick={() => navigate('/')}>Browse Products</Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Title order={2}>Shopping Cart</Title>
        <Button variant="subtle" color="red" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>

      <Stack gap="md" mb="xl">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </Stack>

      <Paper shadow="sm" p="xl" radius="md" withBorder>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <Text size="lg" fw={600}>
              Total: <Badge size="lg" color="blue">{formatCurrency(totalPrice)}</Badge>
            </Text>
            <Text size="sm" c="dimmed" mt="xs">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
            </Text>
          </div>
          <Group>
            <Button variant="outline" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
            <Button size="lg" color="blue">
              Checkout
            </Button>
          </Group>
        </div>
      </Paper>
    </div>
  )
}

export default CartPage

