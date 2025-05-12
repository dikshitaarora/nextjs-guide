import Head from 'next/head'
import { ChakraProvider, Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <ChakraProvider>
      {/* ✍️ add title and description using the Head component */}
      <Head>
        <title>Homepage</title>
        <meta name="description" content="This is my Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Head>
        <meta name="og:title" content="NextJS Course" key="title" />
      </Head>
      <Head>
        <meta name="og:title" content="NextJS trial" key="title" />
      </Head>
      <Heading w="full" textAlign="center">
        This is our homepage content!
      </Heading>
    </ChakraProvider>
  )
}
export default Home
