import React from 'react'
import { Card, Image, Text, Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../utils/formatCurrency'
import type { Product } from '../../../utils/fakeProducts'


type Props = { product: Product }

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={product.image} height={160} alt={product.name} />
      </Card.Section>

      <Text fw={500} mt="sm">
        {product.name}
      </Text>

      <Text size="sm" c="dimmed" lineClamp={2}>
        {product.description}
      </Text>

      <Text fw={700} mt="xs">
        {formatCurrency(product.price)}
      </Text>

      <Button
        component={Link}
        to={`/products/${product.id}`}
        fullWidth
        variant="light"
        color="blue"
        mt="md"
      >
        View Details
      </Button>
    </Card>
  )
}

export default ProductCard
