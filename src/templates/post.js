import React from 'react';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import HomeLayout from '../components/homelayout';
import ReadLink from '../components/readlink';
import useIsOpen from '../hooks/use-isOpen';

// this picks up from context the slug we defined
// we have the slug passed though a forEach in gatsby=node.
// so each pageCreated will have it's own slug
// we handle what to do with each slug here, in out template
export const query = graphql`
  query($slug: String){
    mdx(frontmatter: { slug: {eq: $slug}}) {
      frontmatter {
        title
        author
        meta
      }
      body
    }
  }
`;

// data is the result of the above graphql query
const PostTemplate = ({ data: { mdx: post } }) => {
  const [isOpen, toggleOpen] = useIsOpen()
  return (
  <HomeLayout isOpen={isOpen} toggleOpen={toggleOpen}>
      <Helmet>
        <html lang='en' />
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.meta} />
      </Helmet>
    <h1>{post.frontmatter.title}</h1>
    <p css={css`font-size: 0.75rem`}>{post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to='/'>Back to Home</ReadLink>
  </HomeLayout>
  )
}

export default PostTemplate;
