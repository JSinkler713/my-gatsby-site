import React from 'react';
import {Global, css } from '@emotion/react';
import Helmet from 'react-helmet'
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({children}) => {
  // desctructuring to those two values returned in the object
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global
      styles={css`
          * {
          box-sizing: border-box;
          margin: 0;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;
            
            /* remove margin for main div gatsby mounts into */
            > div {
            margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
          color: #222;
          line-height: 1.1;

          + * {
          margin-top: 0.5rem;
          }
        }
        a:hover {
          font-weight: 600
        }
        strong {
        color: #222;
        }

        li {
        margin-top: 0.25rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          textarea {
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;
            padding: 10px;
          }
          input {
            background-color: white;
            border-radius: 5px;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;
          }
          div input {
            margin-top: 0;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-radius: 2px;
          }
          div label {
            font-size: 1.1em;
          }

      }
      `} />
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Header />
      <main
      css={css`
          margin: 80px auto 4rem;
          max-width: 90vw;
      `}>{children}</main>
    </>
  )
}

export default Layout;
