type HomeProps = {
  title: string
}
const Home = ({ title }: HomeProps) => {
  return (
    <div>
      {/* <h1>Overriding the App component</h1> */}
      {/* ✍️ render the title prop */}
      <h1>{title}</h1>
    </div>
  )
}

export default Home
