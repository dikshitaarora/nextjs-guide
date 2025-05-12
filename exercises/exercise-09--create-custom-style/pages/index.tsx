import Button from '../src/components/button/button'

const Home = () => {
  return (
    <div
      // ✍️ Define the layout using CSS-in-JS
      //   - set the display to flex
      //   - set the direction to row
      //   - set the row gap to 24px
      //   - justify the content with 'space-between'
      //   - align the items with 'center'
      style={{
        display: 'flex',
        flexDirection: 'row',
        rowGap: '24px',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <h3>My App</h3>
      <Button />
    </div>
  )
}

export default Home
