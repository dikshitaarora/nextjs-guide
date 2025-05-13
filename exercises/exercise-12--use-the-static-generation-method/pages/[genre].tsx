import { GetStaticProps, GetStaticPaths } from 'next'

type Props = {
  genre: string
}

const Genre = ({ genre }: Props) => {
  return (
    <div>
      <h1>Genre: {genre}</h1>
    </div>
  )
}

/** Required for SSG */
export const getStaticProps: GetStaticProps<Props> = (context) => {
  const genre = context.params?.['genre'] as string

  console.log('Fetching data for genre:', genre)
  if (!genre) {
    return {
      notFound: true // to show a 404 page
    }
  }

  return {
    props: {
      genre
    }
  }
}

/** Required for pages with dynamic paths
 * 1. getStaticPaths must be exported from the page
 * 2. It shoud specify the paths to be pre-rendered at build time
 * 3. fallback:
 *    - false means other routes should give 404
 *    - true means other routes should be rendered on demand
 *    - 'blocking' means other routes should be rendered on demand but the user will not see the page until it is generated
 */
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ['Action', 'Adventure', 'Comedy'].map((genre) => ({
      params: { genre }
    })),
    fallback: true,
    revalidate: 5 // revalidate every 5 seconds
  }
}

export default Genre
