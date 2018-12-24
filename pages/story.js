import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Layout from '../components/layout'

class Story extends React.Component {
  render() {
    const {story} = this.props
    if (!story) {
      return <Error statusCode={503} />
    }
    return (
      <Layout title={story.title}>
        <div className="root">
          <main>
            <h1 className="story-title">
              <a href={story.url} alt="Link to External Story" target="_blank">
                {story.title}
              </a>
            </h1>
            <div className="story-details">
              <strong>{story.points} points</strong>
              <strong>{story.comments_count} comments</strong>
              <strong>{story.time_ago}</strong>
            </div>
          </main>
          <style jsx>{`
            main {
              padding: 1em;
            }
            .story-title {
              font-size: 1.2rem;
              margin: 0;
              font-weight: 300;
              padding-bottom: 0.5em;
            }
            .story-title a {
              color: #333;
              text-decoration: none;
            }
            .story-title a:hover {
              text-decoration: underline;
            }
            .story-details {
              font-size: 0.8rem;
              padding-bottom: 1em;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 1em;
            }
            .story-details strong {
              margin-right: 1em;
            }
            .story-details a {
              color: #f60;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}

Story.getInitialProps = async ({req, res, query}) => {
  try {
    const {id} = query
    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`)
    const story = await response.json()
    return {story}
  } catch (error) {
    console.log(error)
    return {story: null}
  }
}

export default Story
