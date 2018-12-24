import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'

const layout = ({children, title, description, backButton}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="root">
        <nav>
          {backButton ? (
            <span className="back-button" onClick={Router.back}>
              &#x2b05;
            </span>
          ) : null}
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
        nav .back-button {
          font-size: 0.9rem;
          padding-right: 1em;
          cursor: pointer;
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

layout.defaultProps = {
  backButton: false,
  title: 'Hacker News',
  description: 'A Hacker News clone made with Next.js.'
}

export default layout
