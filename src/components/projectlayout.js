import React from 'react';
import {Global, css } from '@emotion/core';
import Helmet from 'react-helmet'
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const ProjectLayout = ({children}) => {
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
        <title>Projects</title>
        <meta name='description' content='An overview of some of the sites made by James Sinkler' />
      </Helmet>
      <Header />
      <main
      css={css`
          margin-top: 80px;
          padding-top: 20px;
          min-height: calc(100vh - 80px);
          margin: 0px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          h1 {
            padding-top: 20px;
            padding-bottom: 10px;
          }
      `}>{children}</main>
    </>
  )
}

export default ProjectLayout;
