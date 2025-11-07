import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Image, Text, Title, Stack, Group, Badge, Paper } from '@mantine/core'
import { useFetch } from '../../hooks/useFetch'
import { getProductById } from '../../utils/fakeProducts'
import { formatCurrency } from '../../utils/formatCurrency'
import { useCart } from '../../contexts/CartContext'
import Loader from '../../components/Loader'

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const { data: product, isLoading, isError } = useFetch(
    ['product', id],
    () => getProductById(id!),
    { enabled: !!id }
  )

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError || !product) {
    return (
      <div className="text-center py-12">
        <Title order={2} mb="md">
          Product Not Found
        </Title>
        <Text c="dimmed" mb="lg">
          The product you're looking for doesn't exist.
        </Text>
        <Button onClick={() => navigate('/')}>Back to Products</Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="subtle" mb="lg" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Paper shadow="sm" p="xl" radius="md" withBorder>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src={product.image} alt={product.name} radius="md" fit="cover" />
          </div>

          <Stack gap="lg">
            <div>
              <Title order={1} mb="sm">
                {product.name}
              </Title>
              <Badge color="blue" size="lg" variant="light" mb="md">
                {formatCurrency(product.price)}
              </Badge>
            </div>

            <div>
              <Text fw={600} mb="xs" size="sm">
                Description
              </Text>
              <Text c="dimmed" size="sm" lineClamp={10}>
                {product.description}
              </Text>
            </div>

            <Group mt="auto">
              <Button
                size="lg"
                color="blue"
                onClick={handleAddToCart}
                className="flex-1"
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="blue"
                onClick={() => navigate('/cart')}
              >
                View Cart
              </Button>
            </Group>
          </Stack>
        </div>
      </Paper>
    </div>
  )
}

export default ProductDetailsPage

