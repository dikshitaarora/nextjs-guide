// ✍️ import GetStaticProps from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { List, ListItem, Container, Heading } from '@chakra-ui/react'

type Props = {
  genres: string[]
}

const Home = ({ genres }: Props) => {
  return (
    <Container maxW="container.xl" pt={10}>
      <Heading mb={4}>Genres:</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre}>
            <Link href={`/${genre}`} passHref>
              {genre}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

/** Required for Server-Side Generation (SSG)
 * 1. name must be getStaticProps
 * 2. next strips this method from the bundle and runs it at build time
 * 3. this makes it safe to use this method for DB connections and API calls
 */
export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Indie']
    }
  }
}

export default Home
