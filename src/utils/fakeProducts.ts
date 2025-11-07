import { faker } from '@faker-js/faker'

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

const products: Product[] = Array.from({ length: 10000 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
  image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
}))

// Simulate backend pagination
export const getProducts = async (page: number, limit: number): Promise<Product[]> => {
  const start = (page - 1) * limit
  const end = start + limit
  // simulate network delay
  await new Promise((res) => setTimeout(res, 300))
  return products.slice(start, end)
}

export const getProductById = async (id: string): Promise<Product | null> => {
  await new Promise((res) => setTimeout(res, 200))
  return products.find((p) => p.id === id) ?? null
}
