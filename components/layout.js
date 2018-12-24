import React from 'react'
import Head from 'next/head'
import Router, {withRouter} from 'next/router'
import Link from 'next/link'

const layout = ({
  children,
  title = 'Hacker News',
  description = 'A Hacker News clone made with Next.js.'
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="root">
        <nav>
          <Link href="/">
            <a>
              <span className="main-title">Hacker Next</span>
            </a>
          </Link>
        </nav>
        <div>{children}</div>
      </div>
      <style jsx>{`
        .root {
          max-width: 800px;
          margin: 0 auto;
          background: #f6f6ef;
        }
        nav {
          background-color: #f60;
          padding: 1em;
        }
        nav > * {
          display: 'inline-block';
          color: black;
        }
        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-weight: bold;
        }
      `}</style>
      <style global jsx>
        {`
          body {
            background-color: white;
            font-family: Verdana, Geneva, sans-serif;
          }
        `}
      </style>
    </div>
  )
}

export default withRouter(layout)
