import React from 'react'
import { Loader as MantineLoader, Center } from '@mantine/core'

const Loader = () => (
  <Center py={60}>
    <MantineLoader color="blue" size="lg" />
  </Center>
)

export default Loader
