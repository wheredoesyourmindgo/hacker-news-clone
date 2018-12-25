import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import StoryList from '../components/storyList'
import Layout from '../components/layout'
import Link from 'next/link'
// import {withRouter} from 'next/router'

const DEFAULT_PAGE = 1

class Index extends React.Component {
  componentDidMount() {
    this.registerServiceWorker()
  }

  registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          '/service-worker.js'
        )
        console.log('service worker registration successful', registration)
      } catch (err) {
        console.warn('service worker registration failed', err.message)
      }
    }
  }

  render() {
    const {stories, page} = this.props

    if (!stories || stories.length === 0) {
      return <Error statusCode={503} />
    }
    return (
      <Layout>
        <div>
          {/* <h1>Hacker Next</h1> */}
          <StoryList stories={stories} />
          <footer>
            <Link as={`/page/${page + 1}`} href={`/?page=${page + 1}`}>
              <a>More Page Results</a>
            </Link>
          </footer>
          <style jsx>
            {`
              footer {
                padding: 1em;
              }
              footer a {
                font-weight: bold;
                text-decoration: none;
                color: black;
              }
            `}
          </style>
        </div>
      </Layout>
    )
  }
}

Index.getInitialProps = async ({req, res, query}) => {
  try {
    const page = parseInt(query.page, 10) || DEFAULT_PAGE
    const response = await fetch(
      `https://node-hnapi.herokuapp.com/news?page=${page}`
    )
    const stories = await response.json()
    return {stories, page}
  } catch (error) {
    console.log(error)
    return {stories: [], page: DEFAULT_PAGE}
  }
}

export default Index
