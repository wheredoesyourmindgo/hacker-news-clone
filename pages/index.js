import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

class Index extends React.Component {
  render() {
    const {stories} = this.props
    if (!stories || stories.length === 0) {
      return <Error statusCode={503} />
    }
    return (
      <div>
        <h1>Hacker Next</h1>
        <div>
          {stories.map((story) => (
            <h4 key={story.id}>{story.title}</h4>
          ))}
        </div>
      </div>
    )
  }
}

Index.getInitialProps = async () => {
  try {
    const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1')
    const stories = await response.json()
    return {stories}
  } catch (error) {
    console.log(error)
    return {stories: []}
  }
}

export default Index
