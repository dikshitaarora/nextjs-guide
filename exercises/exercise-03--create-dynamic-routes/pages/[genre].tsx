import { useRouter } from 'next/router'

const Genre = () => {
  const router = useRouter()
  const { genre } = router.query
  return (
    <div>
      <h1>Genre: {genre}</h1>
      <p>This is the genre page.</p>
    </div>
  )
}

export default Genre
