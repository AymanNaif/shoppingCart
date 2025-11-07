import { useState } from 'react'
import { SimpleGrid, Pagination, Title } from '@mantine/core'
import { useFetch } from '../../hooks/useFetch'
import { getProducts } from '../../utils/fakeProducts'
import ProductCard from './components/ProductCard'
import Loader from '../../components/Loader'

const ProductListPage = () => {
  const [page, setPage] = useState(1)
  const limit = 20

  const { data, isLoading } = useFetch(['products', page], () => getProducts(page, limit))

  return (
    <div>
      <Title order={2} mb="lg">
        Products
      </Title>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
            {data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>

          <div className="flex justify-center mt-8">
            <Pagination
              total={Math.ceil(10000 / limit)}
              value={page}
              onChange={setPage}
              color="blue"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default ProductListPage
