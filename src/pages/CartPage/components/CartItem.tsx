import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Text, Group, NumberInput, ActionIcon } from '@mantine/core'
import { useCart } from '../../../contexts/CartContext'
import { formatCurrency } from '../../../utils/formatCurrency'
import type { CartItem as CartItemType } from '../../../contexts/CartContext'

type Props = {
  item: CartItemType
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart()
  const { product, quantity } = item
  const itemTotal = product.price * quantity

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div className="flex flex-col md:flex-row gap-4">
        <Link to={`/products/${product.id}`} className="flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={120}
            radius="md"
            fit="cover"
            className="cursor-pointer hover:opacity-90 transition-opacity"
          />
        </Link>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Link to={`/products/${product.id}`}>
              <Text fw={600} size="lg" className="hover:text-blue-600 transition-colors">
                {product.name}
              </Text>
            </Link>
            <Text size="sm" c="dimmed" lineClamp={2} mt="xs">
              {product.description}
            </Text>
          </div>

          <Group justify="space-between" mt="md" wrap="wrap">
            <div className="flex items-center gap-4">
              <div>
                <Text size="xs" c="dimmed" mb={4}>
                  Quantity
                </Text>
                <NumberInput
                  value={quantity}
                  onChange={(value) => updateQuantity(product.id, Number(value) || 1)}
                  min={1}
                  max={99}
                  w={100}
                  size="sm"
                />
              </div>
              <div>
                <Text size="xs" c="dimmed" mb={4}>
                  Price
                </Text>
                <Text fw={600}>{formatCurrency(product.price)}</Text>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <Text size="xs" c="dimmed" mb={4}>
                  Total
                </Text>
                <Text fw={700} size="lg" c="blue">
                  {formatCurrency(itemTotal)}
                </Text>
              </div>
              <ActionIcon
                color="red"
                variant="light"
                size="lg"
                onClick={() => removeFromCart(product.id)}
                aria-label="Remove item"
              >
                🗑️
              </ActionIcon>
            </div>
          </Group>
        </div>
      </div>
    </Card>
  )
}

export default CartItem

