import { Container, SimpleGrid, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container
      maxW="container.xl"
      centerContent
      py={6}
      mt={12}
      borderTop={1}
      borderTopColor="gray.200"
      borderTopStyle="solid"
    >
      <SimpleGrid columns={3} w="full">
        {Array.from({ length: 9 }).map((_, index) => (
          <Link key={index}>Link</Link>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Footer
