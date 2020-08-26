import React from 'react';
import {Global, css } from '@emotion/core';
import Helmet from 'react-helmet'
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const HomeLayout = ({children}) => {
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

          * + * {
            margin-top: 1rem;
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

        strong {
        color: #222;
        }

        li {
        margin-top: 0.25rem;
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
          margin-top: 0;
          padding-top: 0;
          height: 90vh;
          width: 100vw;
          background-image: url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          text-align: center;
          h1 {
            padding-top: 20px;
          }
      `}>{children}</main>
    </>
  )
}

export default HomeLayout;
