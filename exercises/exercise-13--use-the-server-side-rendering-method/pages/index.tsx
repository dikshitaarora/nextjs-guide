// ✍️ import GetServerSideProps from 'next'
import type { GetStaticProps, GetServerSideProps } from 'next'
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
            <Link href={`/${genre}`}>{genre}</Link>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

// export const getStaticProps: GetStaticProps<Props> = async (context) => {
//   const genres = [
//     'rock',
//     'country',
//     'pop',
//     'rap',
//     'folk',
//     'metal',
//     'rnb',
//     'funk'
//   ]
//   return {
//     props: {
//       genres
//     }
//   }
// }

// ✍️ export the getServerSideProps method instead
/**
 * Required for Server Side Rendering
 * - This method runs on the server for every request
 * - It can be used to fetch data that changes frequently, dynamic data
 * - No getstaticpaths because page gets generated on every request
 * - context
 *  - query: The HTTP request object
 *  - req: The HTTP request object (headers, cookies, can check them for authorisation)
 *  - res: The HTTP response object
 */
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  console.log('getServerSideProps')
  const genres = [
    'rock',
    'country',
    'pop',
    'rap',
    'folk',
    'metal',
    'rnb',
    'funk'
  ]
  return {
    props: {
      genres
    }
  }
}
export default Home
