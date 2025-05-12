import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { pid, comment } = router.query
  return (
    <div>
      <h1>Post ID: {pid}</h1>
      <h2>Comment ID: {comment}</h2>
      <p>This is the comment page.</p>
    </div>
  )
}
export default Comment
