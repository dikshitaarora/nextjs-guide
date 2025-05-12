import Image from 'next/image'
import lazar from '../lazar.png'

const IMG_URL =
  'https://pbs.twimg.com/media/EnwXVKcVEAEyK5Z?format=jpg&name=medium'

const Home = () => {
  return (
    <>
      <Image src={lazar} alt="Lazar" />

      {/**
       * Error: Invalid src prop (https://pbs.twimg.com/media/EnwXVKcVEAEyK5Z?format=jpg&name=medium) on `next/image`, hostname "pbs.twimg.com" is not configured
       * under images in your `next.config.js`
       *
       * See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
       */}
      <Image src={IMG_URL} alt="Twitter Image" width={500} height={500} />
    </>
  )
}

export default Home
