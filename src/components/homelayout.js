import React, {useState} from 'react';
import {Global, css } from '@emotion/react';
import Helmet from 'react-helmet'
import Header from './header';
import Sidebar from './Sidebar';
import useSiteMetadata from '../hooks/use-sitemetadata';

const HomeLayout = ({children, toggleOpen, isOpen}) => {
  // desctructuring to those two values returned in the object
  const { title, description, image, url } = useSiteMetadata()

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
            font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
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
        <meta property="og:image" content={`${url}${image}`} />
      </Helmet>
      <Header toggleOpen={toggleOpen} />
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
      <main
      css={css`
          margin-top: 80px;
          padding-top: 0;
          width: 100vw;
      `}>{children}</main>
    </>
  )
}

export default HomeLayout;
