import Link from 'next/link'

const storyList = ({stories}) => {
  return (
    <div className="root">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <h2 className="story-title">
            <a href={story.url} alt="Link to Story" target="_blank">
              {story.title}
            </a>
          </h2>
          <div className="story-details">
            <span>{story.points || 0} points</span>
            <Link as={`/story/${story.id}`} href={`/story?=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      ))}
      <style jsx>{`
        .root {
          padding: 0 1em;
        }
        .story {
          padding: 1em 0;
        }
        .story-title {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 0.5em;
        }
        .story-title a {
          color: #333;
          text-decoration: none;
        }
        .story-title a:hover,
        .story-details a:hover {
          text-decoration: underline;
        }
        .story-details {
          font-size: 0.8rem;
          font-weight: bold;
        }
        .story-details span {
          margin: 1em;
        }
        .story-details a {
          color: #6600ff;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default storyList
